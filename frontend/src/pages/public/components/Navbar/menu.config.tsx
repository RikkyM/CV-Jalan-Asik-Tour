import PortoMenu from "./contents/PortoMenu";
import ProdukMenu from "./contents/ProdukMenu";
import ProfileMenu from "./contents/ProfileMenu";
import type { MenuItem } from "./types";

export const MENUS: MenuItem[] = [
  {
    key: "profile",
    label: "Profile",
    content: <ProfileMenu/>,
  },
  {
    key: "produk",
    label: "Produk",
    content: <ProdukMenu/>,
  },
  {
    key: "porto",
    label: "Porto",
    content: <PortoMenu/>,
  },
];
