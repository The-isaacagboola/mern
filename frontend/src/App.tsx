import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleColorMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="font-poppins flex items-center justify-center bg-[#e2f5fb] dark:bg-deep dark:text-white text-black  h-full min-h-[100vh]">
        <div className="max-w-[1200px] mt-8">
          <Nav darkMode={darkMode} toggleColorMode={toggleColorMode} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
