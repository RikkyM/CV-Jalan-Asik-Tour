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
      className={`font-poppins fixed inset-0 top-0 left-0 z-50 bg-white ${sideOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between py-3 pr-6 pl-3">
        <NavLink to="/" className="h-full outline-none">
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
          className="cursor-pointer rounded p-1.5 font-mono transition-colors duration-300 hover:bg-gray-300 outline-none" tabIndex={-1}
        >
          <span className="text-sm font-semibold">Close</span>
        </button>
      </div>
      <div className="mx-auto flex h-full max-w-7xl overflow-auto flex-col py-3 pr-6 pl-3 text-xl text-gray-500 *:border-t *:border-gray-300 *:py-2">
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
            navigate: [
              { label: "Pesawat", to: "/" },
              {
                label: "Kereta",
                to: "/",
              },
              {
                label: "Bus",
                to: "/",
              },
              {
                label: "Kapal Laut",
                to: "/",
              },
              {
                label: "Paket Wisata",
                to: "/",
              },
            ],
          },
          {
            label: "Porto",
            type: "dropdown",
            navigate: [
              { label: "Mitra Kerja", to: "/" },
              {
                label: "Album Kegiatan",
                to: "/album-kegiatan",
              },
            ],
          },
          {
            label: "Artikel",
            to: "/",
            type: "link",
          },
          {
            label: "Contact",
            to: "/",
            type: "link",
          },
          {
            label: "FAQ",
            to: "/",
            type: "link",
          },
        ].map((data, index) => {
          if (data.type === "dropdown") {
            return (
              <label
                key={data.label}
                htmlFor={data.label}
                className="cursor-pointer"
              >
                <input
                  type="radio"
                  className="peer"
                  name="radio"
                  id={data.label}
                  checked={activeDropdown === data.label}
                  onChange={() => setActiveDropdown(data.label)}
                  hidden
                />
                <span
                  style={
                    sideOpen && activeDropdown === null
                      ? { transitionDelay: `${index * 100}ms` }
                      : { transitionDelay: "0ms" }
                  }
                  className={`inline-block peer-checked:text-sm ${sideOpen ? "translate-y-0 opacity-100 transition-all duration-300" : "translate-y-5 opacity-0 transition-none"}`}
                >
                  {data.label}
                </span>
                <div className="max-h-0 space-y-2 overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)] peer-checked:max-h-96">
                  {data.navigate?.map((item) => (
                    <button
                      type="button"
                      key={item.label}
                      // tabIndex={activeDropdown === null ? -1 : }
                      className="group relative flex w-full cursor-pointer items-center gap-2 text-left font-medium text-black"
                      onClick={() => handleNavigate(item.to)}
                      onFocus={() => setActiveDropdown(data.label)}
                    >
                      <div className="relative flex w-max items-center pr-8">
                        <span>{item.label}</span>
                        <ArrowUpRight className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
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
              className={`cursor-pointer text-left`}
            >
              <span
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`inline-block ${sideOpen ? "translate-y-0 opacity-100 transition-all duration-300" : "translate-y-5 opacity-0 transition-none"}`}
              >
                {data.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
