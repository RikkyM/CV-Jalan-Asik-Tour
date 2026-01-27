import { createContext } from "react";

type SidebarContextType = {
  sideOpen: boolean;
  toggle: (value?: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
