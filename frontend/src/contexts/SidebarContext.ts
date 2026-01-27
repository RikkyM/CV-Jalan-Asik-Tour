import { createContext } from "react";

type SidebarContextType = {
  sideOpen: boolean;
  toggle: () => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
