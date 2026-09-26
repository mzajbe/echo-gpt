"use client";

import React, { useState } from "react";
import { GreetingSection } from "./greeting-section";
import { PromptComposer } from "./prompt-composer";
import { QuickActionCards, QuickAction } from "./quick-action-cards";
import { MessageSquare, History, ArrowRight } from "lucide-react";

const recentPrompts = [
  "Refactor Next.js App Router layout components",
  "Summarize Q3 financial intelligence report",
  "Create SVG illustration prompt for SaaS hero",
];

export function MainHomeView() {
  const [activePrompt, setActivePrompt] = useState("");

  const handleActionSelect = (action: QuickAction) => {
    setActivePrompt(action.promptPrefix);
  };

  return (
    <div className="flex flex-1 flex-col justify-center py-6 sm:py-10 px-2 sm:px-4 max-w-4xl mx-auto w-full space-y-6 sm:space-y-8">
      {/* 1. Greeting Section */}
      <GreetingSection />

      {/* 2. Main AI Prompt Composer */}
      <PromptComposer onSend={(p) => console.log("Sending prompt:", p)} />

      {/* 3. Quick Action Cards */}
      <QuickActionCards onSelectAction={handleActionSelect} />

      {/* 4. Subtle Recent Sessions */}
      <section aria-label="Recent Sessions" className="w-full max-w-3xl mx-auto pt-1">
        <div className="flex items-center justify-between px-0.5 mb-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <History className="h-3.5 w-3.5 text-slate-400" />
            <span>Recent Sessions</span>
          </div>
          <button className="text-[11px] font-medium text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer transition-colors">
            <span>View all</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {recentPrompts.map((p, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-2xs hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition-colors cursor-pointer"
            >
              <MessageSquare className="h-3 w-3 text-slate-400" />
              <span className="truncate max-w-[240px] sm:max-w-xs">{p}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
