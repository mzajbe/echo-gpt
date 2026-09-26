"use client";

import React from "react";
import {
  Home,
  MessageSquare,
  Compass,
  Library,
  Bot,
  FolderKanban,
  PlusCircle,
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
  { id: "chat", label: "Chat", icon: MessageSquare, badge: "Live" },
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
    <div className={cn("flex flex-col space-y-6", className)}>
      {/* Quick Action Button */}
      <div className="px-1">
        <Button
          variant="default"
          className="w-full justify-start gap-2.5 h-10 px-3.5 bg-slate-900 text-slate-50 hover:bg-slate-800 shadow-2xs transition-all cursor-pointer font-medium"
          onClick={() => onSelect?.("chat")}
        >
          <PlusCircle className="h-4 w-4 text-indigo-400 shrink-0" />
          <span className="text-xs font-semibold tracking-wide">New Session</span>
        </Button>
      </div>

      {/* Main Navigation Links */}
      <nav className="space-y-1">
        <div className="px-3 pb-2 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
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
                "group relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition-all cursor-pointer select-none",
                isActive
                  ? "bg-slate-100 text-slate-900 font-semibold shadow-2xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4 shrink-0 transition-colors",
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-400 group-hover:text-slate-600"
                )}
              />
              <span className="truncate">{item.label}</span>

              {item.badge && (
                <span
                  className={cn(
                    "ml-auto rounded-full px-2 py-0.5 text-[10px] font-semibold leading-none",
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200/70"
                  )}
                >
                  {item.badge}
                </span>
              )}

              {isActive && !item.badge && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
