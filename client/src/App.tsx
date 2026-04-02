import "./App.css";
import AppRouter from "./routes/AppRouter.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation.tsx";
import { useState } from "react";
import type { User } from "./types/UserType.ts";
import { UserContext } from "./contexts/AuthContext.tsx";

const MIMIC_USER: User = {
  id: 0,
  username: "asd1",
  email: "asd1@gmail.com",
  password: "asd123"
}

function App() {
  const [user] = useState<User>(MIMIC_USER);
  
  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navigation />
        <AppRouter />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
