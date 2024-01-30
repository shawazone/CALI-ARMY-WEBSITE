import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./Components/NavBar";

import HomePage from "./Pages/HomePage";

import AthletesPage from "./Pages/athletes-related/AthletesPage";
import SingleAthletePage from "./Pages/athletes-related/SingleAthletePage";

import ProductsPage from "./Pages/product-related/ProductsPage";
import SingleProductPage from "./Pages/product-related/SingleProductPage";

import EventsPage from "./Pages/Events-related/EventsPage";

import ProgramsPage from "./Pages/Programs-related/ProgramsPage";

import AboutUsPage from "./Pages/AboutUsPage";

import Footer from "./Components/Footer";

import AdminPage from "./Pages/Admin-related/AdminPage";

import AthletesMangementPage from "./Pages/Admin-related/Athleltes-management/AthletesMangementPage";
import AthleteForm from "./Pages/Admin-related/Athleltes-management/AthleteForm";
import AthleteUpdateForm from "./Pages/Admin-related/Athleltes-management/AthleteUpdateForm";

import EventsManegementPage from "./Pages/Admin-related/Events-managemet/EventsManegementPage";
import EventForm from "./Pages/Admin-related/Events-managemet/EventForm";
import EventUpdateForm from "./Pages/Admin-related/Events-managemet/EventUpdateForm";

import ProductsMangementPage from "./Pages/Admin-related/Products-managment/ProductsManegementPage";
import ProductForm from "./Pages/Admin-related/Products-managment/ProductForm";
import ProductUpdateForm from "./Pages/Admin-related/Products-managment/ProductUpdateForm";

import BlogsPage from "./Pages/Blogs-related/BlogsPage";
import BlogManagementPage from "./Pages/Admin-related/Blog-management/BlogsMangementPage";
import BlogForm from "./Pages/Admin-related/Blog-management/BlogForm";

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

            <Route path="/blogs" element={<BlogsPage/>} />

            <Route path="/admin" element={<AdminPage />} />

            <Route path="/admin/athletesManegement" element={<AthletesMangementPage/>} />
            <Route path="/admin/athletesManegement/newAthlete" element={<AthleteForm/>} />
            <Route path="/admin/athletesManegement/:id" element={<AthleteUpdateForm/>} />

            <Route path="/admin/eventsManegement" element={<EventsManegementPage/>} />
            <Route path="/admin/eventsManegement/newEvent" element={<EventForm/>} />
            <Route path="/admin/eventsManegement/:id" element={<EventUpdateForm/>} />

            <Route path="/admin/productsManagement" element={<ProductsMangementPage/>} />
            <Route path="/admin/productsManagement/newProduct" element={<ProductForm/>} />  
            <Route path="/admin/productsManagement/:id" element={<ProductUpdateForm/>} />

            <Route path="/admin/blogManagement" element={<BlogManagementPage/>} />
            <Route path="/admin/blogManagement/newBlog" element={<BlogForm/>} />  
            <Route path="/admin/blogManagement/:id" element={<ProductUpdateForm/>} />



            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>

      </BrowserRouter>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

