"use client";

import React from "react";

export function GreetingSection() {
  return (
    <section aria-label="Greeting Header" className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto pt-1 pb-1">
      {/* Time & User Greeting Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-2xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Good afternoon, Mohammad</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2]">
        What would you like to{" "}
        <span className="text-indigo-600 font-bold">create</span>,{" "}
        <span className="text-emerald-600 font-bold">explore</span> or{" "}
        <span className="text-purple-600 font-bold">solve</span> today?
      </h1>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed font-normal">
        Your AI workspace for writing, coding, research, analysis and more.
      </p>
    </section>
  );
}
