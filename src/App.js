// import HeaderPage from "./pages/HeaderPage";
// import AppRouter from "./pages-router/AppRouter";
// import { AuthProvider } from "./authContextStore/AuthProvider";

import CurdOperations from "./components/json-server/CurdOperations";

// import Counter from "./redux-app1/Counter";
// import UserName from "./redux-app1/UserName";

const App = () => {
  return (
    // <AuthProvider>
    //     <HeaderPage />
    //     <AppRouter />
    // </AuthProvider>
    <div className="container mt-2">
  {/* <Counter/>
  <br/>
  <br/>
  <UserName/> */}
  <CurdOperations/>
    </div>
  );
};

export default App;
