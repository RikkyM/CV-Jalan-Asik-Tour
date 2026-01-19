import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="h-dvh w-full bg-red-500">
      <Outlet />
    </section>
  );
};

export default AuthLayout;
