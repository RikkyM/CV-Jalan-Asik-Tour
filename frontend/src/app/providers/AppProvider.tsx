import AuthProvider from "@/providers/AuthProviders";
import { type PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
