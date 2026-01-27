import { useLogout } from "@/hooks/useLogout";
import { House, LoaderCircle, LogOut, StickyNote } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { loading, handleLogout } = useLogout();

  return (
    <aside className="fixed top-0 left-0 z-10 h-dvh w-full bg-red-500 lg:relative lg:max-w-62">
      {/* <div className="w-0 max-w-72 h-full lg:w-full bg-linear-to-bl from-[#0091BA] to-[#104AE4] lg:shadow  transition-all lg:transition-none duration-500 overflow-hidden"> */}
      <div className="h-full w-0 overflow-hidden bg-[#E7E7E7] transition-all duration-500 lg:w-full lg:shadow lg:transition-none">
        <section className="flex h-full flex-col">
          <header className="h-full max-h-20 p-2 whitespace-nowrap">
            Logo dan Judul
          </header>
          <nav className="flex-1 space-y-2 overflow-x-hidden overflow-y-auto py-5 pl-2 text-sm font-semibold lg:text-base">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                [
                  "relative block flex items-center gap-2 rounded-l-md px-3 py-1.5 whitespace-nowrap",
                  'after:absolute after:right-0 after:h-full after:w-1 after:bg-[#009FFD] after:content-[""]',
                  isActive ? "bg-gray-300 text-[#009FFD]" : "text-black",
                ].join(" ")
              }
            >
              <House className="h-5 max-h-5 w-5 min-w-5" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/template-surat"
              className={({ isActive }) =>
                [
                  "block flex items-center gap-2 rounded-md px-3 py-1.5 whitespace-nowrap",
                  isActive ? "text-[#009FFD]" : "text-black",
                ].join(" ")
              }
            >
              <StickyNote className="h-5 max-h-5 w-5 min-w-5" />
              <span>Template Surat</span>
            </NavLink>
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
  );
};

export default Sidebar;
