import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AthletesPage from "./Pages/athletes-related/AthletesPage";
import ProductsPage from "./Pages/product-related/ProductsPage";
import ProgramsPage from "./Pages/ProgramsPage";
import AboutUsPage from "./Pages/AboutUsPage";
import SingleAthletePage from "./Pages/athletes-related/SingleAthletePage";
import SingleProductPage from "./Pages/product-related/SingleProductPage";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App " >
      <BrowserRouter>
        <NavBar />
        <div className="pages flex flex-col min-h-screen">
          <Routes>
            <Route path="/athletes" element={<AthletesPage />} />
            <Route path="/athletes/:id" element={<SingleAthletePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
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

