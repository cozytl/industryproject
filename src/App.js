import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./components/Header/Header";
import Proppass from "./components/ProductItem/Proppass";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/id" element={<Proppass />} />
      </Routes>
    </BrowserRouter>
  );
}
