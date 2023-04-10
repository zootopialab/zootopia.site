import React from "react";
import Header from "../components/header/Header";

const BottomHeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-10 flex flex-col h-screen bg-gray-100 dark:bg-slate-900">
      <Header />
    </div>
  );
};

export default BottomHeaderLayout;
