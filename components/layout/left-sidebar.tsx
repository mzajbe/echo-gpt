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
    <aside aria-label="Main Navigation Sidebar" className="hidden md:flex h-screen w-64 flex-col shrink-0 border-r border-slate-200/70 bg-slate-50/40 select-none">
      {/* Brand Header */}
      <div className="flex h-14 items-center justify-between px-4 border-b border-slate-200/70">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-900">
            NovaAI
          </span>
        </div>

        <div className="flex items-center gap-0.5 rounded border border-slate-200/80 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 shadow-2xs">
          <Command className="h-3 w-3" />
          <span>K</span>
        </div>
      </div>

      {/* Navigation Links Area */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <SidebarNav activeId={activeNav} onSelect={onNavSelect} />
      </div>

      {/* Footer Area: Upgrade Card + User Profile */}
      <div className="p-3.5 space-y-3.5 border-t border-slate-200/70 bg-white/60">
        <UpgradeCard />
        <Separator className="bg-slate-200/60" />
        <UserProfileMenu />
      </div>
    </aside>
  );
}
