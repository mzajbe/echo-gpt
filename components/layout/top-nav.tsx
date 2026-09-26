"use client";

import React from "react";
import {
  Search,
  Bell,
  PanelRight,
  Menu,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TopNavProps {
  activeNavTitle: string;
  onOpenMobileNav: () => void;
  onToggleRightSidebar: () => void;
  isRightSidebarOpen: boolean;
}

export function TopNav({
  activeNavTitle,
  onOpenMobileNav,
  onToggleRightSidebar,
  isRightSidebarOpen,
}: TopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 md:px-6 backdrop-blur-md">
      {/* Left section: Mobile Menu Trigger + Breadcrumb */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden text-slate-600 hover:text-slate-900"
          onClick={onOpenMobileNav}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Mobile Menu</span>
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-400">NovaAI</span>
          <span className="text-xs text-slate-300">/</span>
          <h1 className="text-sm font-semibold capitalize text-slate-900 tracking-tight">
            {activeNavTitle}
          </h1>
        </div>

        {/* Model Badge pill */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-semibold">Nova 3.5 Sonnet</span>
        </div>
      </div>

      {/* Center section: Search Bar */}
      <div className="hidden lg:flex flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search threads, documents, agents... (Press ⌘K)"
            className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-9 pr-12 text-xs text-slate-900 shadow-2xs transition-colors placeholder:text-slate-400 focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/10"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none rounded border border-slate-200 bg-white px-1.5 text-[10px] font-medium text-slate-400 shadow-2xs">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right section: Quick actions */}
      <TooltipProvider>
        <div className="flex items-center gap-1.5">
          {/* Mobile Search Button */}
          <Button
            variant="ghost"
            size="icon-sm"
            className="lg:hidden text-slate-600 hover:text-slate-900"
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Preset / Parameters trigger */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="hidden sm:flex text-slate-600 hover:text-slate-900"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Parameters & Presets</TooltipContent>
          </Tooltip>

          {/* Notifications */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="relative text-slate-600 hover:text-slate-900"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>

          <div className="h-4 w-px bg-slate-200/80 mx-1 hidden sm:block" />

          {/* Toggle Right Info Sidebar */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={isRightSidebarOpen ? "secondary" : "ghost"}
                size="icon-sm"
                className="text-slate-600 hover:text-slate-900"
                onClick={onToggleRightSidebar}
              >
                <PanelRight className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isRightSidebarOpen ? "Hide Info Sidebar" : "Show Info Sidebar"}
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </header>
  );
}
