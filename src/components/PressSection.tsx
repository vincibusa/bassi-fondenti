import React from "react";
import { motion } from "framer-motion";

import Carbone from "../assets/carbone.jpg"
import Cereali from "../assets/cereali.jpg"
import Porcini from "../assets/porcini.jpg"
import Classico from "../assets/classico.jpg"
import Basilico from "../assets/basilico.jpg"

interface DoughType {
  title: string;
  image: string;
}

const doughTypes: DoughType[] = [
  {
    title: "Impasto classico",
    image: Classico,
  },
  {
    title: "Impasto ai funghi porcini",
    image: Porcini,
  },
  {
    title: "Impasto ai cereali",
    image: Cereali,
  },
  {
    title: "Impasto al carbone vegetale",
    image: Carbone,
  },
  {
    title: "Impasto al basilico",
    image: Basilico,
  }
];

const PressSection: React.FC = () => {
  return (
    <section id="press" className="py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
            LA NOSTRA PIZZA
          </h2>
        </motion.div>

        {/* Single column layout instead of two columns */}
        <div className="flex flex-col gap-16">
          {/* Text section (no longer sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-foreground text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
Dalle farine al lievito madre, l'ingrediente segreto è la qualità. Dopo la creazione di un prefermento e una lievitazione lunga 72 ore, gli impasti ben alveolati danno vita alla nostra 
<b>pizza contemporanea</b> dal bordo alto, cotta sapientemente in forno a legna. 
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-foreground text-lg md:text-xl leading-relaxed"
                style={{ fontFamily: '"Gambetta", Sans-serif' }}
              >
                La nostra creatività delinea quattro <b>impasti speciali</b>, utilizzati anche per la creazione dei <b>bun</b> per hamburger. 
              </motion.p>
            </div>
          </motion.div>

          {/* Cards section - now below the text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
          >
            {doughTypes.map((dough, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={dough.image}
                    alt={dough.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-heading group-hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: '"Gambetta", Sans-serif' }}>
                    {dough.title}
                  </h4>
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