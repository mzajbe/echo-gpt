"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function UpgradeCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/70 p-3.5 shadow-2xs backdrop-blur-xs">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600/10 text-indigo-600">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-semibold text-slate-900">
            NovaAI Pro
          </span>
        </div>
        <Badge variant="indigo" className="text-[10px] px-1.5 py-0">
          v3.5
        </Badge>
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500 mb-3">
        Unlock Claude 3.7 Sonnet, GPT-4o, unlimited agents & fast priority compute.
      </p>

      {/* Usage indicator */}
      <div className="mb-3 space-y-1">
        <div className="flex justify-between text-[10px] font-medium text-slate-500">
          <span>Monthly Credits</span>
          <span className="font-semibold text-slate-700">82% used</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80">
          <div className="h-full rounded-full bg-indigo-600 w-[82%]" />
        </div>
      </div>

      <Button
        variant="default"
        size="sm"
        className="w-full h-8 text-xs font-medium justify-between bg-slate-900 text-white hover:bg-slate-800 shadow-2xs group cursor-pointer"
      >
        <span>Upgrade to Pro</span>
        <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
      </Button>
    </div>
  );
}
