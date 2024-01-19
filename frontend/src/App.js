import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AthletesPage from "./Pages/AthletesPage";
import ProgramsPage from "./Pages/ProgramsPage";
import AboutUsPage from "./Pages/AboutUsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/athletes" element={<AthletesPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

