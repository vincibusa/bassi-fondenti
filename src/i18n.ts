import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // CallToActionButtons texts
      reservationButton: "Book a Table",
      viewMenuButton: "View Menu",
      // Navbar texts
      "navbar.logoAlt": "Pizzeria Bassi Fondenti",
      "navbar.toggleMenu": "Toggle menu",
      "navbar.home": "Home",
      "navbar.menu": "Menu",
      "navbar.gallery": "Gallery",
      "navbar.press": "Press",
      "navbar.reservation": "Reservation",
      // HistorySection texts
      "historySection.title": "OUR HISTORY",
      "historySection.paragraph1":
        "In the heart of the historic center of Cefalù, just steps from the Duomo, Bassi Fondenti is the project of the two brothers <b>Salvatore and Rosario Mirenda</b>, founded in 2021 with the aim of offering a taste and experimentation experience.",
      "historySection.paragraph2":
        "In a venue with an industrial style and personal character, the <b>pizza</b> offered is a Neapolitan one that speaks in a contemporary language. From a <b>blend of type 1 and wholemeal flour</b>, with a fermentation lasting between sixteen and twenty hours, a light dough with a rustic texture is born, capable of satisfying even the most demanding palates. Not just a pizza but a <b>tasty story</b> that brings all the flavors of Sicily to the table.",
      "historySection.paragraph3":
        "Alternative options are available, such as the <b>double-cooked pizza</b>, first fried and then baked for extra crispiness, or the <b>small pan pizza</b> which uses a pre-fermented and reworked dough before being cooked and topped, doing justice to the <b>local ingredients</b>.",
      "historySection.shortParagraph1":
        "In the heart of the historic center of Cefalù, just steps from the Duomo, Bassi Fondenti is the project of the two <b>brothers Salvatore and Rosario Mirenda</b>, founded in 2021 with the aim of offering a taste and experimentation experience.",
      "historySection.shortParagraph2":
        "In a venue with an industrial style and personal character, the <b>pizza</b> offered is a Neapolitan one that speaks in a contemporary language. The unique and light dough with a rustic texture satisfies even the most demanding palates, doing justice to the <b>local ingredients</b>. Not just a pizza but a <b>tasty story</b> that brings all the flavors of Sicily to the table.",
      "historySection.image.alt": "Salvatore and Rosario Mirenda",
      "historySection.image.caption": "Founders of Bassi Fondenti",
      // Cookie consent texts
      "cookieConsent.text":
        "We use cookies to improve your browsing experience. Please choose your preferences.",
      "cookieConsent.acceptAll": "Accept All",
      "cookieConsent.acceptEssential": "Only Essential",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service and Hospitality",
      "culinaryPhilosophy.item1.description":
        "We love taking care of our customers",
      "culinaryPhilosophy.item2.title": "Quality Ingredients",
      "culinaryPhilosophy.item2.description":
        "We select the best flours and choose the finest seasonal products",
      "culinaryPhilosophy.item3.title": "Perfect Pairings",
      "culinaryPhilosophy.item3.description":
        "Our wine list offers many choices, not just local options",
      // Footer texts
      "footer.tagline": "Authenticity in every bite.",
      "footer.description":
        "Our passion for pizza is reflected in every dish we serve!",
      "footer.quickLinksHeader": "Quick Links",
      "footer.contactHeader": "Contact",
      "footer.address.line1": "Via Cavour , 43",
      "footer.address.line2": "97019, Vittoria , RG",
      "footer.phone": "Tel: +39 0932 161 8460",
      "footer.email": "bassifondenti@gmail.com",
      "footer.hours.weekdays": "Monday-Sunday: 12-14, 19-00",

      "footer.copyright":
        "© {{year}} Bassi Fondenti. All rights reserved.",
      // PressSection texts
      "pressSection.heading": "PRESS & RECOGNITIONS",
      "pressSection.leftArticle.title":
        "Awarded by Gambero Rosso with 'Uno Spicchio' in the Italian Pizzerie Guide 2025",
      "pressSection.leftArticle.preview":
        "The brothers Salvatore and Rosario Mirenda have received the prestigious Gambero Rosso recognition with their pizzeria Bassi Fondenti in Cefalù. The 'Pizzerie d'Italia 2025' guide awarded them 'Uno Spicchio', praising their dedication to the art of pizza and the use of high-quality ingredients.",
      "pressSection.leftArticle.imageAlt": "Gambero Rosso Award",
      "pressSection.article.readMore": "Read full article",
      "pressSection.readMoreArticles": "Read more articles",
      // Team gallery texts
      "teamGallerySection.heading": "GALLERY",
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
        "Au cœur du centre historique de Cefalù, à deux pas du Duomo, Bassi Fondenti est le projet des deux frères <b>Salvatore et Rosario Mirenda</b>, lancé en 2021 avec l'intention de faire vivre une expérience de goût et d'expérimentation.",
      "historySection.paragraph2":
        "Dans un lieu au style industriel et au caractère personnel, la <b>pizza</b> proposée est une pizza napolitaine au langage contemporain. À partir d'un <b>mélange de farine de type 1 et complète</b>, avec une fermentation de seize à vingt heures, une pâte légère à la texture rustique naît, capable de satisfaire même les palais les plus exigeants. Ce n'est pas une simple pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.paragraph3":
        "Des options alternatives ne manquent pas, comme la <b>pizza à double cuisson</b>, d'abord frite puis passée au four pour plus de croustillant, ou le <b>padellino</b> qui utilise une pâte pré-fermentée et retravaillée avant d'être cuite et garnie, rendant hommage aux <b>ingrédients locaux</b>.",
      "historySection.shortParagraph1":
        "Au cœur du centre historique de Cefalù, à deux pas du Duomo, Bassi Fondenti est le projet des deux frères <b>Salvatore et Rosario Mirenda</b>, lancé en 2021 pour offrir une expérience de goût et d'expérimentation.",
      "historySection.shortParagraph2":
        "Dans un lieu au style industriel et au caractère personnel, la <b>pizza</b> proposée est une pizza napolitaine contemporaine. La pâte unique et légère à la texture rustique satisfait même les palais les plus exigeants, rendant hommage aux <b>ingrédients locaux</b>. Ce n'est pas une pizza mais une <b>histoire gustative</b> qui apporte à table toutes les saveurs de la Sicile.",
      "historySection.image.alt": "Salvatore et Rosario Mirenda",
      "historySection.image.caption": "Fondateurs de Bassi Fondenti",
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
        "© {{year}} Bassi Fondenti. Tous droits réservés.",
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
      "historySection.paragraph1": "Im Herzen des historischen Zentrums von Cefalù, nur wenige Schritte vom Duomo entfernt, ist Bassi Fondenti das Projekt der beiden Brüder <b>Salvatore und Rosario Mirenda</b>, das 2021 ins Leben gerufen wurde, um ein Geschmackserlebnis und Experimentierfreude zu bieten.",
      "historySection.paragraph2": "In einem Lokal mit industriellem Stil und persönlichem Charakter ist die <b>Pizza</b> eine neapolitanische Pizza, die in zeitgenössischer Sprache spricht. Aus einer <b>Mischung aus Typ-1- und Vollkornmehl</b> mit einer Fermentationsdauer von sechzehn bis zwanzig Stunden entsteht ein leichter Teig mit rustikaler Textur, der selbst die anspruchsvollsten Gaumen zufriedenstellt. Es ist nicht nur eine Pizza, sondern eine <b>geschmackliche Geschichte</b>, die alle Aromen Siziliens auf den Tisch bringt.",
      "historySection.paragraph3": "Alternative Optionen sind verfügbar, wie die <b>Doppeltgebackene Pizza</b> – zuerst frittiert und dann im Ofen gebacken für extra Knusprigkeit – oder die <b>Padellino-Pizza</b>, bei der ein vorfermentierter und neu durchgekneteter Teig verwendet wird, der dann gebacken und belegt wird, um den <b>regionalen Zutaten</b> gerecht zu werden.",
      "historySection.shortParagraph1": "Im Herzen des historischen Zentrums von Cefalù, nur wenige Schritte vom Duomo entfernt, ist Bassi Fondenti das Projekt der beiden <b>Brüder Salvatore und Rosario Mirenda</b>, das 2021 ins Leben gerufen wurde, um ein Geschmackserlebnis und Experimentierfreude zu bieten.",
      "historySection.shortParagraph2": "In einem Lokal mit industriellem Stil und persönlichem Charakter ist die <b>Pizza</b> eine neapolitanische Pizza, die in zeitgenössischer Sprache spricht. Der einzigartige, leichte Teig mit rustikaler Textur überzeugt selbst die anspruchsvollsten Gaumen und bringt den <b>regionalen Zutaten</b> gerecht. Es ist nicht nur eine Pizza, sondern eine <b>geschmackliche Geschichte</b>, die alle Aromen Siziliens auf den Tisch bringt.",
      "historySection.image.alt": "Salvatore und Rosario Mirenda",
      "historySection.image.caption": "Gründer von Bassi Fondenti",
      // Cookie consent texts
      "cookieConsent.text": "Wir verwenden Cookies, um Ihre Browser-Erfahrung zu verbessern. Bitte wählen Sie Ihre Präferenzen.",
      "cookieConsent.acceptAll": "Alle akzeptieren",
      "cookieConsent.acceptEssential": "Nur essenzielle",
      // CulinaryPhilosophySection texts
      "culinaryPhilosophy.item1.title": "Service und Gastfreundschaft",
      "culinaryPhilosophy.item1.description": "Wir lieben es, uns um unsere Kunden zu kümmern.",
      "culinaryPhilosophy.item2.title": "Qualitätszutaten",
      "culinaryPhilosophy.item2.description": "Wir wählen die besten Mehle aus und verwenden die hochwertigsten saisonalen Produkte.",
      "culinaryPhilosophy.item3.title": "Perfekte Kombinationen",
      "culinaryPhilosophy.item3.description": "Unsere Weinkarte bietet zahlreiche Optionen, nicht nur regionale.",
      // Footer texts
      "footer.tagline": "Authentizität in jedem Biss.",
      "footer.description": "Unsere Leidenschaft für Pizza spiegelt sich in jedem Gericht wider, das wir servieren!",
      "footer.quickLinksHeader": "Schnellzugriffe",
      "footer.contactHeader": "Kontakt",
      "footer.address.line1": "Via Cavour , 43",
      "footer.address.line2": "97019, Vittoria , RG",
      "footer.phone": "Tel: +39 0932 161 8460",
      "footer.email": "bassifondenti@gmail.com",
      "footer.hours.weekdays": "Montag-Sonntag: 12-14, 19-00",
     
      "footer.copyright": "© {{year}} Bassi Fondenti. Alle Rechte vorbehalten.",
      // PressSection texts
      "pressSection.heading": "Presse & Auszeichnungen",
      "pressSection.leftArticle.title": "Ausgezeichnet vom Gambero Rosso mit 'Uno Spicchio' im Pizzerien-Guide Italien 2025",
      "pressSection.leftArticle.preview": "Die Brüder Salvatore und Rosario Mirenda wurden für ihre Pizzeria Bassi Fondenti in Cefalù mit der renommierten Auszeichnung vom Gambero Rosso geehrt. Der 'Pizzerien-Guide Italien 2025' verlieh ihnen 'Uno Spicchio', was ihre Hingabe an die Kunst der Pizza und die Verwendung hochwertiger Zutaten würdigt.",
      "pressSection.leftArticle.imageAlt": "Gambero Rosso Auszeichnung",
      "pressSection.article.readMore": "Artikel komplett lesen",
      "pressSection.readMoreArticles": "Weitere Artikel lesen",
      // Team Gallery texts
      "teamGallerySection.heading": "GALERIE",
     
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