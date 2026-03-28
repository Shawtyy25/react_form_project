import Login from "../components/Login.tsx";

const AuthPage = () => {
  return (
    <>
      <header className="flex justify-center h-20 ">
        <nav className="flex bg-blue-900 w-full text-white font-bold justify-center items-center">
          <ul className="flex gap-20">
            <li className={"text-3xl cursor-pointer"}>Registration</li>
            <li className={"text-3xl cursor-pointer"}>Login</li>
          </ul>
        </nav>
      </header>

      <div className="main">
        <Login />
      </div>
    </>
  );
};

export default AuthPage;
