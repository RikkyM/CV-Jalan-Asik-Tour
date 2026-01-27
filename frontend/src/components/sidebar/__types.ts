import type { LucideIcon } from "lucide-react";

export type MenuType = "link" | "dropdown";

export interface BaseMenu {
  key: string;
  label: string;
  icon: LucideIcon;
  type: MenuType;
}

export interface LinkMenu extends BaseMenu {
  type: "link";
  to: string;
}

export interface DropdownMenu extends BaseMenu {
  type: "dropdown";
  children: {
    key: string;
    label: string;
    to: string;
    // icon: LucideIcon;
  }[];
}

export type SidebarMenu = LinkMenu | DropdownMenu;