import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
     reservationButton: "Book a Table",
      viewMenuButton: "View Menu",
      "navbar.logoAlt": "Pizzeria Bassi Fondenti",
      "navbar.toggleMenu": "Show/Hide menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Gallery",
      "navbar.press": "Press",
      "navbar.reservation": "Reservations",
      "historySection.title": "OUR STORY",
      "historySection.paragraph1": "In the historic center of Vittoria, Bassifondenti is a dining reality that revolves around the concept of 'family'.",
      "historySection.paragraph2": "Taken over by spouses <b>Mario Giombarresi and Alina Caprian</b> in March 2019, along with their little <b>Valerio</b>, the restaurant has a 'gourmet' personality reflected both in the restaurant menu dishes and in the pizzas.",
      "historySection.paragraph3": "The choice of <b>raw materials</b> falls on genuine, high-quality, and locally sourced products, supplied by local businesses. A strong bond between <b>pizza and cuisine</b> follows the thread of <b>seasonality</b>, reflected in the menu variations every 4 months. This reality offers a true <b>taste experience</b> while also changing <b>location</b>: in winter, a sort of <b>covered outdoor garden</b>, in summer, full sea view from the <b>Scoglitti pier</b>.",
      "historySection.image.caption": "Founders of Pizzeria Bassi Fondenti",
      "cookieConsent.text": "We use cookies to enhance your browsing experience. Choose your preferences.",
      "cookieConsent.acceptAll": "Accept All",
      "cookieConsent.acceptEssential": "Essential Only",
      "culinaryPhilosophy.item1.title": "Service and Hospitality",
      "culinaryPhilosophy.item1.description": "We love taking care of our customers",
      "culinaryPhilosophy.item2.title": "Quality Ingredients",
      "culinaryPhilosophy.item2.description": "We select the best flours and choose the finest seasonal products",
      "culinaryPhilosophy.item3.title": "Perfect Pairings",
      "culinaryPhilosophy.item3.description": "Our wine list offers many options, not just local ones",
      "footer.tagline": "Authenticity in every bite.",
      "footer.description": "Our passion for pizza is reflected in every dish we serve!",
      "footer.quickLinksHeader": "Quick Links",
      "footer.contactHeader": "Contacts",
      "footer.address.line1": "Via Cavour, 43",
      "footer.address.line2": "97019, Vittoria, RG",
      "footer.phone": "Tel: +39 0932 161 8460",
      "footer.email": "bassifondenti@gmail.com",
      "footer.hours.weekdays": "Monday-Sunday: 12-14, 19-00",
      "footer.copyright": "© {{year}} Pizzeria Bassi Fondenti. All rights reserved.",
      "pressSection.heading": "RECOGNITIONS AND PRESS",
      "teamGallerySection.heading": "GALLERY"
    },
  },
  it: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Prenota il tavolo",
      viewMenuButton: "Visualizza il Menù",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Bassi Fondenti",
      "navbar.toggleMenu": "Mostra/Nascondi menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galleria",
      "navbar.press": "Press",
      "navbar.reservation": "Prenotazioni",
      // HistorySection texts
      "historySection.title": "LA NOSTRA STORIA",
      "historySection.paragraph1":
        "Nel centro storico di Vittoria, Bassifondenti è una realtà ristorativa che ruota attorno al concetto di “famiglia”.",
      "historySection.paragraph2":
        "Rilevato dai coniugi <b>Mario Giombarresi e Alina Caprian</b> nel Marzo 2019, insieme al loro piccolo <b>Valerio</b>, il locale è caratterizzato da una personalità “gourmet” che si ritrova sia nei piatti del menu ristorante che nelle pizze.",
      "historySection.paragraph3":
        "La scelta delle <b>materie prime</b> ricade su prodotti genuini, di altissima qualità e territoriali, forniti da aziende locali. Un legame strettissimo, quello fra <b>pizza e cucina</b>, ha come filo conduttore la <b>stagionalità</b> che si esprime nella variazione dei menu, ogni 4 mesi. Una realtà che offre la possibilità fare una vera e propria <b>esperienza gustativa</b> cambiando anche <b>location</b>: in inverno, una sorta di <b>giardino esterno coperto</b>, in estate piena vista mare dal <b>pontile di Scoglitti</b>.",
     
      "historySection.image.caption": "Fondatori di Pizzeria Bassi Fondenti",
      // Cookie consent texts
      "cookieConsent.text":
        "Utilizziamo i cookie per migliorare la tua esperienza di navigazione. Scegli le tue preferenze.",
      "cookieConsent.acceptAll": "Accetta Tutti",
      "cookieConsent.acceptEssential": "Solo Essenziali",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servizio e accoglienza",
      "culinaryPhilosophy.item1.description":
        "Amiamo prenderci cura dei nostri clienti",
      "culinaryPhilosophy.item2.title": "Ingredienti di qualità",
      "culinaryPhilosophy.item2.description":
        "Selezioniamo le migliori farine e scegliamo i prodotti di stagione più pregiati",
      "culinaryPhilosophy.item3.title": "Abbinamenti perfetti",
      "culinaryPhilosophy.item3.description":
        "La nostra carta di vini offre molte proposte, non solo locali",
      // Footer texts
      "footer.tagline": "Autenticità in ogni morso.",
      "footer.description":
        "La nostra passione per la pizza si riflette in ogni piatto che serviamo!",
      "footer.quickLinksHeader": "Link Rapidi",
      "footer.contactHeader": "Contatti",
      "footer.address.line1": "Via Cavour , 43",
      "footer.address.line2": "97019, Vittoria , RG",
      "footer.phone": "Tel: +39 0932 161 8460",
      "footer.email": "bassifondenti@gmail.com",
      "footer.hours.weekdays": "Lunedì-Domenica: 12-14, 19-00",

      "footer.copyright":
        "© {{year}} Pizzeria Bassi Fondenti. Tutti i diritti riservati.",
      // PressSection texts
      "pressSection.heading": "RICONOSCIMENTI E PRESS",
      "pressSection.leftArticle.title":
        "Premiati dal Gambero Rosso con 'Uno Spicchio' nella Guida Pizzerie d'Italia 2025",
      "pressSection.leftArticle.preview":
        "I fratelli Salvatore e Rosario Mirenda hanno conquistato il prestigioso riconoscimento del Gambero Rosso con la loro pizzeria Bassi Fondenti a Cefalù. La guida 'Pizzerie d'Italia 2025' ha assegnato loro 'Uno Spicchio', premiando la loro dedizione all'arte della pizza e l'utilizzo di ingredienti di alta qualità.",
      "pressSection.leftArticle.imageAlt": "Riconoscimento Gambero Rosso",
      "pressSection.article.readMore": "Leggi l'articolo completo",
      "pressSection.readMoreArticles": "Leggi altri articoli",
      // Team gallery texts
      "teamGallerySection.heading": "GALLERIA",

    },
  },
  fr: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Réserver une table",
      viewMenuButton: "Voir le Menu",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Bassi Fondenti",
      "navbar.toggleMenu": "Basculer le menu",
      "navbar.home": "Accueil",
      "navbar.menu": "Menu",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Réservations",
      // HistorySection texts
      "historySection.title": "NOTRE HISTOIRE",
      "historySection.paragraph1":
        "Dans le centre historique de Vittoria, Bassifondenti est une réalité de restauration qui tourne autour du concept de 'famille'.",
      "historySection.paragraph2":
        "Reprise par les époux <b>Mario Giombarresi et Alina Caprian</b> en mars 2019, avec leur petit <b>Valerio</b>, l'établissement a une personnalité 'gourmet' qui se reflète aussi bien dans les plats du menu du restaurant que dans les pizzas.",
      "historySection.paragraph3":
        "Le choix des <b>matières premières</b> repose sur des produits authentiques, de haute qualité et locaux, fournis par des entreprises locales. Un lien très fort entre <b>pizza et cuisine</b> suit le fil de la <b>saisonnalité</b>, qui s'exprime dans la variation des menus tous les 4 mois. Cette réalité offre la possibilité de faire une véritable <b>expérience gustative</b> en changeant également de <b>lieu</b>: en hiver, une sorte de <b>jardin extérieur couvert</b>, en été vue complète sur la mer depuis la <b>jetée de Scoglitti</b>.",
      "historySection.image.caption": "Fondateurs de Pizzeria Bassi Fondenti",
      // Cookie consent texts
      "cookieConsent.text":
        "Nous utilisons des cookies pour améliorer votre expérience de navigation. Veuillez choisir vos préférences.",
      "cookieConsent.acceptAll": "Tout accepter",
      "cookieConsent.acceptEssential": "Essentiels uniquement",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service et accueil",
      "culinaryPhilosophy.item1.description":
        "Nous aimons prendre soin de nos clients",
      "culinaryPhilosophy.item2.title": "Ingrédients de qualité",
      "culinaryPhilosophy.item2.description":
        "Nous sélectionnons les meilleures farines et choisissons les produits de saison les plus raffinés",
      "culinaryPhilosophy.item3.title": "Accords parfaits",
      "culinaryPhilosophy.item3.description":
        "Notre carte des vins offre de nombreuses propositions, pas seulement locales",
      // Footer texts
      "footer.tagline": "Authenticité à chaque bouchée.",
      "footer.description":
        "Notre passion pour la pizza se reflète dans chaque plat que nous servons !",
      "footer.quickLinksHeader": "Liens rapides",
      "footer.contactHeader": "Contacts",
      "footer.address.line1": "Via Cavour , 43",
      "footer.address.line2": "97019, Vittoria , RG",
      "footer.phone": "Tél: +39 0932 161 8460",
      "footer.email": "bassifondenti@gmail.com",
      "footer.hours.weekdays": "Lundi-Dimanche: 12-14, 19-00",
      "footer.copyright":
        "© {{year}} Pizzeria Bassi Fondenti. Tous droits réservés.",
      // PressSection texts
      "pressSection.heading": "RECONNAISSANCES ET PRESSE",
      "pressSection.leftArticle.title":
        "Récompensés par Gambero Rosso avec 'Uno Spicchio' dans le Guide des Pizzerias d'Italie 2025",
      "pressSection.leftArticle.preview":
        "Les frères Salvatore et Rosario Mirenda ont reçu la prestigieuse reconnaissance du Gambero Rosso avec leur pizzeria Bassi Fondenti à Cefalù. Le guide 'Pizzerias d'Italie 2025' leur a décerné 'Uno Spicchio', saluant leur dévouement à l'art de la pizza et l'utilisation d'ingrédients de haute qualité.",
      "pressSection.leftArticle.imageAlt": "Récompense Gambero Rosso",
      "pressSection.article.readMore": "Lire l'article complet",
      "pressSection.readMoreArticles": "Lire plus d'articles",
      // Team gallery texts
      "teamGallerySection.heading": "GALERIE",
    },
  },
  de: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Tisch reservieren",
      viewMenuButton: "Menü anzeigen",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Bassi Fondenti",
      "navbar.toggleMenu": "Menü umschalten",
      "navbar.home": "Startseite",
      "navbar.menu": "Menü",
      "navbar.gallery": "Galerie",
      "navbar.press": "Presse",
      "navbar.reservation": "Reservierungen",
      // HistorySection texts
      "historySection.title": "UNSERE GESCHICHTE",
      "historySection.paragraph1": "Im historischen Zentrum von Vittoria ist Bassifondenti eine gastronomische Realität, die sich um das Konzept der 'Familie' dreht.",
      "historySection.paragraph2": "Übernommen von den Eheleuten <b>Mario Giombarresi und Alina Caprian</b> im März 2019, zusammen mit ihrem kleinen <b>Valerio</b>, hat das Restaurant eine 'Gourmet'-Persönlichkeit, die sich sowohl in den Gerichten des Restaurant-Menüs als auch in den Pizzen widerspiegelt.",
      "historySection.paragraph3": "Die Wahl der <b>Rohstoffe</b> fällt auf echte, hochwertige und lokale Produkte, die von lokalen Unternehmen geliefert werden. Eine starke Bindung zwischen <b>Pizza und Küche</b> folgt dem Leitfaden der <b>Saisonalität</b>, die sich in den Menüvariationen alle 4 Monate ausdrückt. Diese Realität bietet die Möglichkeit, ein wahres <b>Geschmackserlebnis</b> zu machen und dabei auch den <b>Standort</b> zu wechseln: im Winter eine Art <b>überdachter Außengarten</b>, im Sommer voller Meerblick vom <b>Pier in Scoglitti</b>.",
      "historySection.image.caption": "Gründer von Pizzeria Bassi Fondenti",
      // Cookie consent texts
      "cookieConsent.text": "Wir verwenden Cookies, um Ihre Browser-Erfahrung zu verbessern. Bitte wählen Sie Ihre Präferenzen.",
      "cookieConsent.acceptAll": "Alle akzeptieren",
      "cookieConsent.acceptEssential": "Nur essenzielle",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service und Gastfreundschaft",
      "culinaryPhilosophy.item1.description": "Wir lieben es, uns um unsere Kunden zu kümmern",
      "culinaryPhilosophy.item2.title": "Qualitätszutaten",
      "culinaryPhilosophy.item2.description": "Wir wählen die besten Mehle aus und verwenden die hochwertigsten saisonalen Produkte",
      "culinaryPhilosophy.item3.title": "Perfekte Kombinationen",
      "culinaryPhilosophy.item3.description": "Unsere Weinkarte bietet zahlreiche Optionen, nicht nur regionale",
      // Footer texts
      "footer.tagline": "Authentizität in jedem Biss.",
      "footer.description": "Unsere Leidenschaft für Pizza spiegelt sich in jedem Gericht wider, das wir servieren!",
      "footer.quickLinksHeader": "Schnellzugriffe",
      "footer.contactHeader": "Kontakt",
      "footer.address.line1": "Via Cavour, 43",
      "footer.address.line2": "97019, Vittoria, RG",
      "footer.phone": "Tel: +39 0932 161 8460",
      "footer.email": "bassifondenti@gmail.com",
      "footer.hours.weekdays": "Montag-Sonntag: 12-14, 19-00",
      "footer.copyright": "© {{year}} Pizzeria Bassi Fondenti. Alle Rechte vorbehalten.",
      // PressSection texts
      "pressSection.heading": "AUSZEICHNUNGEN UND PRESSE",
      "pressSection.leftArticle.title": "Ausgezeichnet vom Gambero Rosso mit 'Uno Spicchio' im Pizzerien-Guide Italien 2025",
      "pressSection.leftArticle.preview": "Die Brüder Salvatore und Rosario Mirenda wurden für ihre Pizzeria Bassi Fondenti in Cefalù mit der renommierten Auszeichnung vom Gambero Rosso geehrt. Der 'Pizzerien-Guide Italien 2025' verlieh ihnen 'Uno Spicchio', was ihre Hingabe an die Kunst der Pizza und die Verwendung hochwertiger Zutaten würdigt.",
      "pressSection.leftArticle.imageAlt": "Gambero Rosso Auszeichnung",
      "pressSection.article.readMore": "Artikel komplett lesen",
      "pressSection.readMoreArticles": "Weitere Artikel lesen",
      // Team Gallery texts
      "teamGallerySection.heading": "GALERIE",
    }
  },
  es: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Reservar una mesa",
      viewMenuButton: "Ver Menú",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Bassi Fondenti",
      "navbar.toggleMenu": "Mostrar/Ocultar menú",
      "navbar.home": "Inicio",
      "navbar.menu": "Menú",
      "navbar.gallery": "Galería",
      "navbar.press": "Prensa",
      "navbar.reservation": "Reservas",
      // HistorySection texts
      "historySection.title": "NUESTRA HISTORIA",
      "historySection.paragraph1": "En el centro histórico de Vittoria, Bassifondenti es una realidad gastronómica que gira en torno al concepto de 'familia'.",
      "historySection.paragraph2": "Adquirida por los cónyuges <b>Mario Giombarresi y Alina Caprian</b> en marzo de 2019, junto con su pequeño <b>Valerio</b>, el restaurante tiene una personalidad 'gourmet' que se refleja tanto en los platos del menú del restaurante como en las pizzas.",
      "historySection.paragraph3": "La elección de las <b>materias primas</b> recae en productos genuinos, de alta calidad y de origen local, suministrados por empresas locales. Un fuerte vínculo entre <b>pizza y cocina</b> sigue el hilo de la <b>estacionalidad</b>, que se refleja en las variaciones del menú cada 4 meses. Esta realidad ofrece la posibilidad de hacer una verdadera <b>experiencia gustativa</b> cambiando también de <b>ubicación</b>: en invierno, una especie de <b>jardín exterior cubierto</b>, en verano, vista completa al mar desde el <b>muelle de Scoglitti</b>.",
      "historySection.image.caption": "Fundadores de Pizzeria Bassi Fondenti",
      // Cookie consent texts
      "cookieConsent.text": "Utilizamos cookies para mejorar su experiencia de navegación. Elija sus preferencias.",
      "cookieConsent.acceptAll": "Aceptar todas",
      "cookieConsent.acceptEssential": "Solo esenciales",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Servicio y hospitalidad",
      "culinaryPhilosophy.item1.description": "Nos encanta cuidar a nuestros clientes",
      "culinaryPhilosophy.item2.title": "Ingredientes de calidad",
      "culinaryPhilosophy.item2.description": "Seleccionamos las mejores harinas y elegimos los productos de temporada más refinados",
      "culinaryPhilosophy.item3.title": "Maridajes perfectos",
      "culinaryPhilosophy.item3.description": "Nuestra carta de vinos ofrece muchas opciones, no solo locales",
      // Footer texts
      "footer.tagline": "Autenticidad en cada bocado.",
      "footer.description": "¡Nuestra pasión por la pizza se refleja en cada plato que servimos!",
      "footer.quickLinksHeader": "Enlaces rápidos",
      "footer.contactHeader": "Contactos",
      "footer.address.line1": "Via Cavour, 43",
      "footer.address.line2": "97019, Vittoria, RG",
      "footer.phone": "Tel: +39 0932 161 8460",
      "footer.email": "bassifondenti@gmail.com",
      "footer.hours.weekdays": "Lunes-Domingo: 12-14, 19-00",
      "footer.copyright": "© {{year}} Pizzeria Bassi Fondenti. Todos los derechos reservados.",
      // PressSection texts
      "pressSection.heading": "RECONOCIMIENTOS Y PRENSA",
      "pressSection.leftArticle.title": "Premiados por Gambero Rosso con 'Uno Spicchio' en la Guía de Pizzerías de Italia 2025",
      "pressSection.leftArticle.preview": "Los hermanos Salvatore y Rosario Mirenda han conseguido el prestigioso reconocimiento de Gambero Rosso con su pizzería Bassi Fondenti en Cefalù. La guía 'Pizzerías de Italia 2025' les ha otorgado 'Uno Spicchio', premiando su dedicación al arte de la pizza y el uso de ingredientes de alta calidad.",
      "pressSection.leftArticle.imageAlt": "Reconocimiento Gambero Rosso",
      "pressSection.article.readMore": "Leer el artículo completo",
      "pressSection.readMoreArticles": "Leer más artículos",
      // Team Gallery texts
      "teamGallerySection.heading": "GALERÍA",
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("selectedLanguage") || "it", // lingua iniziale
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React gestisce già l'escaping
  },
});

export default i18n;