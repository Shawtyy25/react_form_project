import "./App.css";
import AppRouter from "./routes/AppRouter.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/Navigation.tsx";

function App() {
  return (
    <Router>
      <Navigation />
      <AppRouter />
    </Router>
  );
}

export default App;
