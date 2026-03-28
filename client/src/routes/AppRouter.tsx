
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/admin" />
        <Route path="/home" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
