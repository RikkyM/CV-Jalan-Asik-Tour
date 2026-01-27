import { Database, House,  ReceiptText } from "lucide-react";
import type { SidebarMenu } from "./__types";

export const MENUS: SidebarMenu[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    type: "link",
    to: "/dashboard",
    icon: House,
  },
  {
    key: "surat",
    label: "Surat",
    type: "link",
    to: "/surat",
    icon: ReceiptText,
  },
  {
    key: "master",
    label: "Master Data",
    type: "dropdown",
    icon: Database,
    children: [
      {
        key: "template-surat",
        label: "Template Surat",
        to: "/master/template-surat",
      },
      {
        key: "kategori",
        label: "Kategori",
        to: "/master/kategori",
      },
      {
        key: "maskapai",
        label: "Maskapai",
        to: "/master/maskapai",
      },
    ],
  },
];
