"use client";

import React from "react";
import {
  X,
  Bot,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Image as ImageIcon,
  Globe,
  FileText,
  Compass,
  Lightbulb,
  Layout,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const recentConversations = [
  {
    id: "1",
    title: "Website Design for Cosmos71",
    preview: "Drafted dark theme wireframes & hero CTA",
    time: "2h ago",
    icon: Layout,
  },
  {
    id: "2",
    title: "React Project Structure",
    preview: "Organized App Router folders & utilities",
    time: "5h ago",
    icon: Code2,
  },
  {
    id: "3",
    title: "Study Plan for Next.js",
    preview: "4-week advanced Server Action roadmap",
    time: "1d ago",
    icon: BookOpen,
  },
  {
    id: "4",
    title: "Travel Plan for Europe",
    preview: "10-day itinerary for Italy & Switzerland",
    time: "2d ago",
    icon: Compass,
  },
  {
    id: "5",
    title: "AI SaaS Ideas",
    preview: "Explored vertical AI for legal workflows",
    time: "3d ago",
    icon: Lightbulb,
  },
];

const popularTools = [
  {
    id: "img-gen",
    title: "Image Generator",
    description: "Generate high-resolution visual assets",
    icon: ImageIcon,
  },
  {
    id: "code-assist",
    title: "Code Assistant",
    description: "Build, debug & explain code",
    icon: Code2,
  },
  {
    id: "web-search",
    title: "Web Search",
    description: "Real-time web browsing & insights",
    icon: Globe,
  },
  {
    id: "file-analyzer",
    title: "File Analyzer",
    description: "Extract knowledge from PDFs & CSVs",
    icon: FileText,
  },
];

export function RightSidebar({ isOpen, onClose }: RightSidebarProps) {
  if (!isOpen) return null;

  return (
    <aside aria-label="Workspace Information Panel" className="w-80 shrink-0 border-l border-slate-200/80 bg-slate-50/40 flex flex-col h-full overflow-y-auto select-none transition-all duration-200">
      {/* Sidebar Header */}
      <div className="flex h-14 items-center justify-between px-4 border-b border-slate-200/80 bg-white/70">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Workspace Info
        </span>
        <Button
          variant="ghost"
          size="icon-xs"
          aria-label="Close Information Panel"
          onClick={onClose}
          className="text-slate-400 hover:text-slate-700"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-6 flex-1">
        {/* 1. AI Agents Promotion Section */}
        <section aria-label="AI Agents Promotion" className="rounded-xl border border-emerald-200/60 bg-emerald-50/40 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600/10 text-emerald-700">
                <Bot className="h-3.5 w-3.5" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Meet AI Agents
              </h3>
            </div>
            <Badge variant="emerald" className="text-[9px] px-1.5 py-0 font-bold uppercase tracking-wider">
              NEW
            </Badge>
          </div>

          <p className="text-[11px] leading-relaxed text-slate-600">
            Let AI handle complex tasks while you focus on what matters.
          </p>

          <Button
            variant="outline"
            size="sm"
            className="w-full h-7 text-xs font-medium justify-between border-emerald-200/80 bg-white text-emerald-800 hover:bg-emerald-50 hover:border-emerald-300 shadow-2xs cursor-pointer group"
          >
            <span>Explore Agents</span>
            <ArrowRight className="h-3 w-3 text-emerald-600 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </section>

        <Separator className="bg-slate-200/60" />

        {/* 2. Recent Chats Section */}
        <section aria-label="Recent Conversations" className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900">Recent Chats</h3>
            <button className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-0.5 cursor-pointer">
              <span>View all</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-0.5">
            {recentConversations.map((chat) => {
              const Icon = chat.icon;
              return (
                <button
                  key={chat.id}
                  className="w-full flex items-start gap-2.5 p-2 rounded-lg text-left transition-colors hover:bg-slate-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 cursor-pointer group"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-slate-800 group-hover:shadow-2xs transition-all mt-0.5">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="truncate text-xs font-semibold text-slate-800 group-hover:text-slate-950">
                        {chat.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 shrink-0">
                        {chat.time}
                      </span>
                    </div>
                    <p className="truncate text-[11px] text-slate-500 leading-snug">
                      {chat.preview}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <Separator className="bg-slate-200/60" />

        {/* 3. Popular Tools Section */}
        <section aria-label="Popular Tools" className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900">Popular Tools</h3>
            <button className="text-[11px] font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-0.5 cursor-pointer">
              <span>View all</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="space-y-1">
            {popularTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors hover:bg-slate-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 group-hover:bg-white group-hover:shadow-2xs transition-all">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="truncate text-xs font-semibold text-slate-800 group-hover:text-slate-950">
                        {tool.title}
                      </span>
                      <span className="truncate text-[10px] text-slate-500">
                        {tool.description}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-slate-600 shrink-0 ml-2" />
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </aside>
  );
}
