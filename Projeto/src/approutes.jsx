import { BrawserRouter, Routes, Route, Link } from "react-router-dom";

export default function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} exact />
        {/* <Route path="/" element={} /> */}
        {/* <Route path="/" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}
