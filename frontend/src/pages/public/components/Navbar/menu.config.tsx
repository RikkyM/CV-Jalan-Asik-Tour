import PortoMenu from "./contents/PortoMenu";
import ProdukMenu from "./contents/ProdukMenu";
import ProfileMenu from "./contents/ProfileMenu";
import type { MenuItem } from "./types";

export const MENUS: MenuItem[] = [
  {
    key: "profile",
    label: "Profile",
    content: ({ closeDropdown }) => (
      <ProfileMenu closeDropdown={closeDropdown} />
    ),
  },
  {
    key: "produk",
    label: "Produk",
    content: ({ closeDropdown }) => (
      <ProdukMenu closeDropdown={closeDropdown} />
    ),
  },
  {
    key: "porto",
    label: "Porto",
    content: ({ closeDropdown }) => <PortoMenu closeDropdown={closeDropdown} />,
  },
];
