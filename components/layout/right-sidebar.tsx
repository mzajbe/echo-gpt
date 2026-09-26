"use client";

import React from "react";
import {
  X,
  Cpu,
  Brain,
  FileText,
  Sliders,
  Zap,
  Info,
  Clock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RightSidebar({ isOpen, onClose }: RightSidebarProps) {
  if (!isOpen) return null;

  return (
    <aside className="w-80 shrink-0 border-l border-slate-200/80 bg-slate-50/40 flex flex-col h-full overflow-y-auto select-none transition-all duration-300">
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between px-5 border-b border-slate-200/80 bg-white/60">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 text-slate-500" />
          <h2 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
            Session Context
          </h2>
        </div>
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-5 space-y-6 flex-1">
        {/* Active Model Info */}
        <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Cpu className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  Nova 3.5 Sonnet
                </h3>
                <p className="text-[10px] text-slate-500">Anthropic Engine</p>
              </div>
            </div>
            <Badge variant="emerald" className="text-[10px] px-1.5 py-0.5">
              Active
            </Badge>
          </div>

          <Separator className="bg-slate-100" />

          {/* Context Token Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px]">
              <span className="text-slate-500 font-medium">Context Window</span>
              <span className="font-semibold text-slate-700">14.2k / 128k</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-indigo-600 w-[12%]" />
            </div>
          </div>
        </div>

        {/* Model Presets */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
            <Sliders className="h-3.5 w-3.5 text-slate-500" />
            <span>Mode Presets</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <button className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-center shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer">
              <span className="text-xs font-bold text-slate-800">Precise</span>
              <span className="text-[10px] text-slate-400">Temp 0.2</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded-lg border-2 border-indigo-600 bg-indigo-50/50 p-2 text-center shadow-2xs cursor-pointer">
              <span className="text-xs font-bold text-indigo-900">Balanced</span>
              <span className="text-[10px] text-indigo-600 font-medium">Temp 0.7</span>
            </button>
            <button className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-center shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer">
              <span className="text-xs font-bold text-slate-800">Creative</span>
              <span className="text-[10px] text-slate-400">Temp 1.0</span>
            </button>
          </div>
        </div>

        {/* Active System Persona */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
            <Brain className="h-3.5 w-3.5 text-slate-500" />
            <span>Agent Persona</span>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-white p-3 text-xs leading-relaxed text-slate-600 shadow-2xs">
            <p className="text-[11px] text-slate-600">
              <strong className="text-slate-900 font-semibold">Senior Technical Architect:</strong> Focused on clean code, modular architecture, and modern UX design principles.
            </p>
          </div>
        </div>

        {/* Connected Resources */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
              <FileText className="h-3.5 w-3.5 text-slate-500" />
              <span>Attached Knowledge</span>
            </div>
            <span className="text-[10px] font-medium text-slate-400">2 files</span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-white px-3 py-2 text-xs shadow-2xs">
              <div className="flex items-center gap-2 truncate">
                <FileText className="h-3.5 w-3.5 text-indigo-500 shrink-0" />
                <span className="truncate text-slate-700 text-[11px]">
                  design-system-guidelines.pdf
                </span>
              </div>
              <Badge variant="secondary" className="text-[9px] px-1.5 py-0">
                12 KB
              </Badge>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-200/80 bg-white px-3 py-2 text-xs shadow-2xs">
              <div className="flex items-center gap-2 truncate">
                <Zap className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                <span className="truncate text-slate-700 text-[11px]">
                  api-schema-v2.json
                </span>
              </div>
              <Badge variant="secondary" className="text-[9px] px-1.5 py-0">
                4 KB
              </Badge>
            </div>
          </div>
        </div>

        {/* Session Stats */}
        <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 space-y-2 shadow-2xs">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>Session Stats</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="block text-[10px] text-slate-400">Response Time</span>
              <span className="font-semibold text-slate-800">180ms</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400">Total Tokens</span>
              <span className="font-semibold text-slate-800">2,410</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
