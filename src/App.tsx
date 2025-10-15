import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TermsPage from "./pages/TermsPage";
// import LogInPage from "./pages/LogInPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OmOss" element={<AboutUsPage />} />
        <Route path="/Betingelser" element={<TermsPage />} />
        {/* <Route path="/LoggInn" element={<LogInPage />} /> */}
      </Routes>
    </>
  );
}
