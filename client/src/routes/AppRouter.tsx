import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Registration from "../pages/Registration.tsx";
import MainSite from "../pages/MainSite.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/main" element={<MainSite />} />
    </Routes>
  );
};

export default AppRouter;
