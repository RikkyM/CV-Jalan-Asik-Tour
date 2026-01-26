import { useEffect, useRef, useState } from "react";
import { MENUS } from "./menu.config";
import type { MenuKey } from "./types";

export interface Props {
  isOpen: boolean;
  closeDropdown: () => void;
  activeMenu: MenuKey | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Dropdown = ({
  isOpen,
  closeDropdown,
  activeMenu,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef<number | null>(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const activeIndex = MENUS.findIndex((m) => m.key === activeMenu);

  useEffect(() => {
    if (!contentRef.current) return;

    setDimensions({
      width: contentRef.current.scrollWidth,
      height: contentRef.current.scrollHeight,
    });

    prevIndexRef.current = activeIndex;
  }, [activeMenu, activeIndex]);

  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`absolute left-0 h-50 w-full bg-transparent p-3 pt-1 transition-all duration-200 ease-[cubic-bezier(0.79,0.14,0.15,0.86)] xl:p-0 xl:pt-2 ${isOpen ? "pointer-events-auto -bottom-50 opacity-100" : "pointer-events-none -bottom-49.5 opacity-0"}`}
    >
      <div
        onMouseLeave={onMouseLeave}
        className={`mx-auto h-max max-w-full overflow-hidden border border-gray-300 bg-white shadow transition-[width,height,opacity] duration-300 ease-[cubic-bezier(0.79,0.14,0.15,0.86)] ${isOpen ? "opacity-100" : "opacity-0"} `}
        style={{
          width: dimensions.width || "auto",
          height: dimensions.height || "auto",
          minHeight: isOpen ? "200px" : "0",
        }}
      >
        <div
          key={activeMenu}
          ref={contentRef}
          className={`h-max w-fit max-w-full transition-all duration-500 ease-[cubic-bezier(0.65,0.05,0.36,1)]`}
        >
          {MENUS.find((m) => m.key === activeMenu)?.content({ closeDropdown })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
