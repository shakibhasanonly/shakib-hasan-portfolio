import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BrandProjectDetail from "./pages/BrandProjectDetail";
import WebProjectDetail from "./pages/WebProjectDetail";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // delay to ensure target is mounted
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(t);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/:slug" element={<BrandProjectDetail />} />
        <Route path="/web-projects/:slug" element={<WebProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
