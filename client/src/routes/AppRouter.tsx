import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Registration from "../pages/Registration.tsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default AppRouter;
