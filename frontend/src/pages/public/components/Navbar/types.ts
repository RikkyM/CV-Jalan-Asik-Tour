export type MenuKey = "profile" | "produk" | "porto" | string;

export interface MenuItem {
  key: MenuKey;
  label: string;
  content: React.ReactNode;
}
