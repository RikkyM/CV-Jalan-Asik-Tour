import { SidebarContext } from "@/contexts/SidebarContext";
import { useState } from "react";

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sideOpen, setSideOpen] = useState(false);

  const toggle = () => setSideOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ sideOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
