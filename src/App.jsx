import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Sejarah from "./pages/Sejarah";
import VisiMisi from "./pages/VisiMisi";
import PerangkatDaerah from "./pages/PerangkatDaerah";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/perangkat-daerah" element={<PerangkatDaerah />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
