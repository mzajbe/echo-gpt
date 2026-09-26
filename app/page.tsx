import { AppShell } from "@/components/layout/app-shell";
import { Sparkles, ArrowUpRight, ShieldCheck, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <AppShell>
      <div className="flex flex-1 flex-col items-center justify-center py-12 px-4 text-center">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/70 px-3.5 py-1 text-xs font-semibold text-indigo-700 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>NovaAI Shell Architecture v1.0</span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Central Content Area & Shell
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed text-slate-500 max-w-lg mx-auto">
            The application shell is fully assembled with responsive desktop left sidebar, top search navigation, right session context sidebar, and mobile drawer views.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
            <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                  <Layers className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-900">Left Sidebar</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Spacious navigation, active states, upgrade card, and user profile menu.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-900">Top Navigation</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Command palette trigger, model badge, notifications, and sidebar controls.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-semibold text-slate-900">Right Context</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Model stats, token meter, presets, agent persona, and attached files.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
