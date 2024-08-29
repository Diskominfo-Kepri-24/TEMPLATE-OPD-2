import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Sejarah from "./pages/Sejarah";
import VisiMisi from "./pages/VisiMisi";
import PerangkatDaerah from "./pages/PerangkatDaerah";
import LayananPublik from "./pages/LayananPublik";
import Berita from "./pages/Berita";
import DetailBerita from "./components/DetailBerita";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/perangkat-daerah" element={<PerangkatDaerah />} />
        <Route path="/layanan-publik" element={<LayananPublik />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/berita/:id" element={<DetailBerita />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
