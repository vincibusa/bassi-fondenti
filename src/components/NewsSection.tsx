import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface NewsArticle {
  title: string;
  source: string;
  date: string;
  description: string;
  link: string;
  imageUrl?: string;
}

const newsArticles: NewsArticle[] = [
  {
    title: "La pizza contemporanea dei Bassi Fondenti",
    source: "All Food Sicily",
    date: "27-06-2023",
    description: "Mario Giambarresi, patron del Ristorante-Pizzeria Bassifondenti esperto nell’arte bianca insieme alla moglie Alina Caprian e al piccolo Valerio, è riuscito a conquistare sempre più il cuore e il palato di chi ama gustare piatti ricercati, realizzati con materie prime di eccellenza. ",
    link: "https://www.allfoodsicily.it/mario-giombarresi-il-futuro-di-bassifondenti-tra-pizze-e-piatti-gourmet-legati-allalta-ristorazione/",
    imageUrl: "https://www.allfoodsicily.it/wp-content/uploads/2023/06/bassifondenti-famiglia.jpg",
  },
  {
    title: "Migliori Pizzerie di Sicilia 2023, ecco i vincitori e tutti i premi speciali",
    source: "All Food Sicily",
    date: "13-07-2023",
    description: "Dopo tanta attesa è arrivato il giorno decisivo per decretare i vincitori del Premio “Migliori Pizzerie di Sicilia 2023“ che visto partecipare 45 pizzerie da tutta la Sicilia.",
    link: "https://www.allfoodsicily.it/migliori-pizzerie-di-sicilia-2023-ecco-i-vincitori-e-tutti-i-premi-speciali/",
    imageUrl: "https://www.allfoodsicily.it/wp-content/uploads/2023/07/premio-migliori-pizzerie-di-sicilia-2023.jpg",
  },
  {
    title: "Al Festival “si mangia siciliano”. Mario Giombarresi è pizzaiolo ufficiale di Casa Sanremo",
    source: "All Food Sicily",
    date: "09-02-2025",
    description: "Sanremo non è solo musica ma anche promozione e valorizzazione delle eccellenze del territorio e dei prodotti tipici. Uno dei promotori siciliani che porterà in alto la Sicilia a Sanremo sarà Mario Giombarresi con le sue pizze fragranti, leggere e incredibilmente irresistibili.",
    link: "https://www.allfoodsicily.it/al-festival-si-mangia-siciliano-mario-giombarresi-e-pizzaiolo-ufficiale-di-casa-sanremo/",
    imageUrl: "https://www.allfoodsicily.it/wp-content/uploads/2025/02/Mario-Giombarresi.jpeg",
  },
  {
    title: "Gianfranco Carbonaro pizzaiolo di Bassifondenti protagonista di Ciao Darwin",
    source: "All Food Sicily",
    date: "25-01-2024",
    description: "Il siciliano Gianfranco Carbonaro, Chef Pizza Executive della Pizzeria Bassifondenti, sarà protagonista del noto programma tv Ciao Darwin che andrà in onda venerdì 26 gennaio su canale 5.",
    link: "https://www.allfoodsicily.it/gianfranco-carbonaro-pizzaiolo-di-bassifondenti-protagonista-di-ciao-darwin/",
    imageUrl: "https://www.allfoodsicily.it/wp-content/uploads/2024/01/Gianfranco-Carbonaro.jpg",
  },
  {
    title: "Gianfranco Carbonaro e la Pizzeria Bassifondenti al 73esimo Festival di Sanremo",
    source: "All Food Sicily",
    date: "01-02-2023",
    description: "Il siciliano Gianfranco Carbonaro, Chef Pizza Executive della Pizzeria Bassifondenti, avrà il compito di far assaporare la sua speciale “pizza stellata” ai concorrenti del 73esimo Festival di Sanremo in programma dal 7 all’11 febbraio 2023.",
    link: "https://www.allfoodsicily.it/gianfranco-carbonaro-e-la-pizzeria-bassifondenti-al-73esimo-festival-di-sanremo/",
    imageUrl: "https://www.allfoodsicily.it/wp-content/uploads/2023/01/Screenshot-2023-01-31-alle-13.18.10.png",
  },
  // Aggiungi qui altri articoli quando disponibili
];

const NewsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
            {t("news.title", "DICONO DI NOI")}
          </h2>
          <p className="text-foreground text-lg md:text-xl">
            {t("news.subtitle", "La stampa parla dei Bassi Fondenti")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                {article.imageUrl ? (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">{t("news.noImage", "Immagine non disponibile")}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-primary font-semibold">{article.source}</span>
                  <span className="text-gray-500 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-heading">
                  {article.title}
                </h3>
                <p className="text-foreground mb-4">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
                >
                  {t("news.readMore", "Leggi l'articolo")} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {newsArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-foreground py-12"
          >
            {t("news.noArticles", "Presto saranno disponibili gli articoli della stampa")}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsSection; 