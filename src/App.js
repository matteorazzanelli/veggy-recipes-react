
import './App.css';

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Error from "./pages/Error";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/recipes/" element={<Recipes/>} />
        <Route exact path="/recipes/:id" element={<SingleRecipe/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
