import React from "react";
import Header from "../components/header/Header";

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-slate-900">
      {/* Top nav*/}
      <Header />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Main area */}
        <main className="flex flex-col flex-1 min-w-0 overflow-y-auto border-gray-200">
          <div className="flex-1 w-full mx-auto min-w-min">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default HeaderLayout;
