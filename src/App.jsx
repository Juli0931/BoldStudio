import { Routes, Route } from 'react-router-dom'
import { LoginAdminPage, ControllerAdminPage } from './auth/pages';
import { GlobalPage } from "./user/pages/GlobalPage/GlobalPage.jsx";
import { AuthContextProvider } from './auth/context/authContextProvider.jsx';

export function App() {
  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
}