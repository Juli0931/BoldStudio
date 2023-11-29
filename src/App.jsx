import { Routes, Route } from 'react-router-dom'
import { LoginAdminPage, ControllerAdminPage } from './auth/pages';
import { GlobalPage } from "./user/pages/GlobalPage/GlobalPage.jsx";
import { AuthProvider } from './auth/authContext.jsx';

export function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route
          path='/'
          element={<GlobalPage />}
        />

      <Route
          path='/login'
          element={<LoginAdminPage />}
        />

      <Route
          path='/controllerAdmin'
          element={<ControllerAdminPage />}
        />
        
        {/* Otras rutas */}
    </Routes>
    </AuthProvider>
  );
}