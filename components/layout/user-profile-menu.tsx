"use client";

import React from "react";
import {
  ChevronsUpDown,
  Settings,
  User,
  ShieldCheck,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-slate-100/80 outline-none cursor-pointer group">
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Alex Chen" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="flex flex-1 flex-col overflow-hidden text-left">
            <span className="truncate text-xs font-semibold text-slate-900 group-hover:text-slate-950">
              Alex Chen
            </span>
            <span className="truncate text-[11px] text-slate-500">
              alex@novaai.io
            </span>
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-slate-600" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56"
        align="end"
        side="top"
        sideOffset={8}
      >
        <DropdownMenuLabel className="font-normal p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-xs font-semibold text-slate-900">Alex Chen</p>
            <p className="text-[11px] text-slate-500 truncate">
              alex@novaai.io
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="h-4 w-4 text-slate-500" />
            <span>Profile & Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="h-4 w-4 text-slate-500" />
            <span>Workspace Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ShieldCheck className="h-4 w-4 text-slate-500" />
            <span>API & Security</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Sparkles className="h-4 w-4 text-indigo-600" />
          <span className="text-indigo-600 font-medium">Subscription: Pro</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50">
          <LogOut className="h-4 w-4 text-red-500" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
