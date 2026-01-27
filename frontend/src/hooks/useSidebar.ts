import { SidebarContext } from "@/contexts/SidebarContext";
import { useContext } from "react";

export const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used inside SidebarProvider");
  }
  return ctx;
};
