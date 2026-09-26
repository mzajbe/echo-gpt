"use client";

import React, { useState } from "react";
import { LeftSidebar } from "./left-sidebar";
import { TopNav } from "./top-nav";
import { RightSidebar } from "./right-sidebar";
import { MobileNav } from "./mobile-nav";

interface AppShellProps {
  children?: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [activeNav, setActiveNav] = useState<string>("chat");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState<boolean>(true);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#fafafa] font-sans antialiased text-slate-900">
      {/* 1. Desktop Left Sidebar */}
      <LeftSidebar
        activeNav={activeNav}
        onNavSelect={(id) => setActiveNav(id)}
      />

      {/* 2. Mobile Responsive Nav Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        activeNav={activeNav}
        onNavSelect={(id) => setActiveNav(id)}
      />

      {/* Main Workspace Column */}
      <div className="flex flex-1 flex-col min-w-0 h-full overflow-hidden bg-white">
        {/* 4. Top Navigation / Search Bar */}
        <TopNav
          activeNavTitle={activeNav}
          onOpenMobileNav={() => setIsMobileNavOpen(true)}
          onToggleRightSidebar={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          isRightSidebarOpen={isRightSidebarOpen}
        />

        {/* Workspace Body: Center Content + Right Sidebar */}
        <div className="flex flex-1 min-h-0 overflow-hidden relative">
          {/* 2. Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-[#fafafa] p-4 md:p-8">
            <div className="mx-auto max-w-5xl h-full flex flex-col">
              {children}
            </div>
          </main>

          {/* 3. Right Information Sidebar */}
          <RightSidebar
            isOpen={isRightSidebarOpen}
            onClose={() => setIsRightSidebarOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
