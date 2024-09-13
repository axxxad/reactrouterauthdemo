import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import { HomeLayout } from "./components/HomeLayout.jsx";
import { ProtectedLayout } from "./components/ProtectedLayout.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { SettingsPage } from "./pages/SettingsPage.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
