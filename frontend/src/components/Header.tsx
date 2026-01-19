import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="h-20 min-h-20 max-h-20 flex items-center justify-between px-4 bg-yellow-500">
      <h2 className="capitalize font-semibold text-xl">
        {pathname.replace("/", "").replace("-", ' ')}
      </h2>
      <p>sadkasldk</p>
    </header>
  );
};
 
export default Header;
