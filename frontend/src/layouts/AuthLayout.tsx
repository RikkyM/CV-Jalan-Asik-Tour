import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="h-dvh w-full bg-white">
      <Outlet />
    </section>
  );
};

export default AuthLayout;
