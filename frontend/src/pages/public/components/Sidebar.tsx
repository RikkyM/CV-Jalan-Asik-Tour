import { NavLink, useNavigate } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import Logo80 from "@/assets/img/logo-80.webp";
import Logo160 from "@/assets/img/logo-160.webp";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Sidebar = () => {
  const { toggle, sideOpen } = useSidebar();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNavigate = (to: string) => {
    setActiveDropdown(null);
    toggle();

    setTimeout(() => {
      navigate(to);
    }, 300);
  };

  return (
    <div
      className={`font-poppins fixed inset-0 top-0 left-0 z-50 bg-white ${sideOpen ? "pointer-events-auto opacity-100 transition-all duration-300" : "pointer-events-none opacity-0"}`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between py-3 pr-6 pl-3">
        <NavLink to="/" className="h-full">
          <img
            src={Logo80}
            srcSet={`${Logo80} 1x, ${Logo160} 2x`}
            width={80}
            height={80}
            className="h-full w-max"
            alt="logo"
            loading="eager"
            decoding="async"
          />
        </NavLink>
        <button
          type="button"
          onClick={() => {
            setActiveDropdown(null);
            toggle();
          }}
          className="cursor-pointer rounded p-1.5 font-mono transition-colors duration-300 hover:bg-gray-300 md:hidden"
        >
          <span className="text-sm font-semibold">Close</span>
        </button>
      </div>
      <div className="mx-auto flex h-full max-w-7xl flex-col divide-y divide-gray-300 py-3 pr-6 pl-3 text-2xl text-gray-500 *:py-2">
        {[
          {
            label: "Home",
            to: "/",
            type: "link",
          },
          {
            label: "Profile",
            type: "dropdown",
            navigate: [
              { label: "Pengantar", to: "/pengantar" },
              {
                label: "Visi & Misi",
                to: "/visi-misi",
              },
            ],
          },
          {
            label: "Produk",
            type: "dropdown",
          },
        ].map((data) => {
          if (data.type === "dropdown") {
            return (
              <label htmlFor={data.label} className="cursor-pointer">
                <input
                  type="radio"
                  className="peer"
                  name="radio"
                  id={data.label}
                  checked={activeDropdown === data.label}
                  onChange={() => setActiveDropdown(data.label)}
                  hidden
                />
                <span className="transition-all duration-300 peer-checked:text-base">
                  {data.label}
                </span>
                <div className="max-h-0 space-y-2 overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)] peer-checked:max-h-96">
                  {data.navigate?.map((item) => (
                    <button
                      type="button"
                      key={item.label}
                      className="group relative flex w-full cursor-pointer items-center gap-2 text-left font-medium text-black"
                      onClick={() => handleNavigate(item.to)}
                    >
                      <div className="relative flex w-max items-center pr-8">
                        <span>{item.label}</span>
                        <ArrowUpRight className="transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      </div>
                    </button>
                  ))}
                </div>
              </label>
            );
          }

          return (
            <button
              key={data.label}
              type="button"
              onClick={() => handleNavigate(data.to ?? "")}
              className="cursor-pointer text-left"
            >
              {data.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
