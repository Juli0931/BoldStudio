import { Routes, Route } from "react-router-dom";
import { GlobalPage } from "./user/pages/GlobalPage/GlobalPage";
import { ControllerAdminPage, LoginAdminPage } from "./auth/pages";

export function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<GlobalPage />} />
        <Route path="/login" element={<LoginAdminPage />} />
        <Route path="/controllerAdmin" element={<ControllerAdminPage />} />
      </Routes>
    </main>
  );
}
