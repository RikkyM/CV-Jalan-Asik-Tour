import { useSidebar } from "@/hooks/useSidebar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { toggle } = useSidebar();
  const { pathname } = useLocation();
  return (
    <header className="flex h-20 max-h-20 min-h-20 items-center justify-between bg-yellow-500 px-4">
      <h2 className="text-xl font-semibold capitalize">
        {pathname.replace("/", "").replace("-", " ")}
      </h2>
      <button type="button" onClick={() => toggle()}>side</button>
    </header>
  );
};

export default Header;
