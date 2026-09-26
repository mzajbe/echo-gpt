"use client";

import React from "react";
import {
  FileText,
  Code2,
  Image as ImageIcon,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  promptPrefix: string;
}

const actions: QuickAction[] = [
  {
    id: "write",
    title: "Write",
    description: "Draft emails, essays, blogs and more.",
    icon: FileText,
    promptPrefix: "Help me write a ",
  },
  {
    id: "code",
    title: "Code",
    description: "Build, debug, explain and improve code.",
    icon: Code2,
    promptPrefix: "Write a React function to ",
  },
  {
    id: "image",
    title: "Create Image",
    description: "Generate stunning images.",
    icon: ImageIcon,
    promptPrefix: "Generate a realistic image of ",
  },
  {
    id: "research",
    title: "Research",
    description: "Get deep insights and summaries.",
    icon: Compass,
    promptPrefix: "Provide a comprehensive summary on ",
  },
];

interface QuickActionCardsProps {
  onSelectAction?: (action: QuickAction) => void;
}

export function QuickActionCards({ onSelectAction }: QuickActionCardsProps) {
  return (
    <section aria-label="Quick Prompt Actions" className="w-full max-w-3xl mx-auto my-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={() => onSelectAction?.(action)}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-3.5 text-left shadow-2xs transition-all duration-200 hover:border-slate-300 hover:bg-slate-50/80 hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 cursor-pointer select-none"
            >
              <div>
                {/* Header with Icon and subtle arrow */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition-colors group-hover:bg-white group-hover:shadow-2xs">
                    <Icon className="h-3.5 w-3.5 text-slate-700" />
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-slate-600" />
                </div>

                {/* Title & Description */}
                <h2 className="text-xs font-semibold text-slate-900 group-hover:text-slate-950 mb-0.5">
                  {action.title}
                </h2>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
