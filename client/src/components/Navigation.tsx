import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <header className="flex justify-center h-20 ">
        <nav className="flex bg-gray-950 w-full text-white font-bold justify-center items-center">
          <ul className="flex gap-20">
            <Link
              to="/login"
              className={`text-3xl cursor-pointer ${location.pathname === "/login" && "underline"}`}
            >
              Login
            </Link>

            <Link to="/registration" className={`text-3xl cursor-pointer ${location.pathname === "/registration" && "underline"}`}>
              Registration
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
