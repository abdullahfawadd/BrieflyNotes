'use client';

import { SummaryMode } from '@/types';

interface ModeSelectorProps {
    selectedMode: SummaryMode;
    onModeChange: (mode: SummaryMode) => void;
    disabled?: boolean;
}

const modes: { value: SummaryMode; label: string; icon: string; description: string }[] = [
    {
        value: 'quick',
        label: 'Quick Notes',
        icon: 'bolt',
        description: '3-5 key points, ultra-concise'
    },
    {
        value: 'study',
        label: 'Study Notes',
        icon: 'school',
        description: 'Detailed with headings'
    },
    {
        value: 'action',
        label: 'Action Points',
        icon: 'checklist',
        description: 'Actionable takeaways'
    }
];

export default function ModeSelector({ selectedMode, onModeChange, disabled }: ModeSelectorProps) {
    return (
        <div className="rounded-xl bg-white dark:bg-[#18181b] border border-slate-200 dark:border-slate-800 p-4">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Summary Mode</h3>
                <span className="text-xs text-slate-400">Choose output style</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {modes.map((mode) => (
                    <button
                        key={mode.value}
                        type="button"
                        onClick={() => onModeChange(mode.value)}
                        disabled={disabled}
                        className={`relative p-4 rounded-lg border-2 text-left transition-all ${selectedMode === mode.value
                                ? 'border-[#1246e2] bg-[#1246e2]/5 dark:bg-[#1246e2]/10'
                                : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        {/* Active Indicator */}
                        {selectedMode === mode.value && (
                            <div className="absolute top-2 right-2">
                                <span className="material-symbols-outlined text-[#1246e2] text-[16px]">check_circle</span>
                            </div>
                        )}

                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${selectedMode === mode.value
                                ? 'bg-[#1246e2]/10 text-[#1246e2]'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}>
                            <span className="material-symbols-outlined text-xl">{mode.icon}</span>
                        </div>

                        {/* Label */}
                        <div className={`font-semibold text-sm mb-1 ${selectedMode === mode.value
                                ? 'text-[#1246e2]'
                                : 'text-slate-700 dark:text-slate-200'
                            }`}>
                            {mode.label}
                        </div>

                        {/* Description */}
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                            {mode.description}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
