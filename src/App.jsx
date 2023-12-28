import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/authentic/Login";
import HomePage from "./pages/HomePage";
import AuthenticModal from "./components/authentic/AuthenticModal";
import SignUp from "./components/authentic/SignUp";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <>
      <AuthProvider>
        <HomePage></HomePage>
      </AuthProvider>
    </>
  );
}

export default App;
