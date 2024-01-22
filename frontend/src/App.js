import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AthletesPage from "./Pages/AthletesPage";
import ProductsPage from "./Pages/ProductsPage";
import ProgramsPage from "./Pages/ProgramsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App " >
      <BrowserRouter>
        <NavBar />
        <div className="pages flex flex-col min-h-screen">
          <Routes>
            <Route path="/athletes" element={<AthletesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/aboutus" element={<AboutUsPage  />} />
          </Routes>
        </div>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

