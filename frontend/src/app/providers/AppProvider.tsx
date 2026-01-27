import { SidebarProvider } from "@/hooks/SidebarProvider";
import AuthProvider from "@/providers/AuthProviders";
import { type PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AuthProvider>{children}</AuthProvider>
      </SidebarProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
