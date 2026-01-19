import Footer from "@/pages/public/components/Footer";
import Navbar from "@/pages/public/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <section className="h-dvh w-full overflow-auto scroll-smooth">
      <Navbar />

      <main className="z-0 mx-auto bg-white">
        <Outlet />
      </main>

      <Footer />
    </section>
  );
};

export default PublicLayout;
