import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface DoughType {
  title: string;
  description: string;
  image: string;
  hydration: string;
}

const doughTypes: DoughType[] = [
  {
    title: "Classico",
    description: "Il nostro impasto tradizionale, maturato 48 ore, con una perfetta combinazione di croccantezza e morbidezza.",
    image: "/images/impasto-classico.jpg",
    hydration: "65%"
  },
  {
    title: "Integrale",
    description: "Realizzato con farine integrali selezionate, ricco di fibre e dal gusto rustico e autentico.",
    image: "/images/impasto-integrale.jpg",
    hydration: "70%"
  },
  {
    title: "Multicereali",
    description: "Un blend speciale di cereali che conferisce un sapore unico e proprietà nutritive superiori.",
    image: "/images/impasto-multicereali.jpg",
    hydration: "68%"
  },
  {
    title: "Senza Glutine",
    description: "Studiato per garantire la stessa esperienza gustativa anche a chi è intollerante al glutine.",
    image: "/images/impasto-gluten-free.jpg",
    hydration: "63%"
  }
];

const PressSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="our-dough" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-heading text-center mb-10 md:mb-16 text-4xl lg:text-6xl"
          style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
        >
          La Nostra Pizza
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start">
          {/* Sezione sinistra con il testo sulla pizza */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground text-lg mb-6" style={{ fontFamily: '"Gambetta", Sans-serif' }}>
                La nostra pizza nasce da una profonda passione per l'arte della panificazione e dalla ricerca costante dell'eccellenza. Ogni impasto è il risultato di anni di sperimentazione e dedizione.
              </p>
              <p className="text-foreground text-lg mb-6" style={{ fontFamily: '"Gambetta", Sans-serif' }}>
                Utilizziamo solo farine selezionate di altissima qualità, combinate con tecniche di lievitazione naturale e lunghe maturazioni che possono durare fino a 72 ore. Questo processo conferisce ai nostri impasti una digeribilità superiore e un profilo aromatico unico.
              </p>
              <p className="text-foreground text-lg" style={{ fontFamily: '"Gambetta", Sans-serif' }}>
                La nostra filosofia si basa sul rispetto della tradizione napoletana, arricchita da tecniche moderne e ingredienti innovativi, per offrire un'esperienza gastronomica indimenticabile.
              </p>
            </div>
          </motion.div>

          {/* Sezione destra con le card degli impasti */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {doughTypes.map((dough, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={dough.image}
                    alt={dough.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: '"Gambetta", Sans-serif' }}>
                    {dough.title}
                  </h4>
                  <p className="text-sm text-foreground mb-2" style={{ fontFamily: '"Gambetta", Sans-serif' }}>
                    {dough.description}
                  </p>
                  <p className="text-primary font-semibold" style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}>
                    Idratazione: {dough.hydration}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;