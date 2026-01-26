import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary brand color
                primary: "#0b50da",
                "primary-hover": "#0945b8",

                // Light mode
                "background-light": "#f5f6f8",
                "card-light": "#ffffff",
                "text-main": "#0d121c",
                "text-muted": "#49659c",
                "border-subtle": "#e2e8f0",

                // Dark mode  
                "background-dark": "#0B0B0B",
                "surface-dark": "#121212",
                "card-dark": "#1a2230",
                "border-dark": "#27272a",
                "text-light": "#F3F4F6",
                "text-muted-dark": "#9CA3AF",

                // Paper theme (editorial)
                paper: "#fdfdfd",
                surface: "#f8f9fa",
                ink: "#1e293b",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                sans: ["Inter", "sans-serif"],
                serif: ["Lora", "Merriweather", "serif"],
                mono: ["JetBrains Mono", "ui-monospace", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0.375rem",
                md: "0.375rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px",
            },
            boxShadow: {
                subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                paper: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
            },
            lineHeight: {
                "loose-p": "2",
            },
        },
    },
    plugins: [],
};
export default config;
