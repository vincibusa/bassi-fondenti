import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";

import Gallery from "./Pages/Gallery";
import Footer from "./components/Footer";
import ContentWrapper from "./components/ContentWrapper";
import { NavbarProvider } from "./contexts/NavbarContenxt";
import RestaurantBlog from "./Pages/RestaurantBlog";
import LanguageSelector from "./components/LanguageSelector";


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <NavbarProvider>
      {/* Mostra la navbar solo se non è la pagina di login */}
      {!isLoginPage && <Navbar />}
      
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/galleria" element={<Gallery />} />
          <Route path="/blog" element={<RestaurantBlog />} />
   
        </Routes>
      </ContentWrapper>
      
<LanguageSelector />
<Footer />
    </NavbarProvider>
  );
}

export default App;