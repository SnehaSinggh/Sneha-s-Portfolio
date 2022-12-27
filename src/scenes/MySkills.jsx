import useMediaQuery from "/hooks/useMediaQuery";
import { motion } from "framer-motion";
import LineGradient from "/components/LineGradient";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          
        </motion.div>

        
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* HTML */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">01</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
              Hypertext Markup Language
              </p>
              </div>
            <div className="w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]" />

          </div>
          <div className="mt-8"><LineGradient /></div>

        </motion.div>

        {/* CSS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">02</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
              Cascading Style Sheets
              
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]" />

          </div>
          <div className="mt-8 "><LineGradient /></div>

        </motion.div>
        {/* JavaScript */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                JavaScript
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]" />

          </div>
          <div className="mt-8"><LineGradient /></div>

        </motion.div>

        {/* ReactJS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">04</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                ReactJS
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]" />
            </div>
            <div className="mt-8 mr-12"><LineGradient /></div>
        </motion.div>

        {/* JAVA */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-4xl">05</p>
              <p className="font-playfair font-semibold text-4xl mt-3">
              Java
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-8 mr-12"><LineGradient /></div>
          </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
