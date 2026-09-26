"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SidebarNav } from "./sidebar-nav";
import { UpgradeCard } from "./upgrade-card";
import { UserProfileMenu } from "./user-profile-menu";
import { Separator } from "@/components/ui/separator";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeNav: string;
  onNavSelect: (id: string) => void;
}

export function MobileNav({
  isOpen,
  onClose,
  activeNav,
  onNavSelect,
}: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="left" className="w-72 p-0 flex flex-col h-full bg-white">
        <SheetHeader className="h-16 px-5 flex items-center justify-between border-b border-slate-200/80">
          <SheetTitle className="flex items-center gap-2 text-left">
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
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          <SidebarNav
            activeId={activeNav}
            onSelect={(id) => {
              onNavSelect(id);
              onClose();
            }}
          />
        </div>

        <div className="p-4 space-y-4 border-t border-slate-200/80 bg-slate-50/50">
          <UpgradeCard />
          <Separator className="bg-slate-200/60" />
          <UserProfileMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
