import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../context/useAuth";

const AdminRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null; // or spinner

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
