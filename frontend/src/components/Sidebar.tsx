import { useLogout } from "@/hooks/useLogout";
import { House, LoaderCircle, LogOut, StickyNote } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { loading, handleLogout } = useLogout();

  return (
    <aside className="h-dvh w-full lg:max-w-72 bg-black/50 lg:bg-white fixed top-0 left-0 lg:relative z-10">
      <div className="w-0 max-w-72 h-full lg:w-full bg-linear-to-bl from-[#0091BA] to-[#104AE4] lg:shadow  transition-all lg:transition-none duration-500 overflow-hidden">
        <section className="p-2 flex flex-col h-full">
          <header className="p-2 whitespace-nowrap max-h-20 h-full">
            Logo dan Judul
          </header>
          <nav className="font-semibold text-sm lg:text-base flex-1 space-y-2 py-5 overflow-y-auto overflow-x-hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  "block whitespace-nowrap flex items-center gap-2 rounded-md px-3 text-white py-1.5",
                  isActive ? "bg-white/20" : "hover:bg-white/20",
                ].join(" ")
              }
            >
              <House className="min-w-5 w-5 h-5 max-h-5" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/template-surat"
              className={({ isActive }) =>
                [
                  "block whitespace-nowrap flex items-center gap-2 rounded-md px-3 text-white py-1.5",
                  isActive ? "bg-white/20" : "hover:bg-white/20",
                ].join(" ")
              }
            >
              <StickyNote className="min-w-5 w-5 h-5 max-h-5" />
              <span>Template Surat</span>
            </NavLink>
          </nav>
          <footer className="max-h-16 h-full">
            <button
              type="button"
              onClick={handleLogout}
              className="cursor-pointer hover:bg-white/20 text-red-500 w-full text-start p-2 text-lg font-medium flex items-center gap-1.5 rounded-md"
            >
              {loading ? (
                <>
                  <LoaderCircle className="animate-spin h-7" />
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
