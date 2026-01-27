import Login from "@/features/auth/pages/Login";
import { Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./guards/ProtectedRoute";
// import PublicRoute from "./guards/PublicRoute";
import ProtectedRoute from "./guards/ProtectedRoute";
// import PublicRoute from "./guards/PublicRoute";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardPages from "@/pages/app/DashboardPages";
import HomePages from "@/pages/public/HomePages";
import PublicLayout from "@/layouts/PublicLayout";
import PengantarPages from "@/pages/public/PengantarPages";
import VisiMisiPages from "@/pages/public/VisiMisiPages";
import AlbumPages from "@/pages/public/AlbumPages";
import GuestRoute from "./guards/GuestRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePages />} />
        <Route path="/pengantar" element={<PengantarPages />} />
        <Route path="/visi-misi" element={<VisiMisiPages />} />
        <Route path="/album-kegiatan" element={<AlbumPages />} />
      </Route>

      <Route element={<GuestRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPages />} />
        {/* <Route path="/template-surat" element={<TemplatePages />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
