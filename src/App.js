
import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Error from "./pages/Error";

import { HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/recipes/" element={<Recipes/>} />
        <Route exact path="/recipes/:id" element={<SingleRecipe/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;
