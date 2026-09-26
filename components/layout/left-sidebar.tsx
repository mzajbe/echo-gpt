"use client";

import React from "react";
import { Sparkles, Command } from "lucide-react";
import { SidebarNav } from "./sidebar-nav";
import { UpgradeCard } from "./upgrade-card";
import { UserProfileMenu } from "./user-profile-menu";
import { Separator } from "@/components/ui/separator";

interface LeftSidebarProps {
  activeNav: string;
  onNavSelect: (id: string) => void;
}

export function LeftSidebar({ activeNav, onNavSelect }: LeftSidebarProps) {
  return (
    <aside className="hidden md:flex h-screen w-64 flex-col shrink-0 border-r border-slate-200/80 bg-slate-50/40 select-none">
      {/* Brand / Logo Header */}
      <div className="flex h-16 items-center justify-between px-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white shadow-2xs">
            <Sparkles className="h-4 w-4 text-indigo-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-900">
              NovaAI
            </span>
            <span className="text-[10px] font-medium text-slate-400">
              Enterprise v3.5
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 shadow-2xs">
          <Command className="h-3 w-3" />
          <span>K</span>
        </div>
      </div>

      <Separator />

      {/* Navigation Area with Scroll support */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <SidebarNav activeId={activeNav} onSelect={onNavSelect} />
      </div>

      {/* Footer Area: Upgrade Card + User Profile */}
      <div className="p-4 space-y-4 border-t border-slate-200/80 bg-white/60">
        <UpgradeCard />
        <Separator className="bg-slate-100" />
        <UserProfileMenu />
      </div>
    </aside>
  );
}
