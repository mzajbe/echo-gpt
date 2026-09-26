"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function GreetingSection() {
  return (
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto pt-2 pb-2">
      {/* Time & User Greeting */}
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-2xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Good afternoon, Mohammad</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
        What would you like to{" "}
        <span className="text-indigo-600 font-extrabold underline decoration-indigo-200 decoration-2 underline-offset-4">
          create
        </span>
        ,{" "}
        <span className="text-emerald-600 font-extrabold underline decoration-emerald-200 decoration-2 underline-offset-4">
          explore
        </span>{" "}
        or{" "}
        <span className="text-purple-600 font-extrabold underline decoration-purple-200 decoration-2 underline-offset-4">
          solve
        </span>{" "}
        today?
      </h1>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm text-slate-500 max-w-lg leading-relaxed font-normal">
        Your AI workspace for writing, coding, research, analysis and more.
      </p>
    </div>
  );
}
