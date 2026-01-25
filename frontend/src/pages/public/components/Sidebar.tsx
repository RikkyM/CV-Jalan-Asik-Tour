import { NavLink } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import Logo80 from "@/assets/img/logo-80.webp";
import Logo160 from "@/assets/img/logo-160.webp";

const Sidebar = () => {
  const { toggle, sideOpen } = useSidebar();

  return (
    <div
      className={`fixed inset-0 top-0 left-0 z-50 bg-white ${sideOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
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
          onClick={() => toggle()}
          className="cursor-pointer rounded p-1.5 font-mono transition-colors duration-300 hover:bg-gray-300 md:hidden"
        >
          <span className="text-sm font-semibold">Close</span>
        </button>
      </div>
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-3 bg-red-500 py-3 pr-6 pl-3">
        {[
          {
            label: "Home",
            to: "/",
            type: "link",
          },
          {
            label: "Home",
            to: "/",
            type: "dropdown",
          },
        ].map((data) => {
          if (data.type === "dropdown") {
            return (
                <div className="bg-blue-500">
                    asdas
                </div>
            );
          }

          return (
            <NavLink key={data.label} to={data.to}>
              {data.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
