import { useLogout } from "@/hooks/useLogout";
import { useSidebar } from "@/hooks/useSidebar";
import { Circle, LoaderCircle, LogOut } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { MENUS } from "./menu.config";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { toggle, sideOpen } = useSidebar();
  const { loading, handleLogout } = useLogout();
  const location = useLocation();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    MENUS.forEach((data) => {
      if (data.type === "dropdown") {
        const active = data.children.some(
          (child) => location.pathname === child.to,
        );
        if (active) {
          setActiveDropdown(data.key);
        }
      }
    });
  }, [location.pathname]);

  return (
    <>
      <div
        className={`absolute inset-0 z-10 transition-all duration-300 ${sideOpen ? "pointer-events-auto block bg-black/50 lg:hidden" : "pointer-events-none bg-transparent"}`}
        onClick={() => toggle(false)}
      />
      <aside
        // className={`fixed top-0 left-0 z-10 h-dvh w-full bg-red-500 transition-all duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)] lg:relative lg:max-w-14 lg:hover:max-w-62`}
        className={[
          "group fixed top-0 left-0 z-10 h-dvh w-0 overflow-clip transition-all duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]",
          "lg:relative lg:w-13 lg:max-w-62 lg:shadow lg:hover:w-62",
          `${sideOpen ? "w-62 lg:w-62" : "w-0 lg:w-14 lg:hover:w-62"}`,
        ].join(" ")}
        // onClick={() => toggle()}
      >
        {/* <div className="w-0 max-w-72 h-full lg:w-full bg-linear-to-bl from-[#0091BA] to-[#104AE4] lg:shadow  transition-all lg:transition-none duration-500 overflow-hidden"> */}
        <div
          className={`h-full w-0 overflow-hidden bg-[#E7E7E7] transition-all duration-500 lg:w-full lg:shadow lg:transition-none ${sideOpen ? "w-62" : "w-0"}`}
        >
          <section className="flex h-full flex-col">
            <header className="h-full max-h-20 p-2 whitespace-nowrap">
              Logo dan Judul
            </header>
            <nav className="flex-1 space-y-1 overflow-x-hidden overflow-y-auto py-5 pl-2 text-base font-semibold">
              {MENUS.map((data) => {
                const Icon = data.icon;

                if (data.type === "dropdown") {
                  const isOpen = activeDropdown === data.key;

                  const isActiveChild = data.children.some(
                    (child) => location.pathname === child.to,
                  );

                  return (
                    <div key={data.key} className="">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(data.key)}
                        className={[
                          "relative flex w-full cursor-pointer items-center gap-2 rounded-l-md px-3 py-2 whitespace-nowrap transition-all duration-300 hover:bg-gray-300",
                          isActiveChild && "bg-gray-300",
                        ].join(" ")}
                      >
                        <Icon className="h-5 w-5 min-w-5" />
                        <span
                          className={[
                            "opacity-0 transition-all duration-300 group-hover:opacity-100",
                            `${sideOpen && "opacity-100"}`,
                          ].join(" ")}
                        >
                          {data.label}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}
                      >
                        <ul className="">
                          {data.children.map((child) => {
                            return (
                              <li
                                key={child.key}
                                className={`relative my-1 rounded-bl-md whitespace-nowrap ${sideOpen ? "" : ""}`}
                              >
                                <NavLink
                                  to={child.to}
                                  onClick={() => {
                                    if (window.innerWidth < 1024) {
                                      toggle(false);
                                    }
                                  }}
                                >
                                  {({ isActive }) => (
                                    <div
                                      className={[
                                        "group/child relative flex items-center gap-2 rounded-l-md py-1.5 pl-3 whitespace-nowrap",
                                        !isActive && "text-black",
                                      ].join(" ")}
                                    >
                                      <div className="relative">
                                        <Circle
                                          className={`h-5 w-5 min-w-5 p-1 transition-all duration-300 group-hover/child:stroke-[#FFA400] ${isActive && "stroke-[#FFA400]"}`}
                                          strokeWidth={5}
                                        />
                                        <div className="absolute -top-6 left-1/2 h-7 w-0.5 -translate-x-1/2 bg-black"></div>
                                      </div>
                                      <span
                                        className={[
                                          "opacity-0 transition-all duration-300 group-hover:opacity-100",
                                          `${sideOpen && "opacity-100"}`,
                                          // isActive ? "text-[#009FFD]" : "",
                                        ].join(" ")}
                                      >
                                        {child.label}
                                      </span>
                                    </div>
                                  )}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={data.key}
                    to={data.to}
                    className="inline-block w-full"
                    onClick={() => {
                      setActiveDropdown(null);
                      
                      if (window.innerWidth < 1024) {
                        toggle(false);
                      }
                    }}
                  >
                    {({ isActive }) => (
                      <div
                        className={[
                          "relative flex items-center gap-2 rounded-l-md px-3 py-2 whitespace-nowrap transition-all duration-300 after:transition-all after:duration-300",
                          isActive
                            ? "bg-gray-300/50 text-[#009FFD] after:absolute after:right-0 after:h-full after:w-1 after:bg-[#009FFD] after:content-['']"
                            : "text-black hover:bg-gray-300",
                        ].join(" ")}
                      >
                        <Icon className="h-5 w-5 min-w-5" />

                        <span
                          className={[
                            "opacity-0 transition-all duration-300 group-hover:opacity-100",
                            `${sideOpen && "opacity-100"}`,
                            isActive ? "text-[#009FFD]" : "",
                          ].join(" ")}
                        >
                          {data.label}
                        </span>
                      </div>
                    )}
                  </NavLink>
                );
              })}
            </nav>
            <footer className="h-full max-h-16">
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full cursor-pointer items-center gap-1.5 rounded-md p-2 text-start text-lg font-medium text-red-500 hover:bg-white/20"
              >
                {loading ? (
                  <>
                    <LoaderCircle className="h-7 animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <LogOut className="max-w-5" />
                    <span>Logout</span>
                  </>
                )}
              </button>
            </footer>
          </section>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
