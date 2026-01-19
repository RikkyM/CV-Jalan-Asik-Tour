import { useAuth } from "@/hooks/useAuth";
import MainLayout from "@/layouts/MainLayout";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const loc = useLocation();

  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" state={{ from: loc }} replace />;
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export default ProtectedRoute;
