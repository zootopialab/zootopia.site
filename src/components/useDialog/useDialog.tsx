import React, { useState } from "react";
import SidebarLayout from "./SidebarLayout";

export const DialogContext = React.createContext(null);

export const useDialog = () => {
  const context = React.useContext(DialogContext);
  if (context) {
    return context;
  }

  return _useDialogHook();
};

const _useDialogHook = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isLoadingDialogOpen, setLoadingDialogOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [content, setContent] = useState<React.ReactNode>();

  const openSidebar = (content: React.ReactNode) => {
    setContent(content);
    setSidebarOpen(true);
  };

  return {
    isDialogOpen,
    setDialogOpen,
    isLoadingDialogOpen,
    setLoadingDialogOpen,
    isSidebarOpen,
    setSidebarOpen,
    openSidebar,
    content,
  };
};

export const JWTUI = ({ children }: { children: React.ReactNode }) => (
  // @ts-ignore
  <DialogContext.Provider value={useDialog()}>
    {children}
    <SidebarLayout />
  </DialogContext.Provider>
);
