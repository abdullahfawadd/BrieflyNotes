// Simple server-side rate limiter
// Uses in-memory store (resets on server restart - fine for MVP)

interface RateLimitEntry {
    count: number;
    resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '10', 10);
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10);

export interface RateLimitResult {
    allowed: boolean;
    remaining: number;
    resetAt: number;
}

export function checkRateLimit(identifier: string): RateLimitResult {
    const now = Date.now();
    const entry = store.get(identifier);

    // Clean up expired entries periodically
    if (store.size > 10000) {
        for (const [key, value] of store) {
            if (value.resetAt < now) {
                store.delete(key);
            }
        }
    }

    // No existing entry or expired
    if (!entry || entry.resetAt < now) {
        const resetAt = now + RATE_LIMIT_WINDOW_MS;
        store.set(identifier, { count: 1, resetAt });
        return {
            allowed: true,
            remaining: RATE_LIMIT_MAX - 1,
            resetAt
        };
    }

    // Existing entry, check limit
    if (entry.count >= RATE_LIMIT_MAX) {
        return {
            allowed: false,
            remaining: 0,
            resetAt: entry.resetAt
        };
    }

    // Increment count
    entry.count++;
    store.set(identifier, entry);

    return {
        allowed: true,
        remaining: RATE_LIMIT_MAX - entry.count,
        resetAt: entry.resetAt
    };
}

export function getClientIdentifier(request: Request): string {
    // Try to get real IP from various headers
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    const realIp = request.headers.get('x-real-ip');
    if (realIp) {
        return realIp;
    }

    // Fallback - in production use proper IP detection
    return 'unknown';
}
