import React from "react";
import { AppRouter } from "./AppRouter";
import { AuthContextProvider } from './auth/context/authContextProvider.jsx';

export function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}