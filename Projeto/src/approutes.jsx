import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
