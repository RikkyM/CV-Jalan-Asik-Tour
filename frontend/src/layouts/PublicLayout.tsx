import Footer from "@/pages/public/components/Footer";
import Navbar from "@/pages/public/components/Navbar/Navbar";
import Sidebar from "@/pages/public/components/Sidebar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <section className="h-dvh w-full overflow-auto scroll-smooth">
      <Navbar />
      <Sidebar />

      <main className="z-0 mx-auto bg-white">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default PublicLayout;
