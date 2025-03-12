import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CookieConsentModal, { CookiePreferences } from "./CookieConsentModal";

const SocialPosts: React.FC = () => {
  // Stato per le preferenze cookie lette dal localStorage
  const [cookieConsent, setCookieConsent] = useState<CookiePreferences | null>(null);
  // I post Facebook verranno caricati solo se la preferenza "marketing" è true
  const cookiesAccepted = cookieConsent?.marketing === true;
  const [, setPostsLoaded] = useState<number>(0);

  // Aggiorna periodicamente lo stato delle preferenze dal localStorage
  useEffect(() => {
    const checkConsent = () => {
      const consentString = localStorage.getItem("cookieConsent");
      if (consentString) {
        const consent: CookiePreferences = JSON.parse(consentString);
        setCookieConsent(consent);
      }
    };
    checkConsent();
    const interval = setInterval(checkConsent, 1000);
    return () => clearInterval(interval);
  }, []);

  // Carica gli script degli embed
  useEffect(() => {
    // Script di Instagram (non particolarmente invasivo)
    const igScript = document.createElement("script");
    igScript.src = "https://www.instagram.com/embed.js";
    igScript.async = true;
    document.body.appendChild(igScript);

    // Script di Facebook solo se l'utente ha accettato i cookie non essenziali
    if (cookiesAccepted) {
      if (!document.getElementById("facebook-jssdk")) {
        const fbScript = document.createElement("script");
        fbScript.id = "facebook-jssdk";
        fbScript.src = "https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v16.0";
        fbScript.async = true;
        document.body.appendChild(fbScript);
      } else if ((window as any).FB) {
        (window as any).FB.XFBML.parse();
      }
    }
  }, [cookiesAccepted]);

  // Polling per riprocessare gli embed
  useEffect(() => {
    const checkAndProcess = () => {
      if ((window as any).instgrm && (window as any).instgrm.Embeds) {
        (window as any).instgrm.Embeds.process();
      }
      if (cookiesAccepted && (window as any).FB && (window as any).FB.XFBML) {
        (window as any).FB.XFBML.parse();
      }
      setPostsLoaded((prev) => prev + 1);
    };

    const interval = setInterval(checkAndProcess, 1000);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [cookiesAccepted]);

  // Inject custom CSS to override Facebook's styles
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .fb_iframe_widget iframe {
        border: none !important;
        height: 639.5px !important;
      }
      .fb_iframe_widget span {
        border: none !important;
        overflow: visible !important;
        height: 639.5px !important;
        width: 100% !important;
      }
      .fb-post-custom-wrapper {
        background: #FFF;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        overflow: hidden;
        min-height: 639.5px;
        height: 639.5px;
        width: 326px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .fb-post {
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Configurazione delle animazioni
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const instagramPosts = [
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DGWIeNctVnm/?igsh=MTk2d3k4d2Y1dThqZw==",
    },
    {
      type: "instagram",
      url: "https://www.instagram.com/reel/DG6Ex-yKGR8/?igsh=bXc3ZXh5bTd6dDQz",
    },
  ];
  
  const facebookPosts = [
    {
      type: "facebook",
      url: "https://www.facebook.com/photo.php?fbid=1216567967141524&set=pb.100063649955227.-2207520000&type=3",
    },
    {
      type: "facebook",
      url: "https://www.facebook.com/photo.php?fbid=1224682566330064&set=pb.100063649955227.-2207520000&type=3",
    },
  ];
  
  // Combine all posts into a single array
  const allPosts = [...instagramPosts, ...facebookPosts];

  // Common styles for all social posts
  const socialPostStyles = {
    background: "#FFF",
    border: 0,
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "block",
    margin: 0,
    minWidth: "326px",
    minHeight: "500px", // Using min-height instead of fixed height
    padding: 0,
    width: "100%",
    overflow: "visible" // Allow content to be fully visible
  };

  return (
    <div className="relative w-full overflow-hidden px-4 py-10">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      ></div>
      <CookieConsentModal />
      
      {/* Combined Social Posts Section */}
      <div className="relative">
        <motion.div 
          className="flex overflow-x-auto gap-10 pb-4 snap-x snap-mandatory hide-scrollbar"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {allPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex-none w-[326px] snap-center"
              style={{ marginRight: '2rem' }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="h-full"
                style={{ minHeight: "500px" , minWidth:"348px", border:"none !important"}} // Min-height instead of fixed height
              >
                {post.type === "instagram" ? (
                  <blockquote
                    className="instagram-media shadow-lg rounded-lg"
                    data-instgrm-permalink={post.url}
                    data-instgrm-version="14"
                    style={socialPostStyles}
                  ></blockquote>
                ) : (
                  cookiesAccepted ? (
                    <div className="fb-post-custom-wrapper">
                      <div
                        className="fb-post"
                        data-href={post.url}
                        data-width="326"
                        data-adapt-container-width="true"
                        data-show-text="true"
                      ></div>
                    </div>
                  ) : (
                    <div 
                      className="bg-white p-8 text-center rounded-lg shadow-lg !border-none"
                      style={socialPostStyles}
                    >
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-600">
                          Accetta i cookie per visualizzare questo post.
                        </p>
                      </div>
                    </div>
                  )
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
};

export default SocialPosts;
