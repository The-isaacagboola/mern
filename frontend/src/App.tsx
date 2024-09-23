import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";

function App() {
  return (
    <div className="font-poppins flex items-center justify-center bg-deep/95 text-white ">
      <div className="max-w-[1200px]">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
