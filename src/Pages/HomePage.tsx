// src/pages/HomePage.tsx


import AboutPage from "./AboutPage";
import VideoBackground from "../components/VideoBackground";
import useScrollToHash from "../hooks/useScrollToHash";
import SocialPosts from "../components/SocialPosts";

const HomePage: React.FC = () => {
  // Utilizza il custom hook per lo scroll basato sull'hash
  useScrollToHash();

  const handleReservationClick = (): void => {
    // Redirect to external reservation URL instead of opening modal
    window.open("https://bassifondenti.myrestoo.net/it/reservar", "_blank", "noopener,noreferrer");
  };
  
  const handleMenuClick = (): void => {
    // Redirect to external menu URL
    window.open("https://www.leggimenu.it/menu/bassifondenti/", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <VideoBackground 
        onReservationClick={handleReservationClick} 
        onMenuClick={handleMenuClick} 
      />
      <AboutPage />
      <SocialPosts/>
    </>
  );
};

export default HomePage;
