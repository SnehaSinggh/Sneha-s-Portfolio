import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
        <span className="text-white">MY</span> INTERESTS
        </p>
        <p className="mt-10">
          Apart from studies, I have various interest in following stuffs.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue  flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-3xl text-black">
            Digital Illustration
          </p>
          <p className="font-playfair text-6xl text-black">“</p>
          <p className="text-center text-1xl text-black">I have a great interest in making digital illustration.</p>

        </motion.div>

        <motion.div
          className="mx-auto relative bg-blue  flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-3xl text-black">
            Dancing
          </p>
          <p className="font-playfair text-6xl text-black">“</p>
          <p className="text-center text-1xl text-black">Certified Kathak dancer with an experience of 6 years. I also teach Indian dance form to various foreign students.</p>

        </motion.div>

        <motion.div
          className="mx-auto relative bg-blue  flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-3xl text-black">
            Games
          </p>
          <p className="font-playfair text-6xl text-black">“</p>
          <p className="text-center text-1xl text-black">
            I have huge intrest in sports, played various sports at zonal level and secured position.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-blue  flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-center text-3xl text-black">
            Travelling
          </p>
          <p className="font-playfair text-6xl text-black">“</p>
          <p className="text-center text-1xl text-black">Travelling is one of mine most favorite activity.</p>

        </motion.div>

        
        
      </div>
    </section>
  );
};

export default Testimonials;