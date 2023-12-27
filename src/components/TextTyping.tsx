import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    textKey : string 
}

export default function TextTyping({textKey}: Props) {
    const [isTyping, setIsTyping] = React.useState(false);
  return (
    <div className="flex">
      {textKey.split("").map((character, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "block" }}
          transition={{
            type: "spring",
            duration: 0.3,
            delay: index * 0.3 ,
           
          }}
          onAnimationStart={() => {
            if (index === 0) setIsTyping(true);
          }}
          onAnimationComplete={() => {
            if (index === textKey.length - 1) setIsTyping(false);
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
          type: "spring",
          duration: 1,
          repeat: Infinity,
        }}
        className={isTyping ? 'hidden' : ''}
      >
        |
      </motion.span>
      </div> 
  )
}