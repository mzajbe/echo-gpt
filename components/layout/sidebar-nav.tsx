"use client";

import React from "react";
import {
  Home,
  MessageSquare,
  Compass,
  Library,
  Bot,
  FolderKanban,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "library", label: "Library", icon: Library },
  { id: "agents", label: "Agents", icon: Bot, badge: "3" },
  { id: "projects", label: "Projects", icon: FolderKanban },
];

interface SidebarNavProps {
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function SidebarNav({
  activeId = "chat",
  onSelect,
  className,
}: SidebarNavProps) {
  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      {/* New Session Button */}
      <Button
        variant="default"
        onClick={() => onSelect?.("chat")}
        className="w-full justify-start gap-2 h-9 px-3 bg-slate-900 text-slate-50 hover:bg-slate-800 shadow-2xs cursor-pointer font-medium text-xs rounded-lg transition-all"
      >
        <Plus className="h-4 w-4 text-slate-300 shrink-0" />
        <span className="font-semibold">New Session</span>
      </Button>

      {/* Main Navigation Links */}
      <nav aria-label="Sidebar Menu" className="space-y-0.5">
        <div className="px-2.5 pb-1.5 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          Menu
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect?.(item.id)}
              className={cn(
                "group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer select-none",
                isActive
                  ? "bg-slate-200/70 text-slate-900 font-semibold"
                  : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0 transition-colors",
                  isActive
                    ? "text-slate-900"
                    : "text-slate-400 group-hover:text-slate-600"
                )}
              />
              <span className="truncate">{item.label}</span>

              {item.badge && (
                <span
                  className={cn(
                    "ml-auto rounded-md px-1.5 py-0.2 text-[10px] font-semibold leading-none",
                    isActive
                      ? "bg-slate-300/60 text-slate-900"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200/60"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
