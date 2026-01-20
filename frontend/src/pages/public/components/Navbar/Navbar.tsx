import { NavLink } from "react-router-dom";
import Logo80 from "@/assets/img/logo-80.webp";
import Logo160 from "@/assets/img/logo-160.webp";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Dropdown from "./Dropdown";
import type { MenuKey } from "./types";
import { MENUS } from "./menu.config";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = (key: MenuKey) => {
    setIsOpen(false);
    setTimeout(() => {
      setActiveMenu(key);
      setIsOpen(true);
    }, 0);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
      setActiveMenu(null);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="sticky top-0 z-10 h-20 w-full border-b border-gray-300 bg-white"
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-between border-b border-gray-200 bg-white p-3">
        <NavLink to="/" className="h-full">
          <img
            src={Logo80}
            srcSet={`${Logo80} 1x, ${Logo160} 2x`}
            width={80}
            height={80}
            className="w-full size-20"
            alt="logo"
            loading="eager"
            decoding="async"
          />
        </NavLink>
        <ul className="flex hidden items-center gap-4 md:flex">
          <NavLink
            className="group relative"
            to="/"
            onMouseEnter={closeDropdown}
          >
            <span className="outline-none">Home</span>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all group-hover:w-full" />
          </NavLink>
          {MENUS.map((menu) => (
            <li
              key={menu.key}
              onMouseEnter={() => openDropdown(menu.key)}
              className="group relative cursor-pointer"
            >
              <span>
                {menu.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all group-hover:w-full" />
              </span>
            </li>
          ))}
          {[
            { to: "/artikel", label: "Artikel" },
            { to: "/contact", label: "Contact" },
            { to: "/faq", label: "FAQ" },
          ].map((link) => (
            <li
              key={link.to}
              onMouseEnter={closeDropdown}
              className="relative cursor-pointer"
            >
              <NavLink className="group" to={link.to}>
                <span className="outline-none">{link.label}</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-black transition-all group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <NavLink
            to="/login"
            onMouseEnter={closeDropdown}
            className="group relative rounded-sm bg-transparent px-4 py-1.5 font-mono text-sm font-medium outline-none md:text-base lg:px-3 lg:py-1"
          >
            <div className="absolute top-0 left-0 z-10 h-full w-full rounded-md border transition-all duration-300 group-hover:scale-85"></div>
            <div className="relative text-black transition-all duration-300 group-hover:scale-85">
              Sign In
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 whitespace-nowrap transition-all duration-300 outline-none group-hover:scale-75"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 z-0 block grid h-0 w-full place-items-center rounded-md bg-black text-white transition-all duration-300 group-hover:h-full">
              Sign In
            </div>
          </NavLink>
          <button
            type="button"
            className="cursor-pointer rounded p-1.5 transition-colors duration-300 hover:bg-gray-300 md:hidden"
          >
            <Menu />
          </button>
          <Dropdown
            isOpen={isOpen}
            activeMenu={activeMenu}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
