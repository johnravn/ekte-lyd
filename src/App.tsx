import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import LogInPage from "./pages/LogInPage";
// import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OmOss" element={<AboutUsPage />} />
        <Route path="/LoggInn" element={<LogInPage />} />
      </Routes>
    </>
  );
}
