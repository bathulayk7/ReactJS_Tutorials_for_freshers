import HeaderPage from "./pages/HeaderPage";
import AppRouter from "./pages-router/AppRouter";
import { AuthProvider } from "./authContextStore/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
        <HeaderPage />
        <AppRouter />
    </AuthProvider>
  );
};

export default App;
