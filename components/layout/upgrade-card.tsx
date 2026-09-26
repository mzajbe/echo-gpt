"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UpgradeCard() {
  return (
    <div className="rounded-lg border border-slate-200/70 bg-slate-50/50 p-3 shadow-2xs">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
          <span className="text-xs font-semibold text-slate-900">NovaAI Pro</span>
        </div>
        <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.2 rounded">
          v3.5
        </span>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500 mb-2.5">
        Unlock Claude 3.7 Sonnet, GPT-4o & priority compute.
      </p>

      {/* Usage indicator */}
      <div className="mb-2.5 space-y-1">
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>Monthly Usage</span>
          <span className="font-semibold text-slate-700">82%</span>
        </div>
        <div className="h-1 w-full rounded-full bg-slate-200/80 overflow-hidden">
          <div className="h-full rounded-full bg-indigo-600 w-[82%]" />
        </div>
      </div>

      <Button
        variant="default"
        size="sm"
        className="w-full h-7 text-[11px] font-semibold justify-between bg-slate-900 text-white hover:bg-slate-800 shadow-2xs group cursor-pointer"
      >
        <span>Upgrade Plan</span>
        <ArrowRight className="h-3 w-3 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
      </Button>
    </div>
  );
}
