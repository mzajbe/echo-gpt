"use client";

import React from "react";
import {
  Search,
  Bell,
  PanelRight,
  Menu,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-slate-200/70 bg-white/80 px-4 md:px-6 backdrop-blur-md">
      {/* Left section: Mobile Menu Trigger + Breadcrumb */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Toggle Mobile Navigation"
          className="md:hidden text-slate-600 hover:text-slate-900"
          onClick={onOpenMobileNav}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-400">NovaAI</span>
          <span className="text-xs text-slate-300">/</span>
          <h1 className="text-xs font-semibold capitalize text-slate-900 tracking-tight">
            {activeNavTitle}
          </h1>
        </div>

        {/* Muted Model Pill */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-slate-100/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span>Nova 3.5 Sonnet</span>
        </div>
      </div>

      {/* Center section: Search Bar */}
      <div className="hidden lg:flex flex-1 max-w-sm mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            aria-label="Search threads, documents, agents"
            placeholder="Search threads, docs, agents... (⌘K)"
            className="h-8 w-full rounded-lg border border-slate-200/80 bg-slate-50/60 pl-8 pr-10 text-xs text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/5"
          />
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none rounded border border-slate-200 bg-white px-1.5 text-[10px] font-medium text-slate-400 shadow-2xs">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right section: Quick actions */}
      <TooltipProvider>
        <div className="flex items-center gap-1">
          {/* Mobile Search Trigger */}
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Search"
            className="lg:hidden text-slate-600 hover:text-slate-900"
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Parameters Trigger */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Parameters & Presets"
                className="hidden sm:flex text-slate-500 hover:text-slate-900"
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
                aria-label="Notifications"
                className="relative text-slate-500 hover:text-slate-900"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
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
                aria-label={isRightSidebarOpen ? "Hide Info Sidebar" : "Show Info Sidebar"}
                className="text-slate-600 hover:text-slate-900"
                onClick={onToggleRightSidebar}
              >
                <PanelRight className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {isRightSidebarOpen ? "Hide Info Panel" : "Show Info Panel"}
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </header>
  );
}
