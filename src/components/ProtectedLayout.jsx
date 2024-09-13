import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedLayout = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <nav>
        <Link to="settings">Settings</Link>
        <Link to="profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>{" "}
      </nav>
      <Outlet />
    </div>
  );
};
