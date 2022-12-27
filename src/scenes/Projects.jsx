import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Project = ({ title }) => {
  if(title === "Meal App" ){
  
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
 
  return (
    <motion.div variants={projectVariant} className="relative">
      <a
          href="https://snehasinggh.github.io/Meal-App/"
          target="_blank"
          rel="noreferrer"
        >
      <div className={overlayStyles}  >
        <p className="text-2xl font-playfair" >{title}</p>
        <p className="mt-7">
          This is a recipe finder application that we can use to make dishes of different cuisine, here we can also search recipe.
        </p>  
      </div>
      </a> 
      <img src={`/assets/MealApp.png`} alt={projectTitle} />

    </motion.div>
  );

  
  }
  else if(title === "Memory Game" ){
  
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
   
    return (
      <motion.div variants={projectVariant} className="relative">
        <a
          href="https://snehasinggh.github.io/Memory-Game/"
          target="_blank"
          rel="noreferrer"
        >
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            This is a memory game which has number of cards. Player turns over any two cards and if the cards match the card will remain open. 
          </p>
          
        </div>
        </a>
        <img src={`/assets/MemoryGame.png`} alt={projectTitle} />
      </motion.div>
    );
    }
    else if(title === "Word Guessing Game" ){
  
      const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
      const projectTitle = title.split(" ").join("-").toLowerCase();
     
      return (
        <motion.div variants={projectVariant} className="relative">
          <a
          href="https://snehasinggh.github.io/Word-Guessing-Game/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{title}</p>
            <p className="mt-7">
              In this game player has to guess the word with the help of given hint.
            </p>
            
          </div>
          </a>
          <img src={`/assets/WordGuessGame.png`} alt={projectTitle} />
        </motion.div>
      );
    }
    else if(title === "Tic Tac Toe Game" ){
  
      const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
      const projectTitle = title.split(" ").join("-").toLowerCase();
     
      return (
        <motion.div variants={projectVariant} className="relative">
          <a
          href="https://snehasinggh.github.io/Tic-tac-toeGame/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{title}</p>
            <p className="mt-7">
              This is Tic Tac Toe game in which two players alternately put Xs and Os in compartments of a figure formed by two vertical lines crossing two horizontal lines and each tries to get a row of three Xs or three Os before the opponent does.
            </p>
            
          </div>
          </a>
          <img src={`/assets/TicTacToe.png`} alt={projectTitle} />
        </motion.div>
      );
    }
    else if(title === "Movie Search" ){
  
      const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
      const projectTitle = title.split(" ").join("-").toLowerCase();
     
      return (
        <motion.div variants={projectVariant} className="relative">
          <a
          href="https://snehasinggh.github.io/Movies-Search/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{title}</p>
            <p className="mt-7">
              This is a movie finder application that we can use to find any movie's description and rating.
            </p>
            
          </div>
          </a>
          <img src={`/assets/MovieSearch.png`} alt={projectTitle} />
        </motion.div>
      );
    }
    
    else {
  
      const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
      const projectTitle = title.split(" ").join("-").toLowerCase();
     
      return (
        <motion.div variants={projectVariant} className="relative">
          <a
          href="https://snehasinggh.github.io/StarbucksLandingPage/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={overlayStyles}>
            <p className="text-2xl font-playfair">{title}</p>
            <p className="mt-7">
              It is a landing page of starbucks.
            </p>
          </div>
          </a>
          <img src={`/assets/LandingPage.png`} alt={projectTitle} />
        </motion.div>
      );
    }
};







const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          
        </div>
        <p className="mt-10 mb-10 text-1xl">
          Below are my few projects.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/*<div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[800px] max-h-[800px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
      </div>*/}
          <Project title="Meal App" />
          <Project title="Memory Game" />

          {/* ROW 2 */}
          <Project title="Word Guessing Game" />
          <Project title="Tic Tac Toe Game" />
          <Project title="Movie Search" />

          {/* ROW 3 */}
          {/*<Project title="Trading App" />*/}
          <Project title="Starbucks Landing Page" />

          
          
          {/*<div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[800px] max-h-[800px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
      </div>*/}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
