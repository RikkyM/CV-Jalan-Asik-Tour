import { NavLink, useNavigate } from "react-router-dom";
import Logo80 from "@/assets/img/logo-80.webp";
import Logo160 from "@/assets/img/logo-160.webp";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";

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
          className="cursor-pointer rounded p-1.5 font-mono transition-colors duration-300 outline-none hover:bg-gray-300"
          tabIndex={-1}
        >
          <span className="text-sm font-semibold">Close</span>
        </button>
      </div>
      <div className="mx-auto flex h-full max-w-7xl flex-col overflow-auto py-3 pr-6 pl-3 text-xl text-gray-500 *:border-t *:border-gray-300 *:py-2 selection:bg-transparent">
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
              <div key={data.label}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveDropdown(
                      // activeDropdown === data.label ? null : data.label,
                      data.label,
                    );
                  }}
                  className="flex w-full cursor-pointer items-center"
                >
                  <span
                    style={
                      sideOpen && activeDropdown === null
                        ? { transitionDelay: `${index * 70}ms` }
                        : { transitionDelay: "0ms" }
                    }
                    className={`inline-block ${sideOpen ? "translate-y-0 opacity-100 transition-all duration-300 ease-[cubic-bezier(0.46,0.03,0.52,0.96)]" : "translate-y-5 opacity-0 transition-none"} ${activeDropdown === data.label && "text-sm"} `}
                  >
                    {data.label}
                  </span>
                </button>
                <div
                  className={`space-y-2 overflow-hidden ease-[cubic-bezier(0.65,0.05,0.36,1)] ${activeDropdown === data.label ? "max-h-96 transition-[max-height] duration-400" : "max-h-0"} `}
                >
                  <ul className="space-y-2 font-medium text-black">
                    {data.navigate?.map((item, idx) => (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => handleNavigate(item.to)}
                          style={
                            activeDropdown === data.label
                              ? { transitionDelay: `${idx * 65}ms` }
                              : { transitionDelay: "0ms" }
                          }
                          onFocus={() => setActiveDropdown(data.label)}
                          className={`group flex cursor-pointer items-center gap-1 transition-all duration-300 ${activeDropdown === data.label ? "opacity-100" : "opacity-0"}`}
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="size-5 animate-[reveal-icon-out_300ms_cubic-bezier(0.46,0.03,0.52,0.96)] opacity-0 transition-all duration-300 group-hover:animate-[reveal-icon-in_300ms_cubic-bezier(0.46,0.03,0.52,0.96)] group-hover:opacity-100" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                style={{ transitionDelay: `${index * 70}ms` }}
                className={`inline-block ${sideOpen ? "translate-y-0 opacity-100 transition-all duration-300 ease-[cubic-bezier(0.46,0.03,0.52,0.96)]" : "translate-y-5 opacity-0 transition-none"}`}
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
