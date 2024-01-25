import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import HomePage from "./Pages/HomePage";

import AthletesPage from "./Pages/athletes-related/AthletesPage";
import SingleAthletePage from "./Pages/athletes-related/SingleAthletePage";

import ProductsPage from "./Pages/product-related/ProductsPage";
import SingleProductPage from "./Pages/product-related/SingleProductPage";

import EventsPage from "./Pages/EventsPage";

import ProgramsPage from "./Pages/ProgramsPage";

import AboutUsPage from "./Pages/AboutUsPage";

import Footer from "./Components/Footer";

import AthleteForm from "./Pages/AthleteForm";

function App() {
  return (
    <div className="App " >
      <BrowserRouter>
        <NavBar />
        <div className="pages flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/athletes" element={<AthletesPage />} />
            <Route path="/athletes/:id" element={<SingleAthletePage />} />

            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />

            <Route path="/events" element={<EventsPage />} />

            <Route path="/programs" element={<ProgramsPage />} />
            
            <Route path="/aboutus" element={<AboutUsPage  />} />

            <Route path="/athletes/new" element={<AthleteForm />} />
          </Routes>
        </div>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

