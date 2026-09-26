"use client";

import React, { useState } from "react";
import {
  Paperclip,
  Globe,
  Wrench,
  Sparkles,
  ArrowUp,
  ChevronDown,
  Mic,
  Check,
  Code2,
  Image as ImageIcon,
  Search,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const models = [
  { id: "nova-3.5", name: "Nova 3.5 Sonnet", desc: "Fastest & most intelligent", tag: "Default", provider: "NovaAI" },
  { id: "claude-3.7", name: "Claude 3.7 Sonnet", desc: "Hybrid reasoning & coding", tag: "Pro", provider: "Anthropic" },
  { id: "gpt-4o", name: "GPT-4o", desc: "Omni multimodal model", tag: "Pro", provider: "OpenAI" },
  { id: "deepseek-v3", name: "DeepSeek V3", desc: "Math & deep analysis", tag: "Pro", provider: "DeepSeek" },
];

interface PromptComposerProps {
  onSend?: (prompt: string) => void;
}

export function PromptComposer({ onSend }: PromptComposerProps) {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isWebSearchActive, setIsWebSearchActive] = useState(false);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!prompt.trim()) return;
    onSend?.(prompt);
    setPrompt("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-2">
      <form
        onSubmit={handleSubmit}
        className="group relative rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-200 focus-within:border-indigo-500/50 focus-within:ring-4 focus-within:ring-indigo-500/5 hover:border-slate-300"
      >
        {/* Main Textarea */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything, write code, or analyze data..."
          rows={3}
          className="w-full resize-none bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none leading-relaxed"
        />

        {/* Toolbar & Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 mt-2">
          {/* Left Action Buttons */}
          <TooltipProvider>
            <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
              {/* Attachment Button */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="text-slate-500 hover:text-slate-800 hover:bg-slate-100/80 rounded-lg cursor-pointer"
                  >
                    <Paperclip className="h-4 w-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Attach document or image</TooltipContent>
              </Tooltip>

              {/* Web Search Toggle */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant={isWebSearchActive ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setIsWebSearchActive(!isWebSearchActive)}
                    className={`h-8 px-2.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      isWebSearchActive
                        ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200/60"
                        : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/80"
                    }`}
                  >
                    <Globe className={`h-3.5 w-3.5 mr-1.5 ${isWebSearchActive ? "text-indigo-600" : ""}`} />
                    <span>Search</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Toggle live web search</TooltipContent>
              </Tooltip>

              {/* Tools Dropdown */}
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100/80 rounded-lg text-xs font-medium cursor-pointer"
                      >
                        <Wrench className="h-3.5 w-3.5 mr-1.5" />
                        <span>Tools</span>
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Active capabilities & skills</TooltipContent>
                </Tooltip>

                <DropdownMenuContent align="start" className="w-52">
                  <DropdownMenuLabel className="text-[11px] font-semibold text-slate-400">
                    Active Agent Tools
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Code2 className="h-4 w-4 text-indigo-500" />
                    <span>Code Interpreter</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ImageIcon className="h-4 w-4 text-purple-500" />
                    <span>Image Generator</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Search className="h-4 w-4 text-emerald-500" />
                    <span>Deep Web Research</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="h-4 w-px bg-slate-200/80 mx-0.5" />

              {/* Model Selector Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="h-8 px-2.5 rounded-lg border-slate-200/80 bg-white text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5 mr-1.5 text-indigo-600" />
                    <span>{selectedModel.name}</span>
                    <ChevronDown className="h-3.5 w-3.5 ml-1 text-slate-400" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuLabel className="text-[11px] font-semibold text-slate-400">
                    Select Intelligence Model
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {models.map((m) => (
                    <DropdownMenuItem
                      key={m.id}
                      onClick={() => setSelectedModel(m)}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-900">
                          {m.name}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          {m.desc}
                        </span>
                      </div>
                      {selectedModel.id === m.id && (
                        <Check className="h-4 w-4 text-indigo-600 shrink-0 ml-2" />
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TooltipProvider>

          {/* Right Action: Voice & Send */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="hidden sm:inline text-[10px] font-medium text-slate-400 select-none">
              ⌘ Enter
            </span>
            <Button
              type="submit"
              size="icon-sm"
              disabled={!prompt.trim()}
              className="h-8 w-8 rounded-lg bg-slate-900 text-white shadow-xs hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Send prompt</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
