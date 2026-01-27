import Header from "@/components/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="h-dvh flex">
      <Sidebar />
      <main className="flex-1 z-0 flex flex-col">
        <Header/>
        {children}
      </main>
    </section>
  );
};

export default MainLayout;
