import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ProductList from "./Pages/ProductsList/ProductList";
// import Proppass from "./components/";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/id" element={<Proppass />} /> */}
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}
