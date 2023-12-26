import viteLogo from "/vite.svg";
import { motion } from "framer-motion";
import React from 'react'

function App() {
  const textKey = "Powerfull";
  const [isTyping, setIsTyping] = React.useState(false);
  return (
    <main className="flex items-center justify-center w-dvw h-dvh font-bold text-6xl">
      {/* <motion.img
        src={viteLogo}
        className="logo cursor-move"
        alt="Vite logo"
        layout
        animate={{ width: 200 }}
        // drag
        // dragConstraints={{ left: 0, right: 300 }}
        // dragElastic={0.2}
        transition={{ repeat : Infinity , repeatType : 'reverse', duration : 1  } }
      /> */}

      {textKey.split("").map((character, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "block" }}
          transition={{
            type: "spring",
            duration: 0.3,
            delay: index * 0.3 ,
            // repeat: Infinity,
          }}
          onAnimationComplete={() => {
            if (index === character.length - 1) setIsTyping(false);
            else {
              setIsTyping(true);
            }
          }}
        >
          {character}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.8,
          repeat: Infinity,
        }}
        className={isTyping?'hidden':'block'}
      >
        |
      </motion.span>
    </main>
  );
}

export default App;
