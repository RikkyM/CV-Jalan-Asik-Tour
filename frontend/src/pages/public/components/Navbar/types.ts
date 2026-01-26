export type MenuKey = "profile" | "produk" | "porto" | string;

export interface MenuContentProps {
  closeDropdown: () => void
}

export interface MenuItem {
  key: MenuKey;
  label: string;
  content: (props: MenuContentProps) => React.ReactNode;
}
