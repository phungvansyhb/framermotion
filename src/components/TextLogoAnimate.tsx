import React from 'react'
import {motion} from 'framer-motion'


type Props = {
    logo : string
}

export default function TextLogoAnimate({logo}: Props) {
  return (
    <motion.svg viewBox={"0 0 400 160"} className={'w-dvw'}>
          <motion.text x="50%" y="50%" dy="20px" textAnchor={"middle"} className="text-3xl font-bold text-pretty" 
            initial={{
              // fill : 'black',
              stroke : "black",
              strokeWidth : 1,
              strokeDashoffset: "20%",
              strokeDasharray: "0 15%"   // border dash 0px (no border) and each gap is 32%
            }}
            animate= {{
              scale : 1.5,
              // fill : 'white',
              stroke : "white",
              strokeWidth : 0,
              strokeDashoffset: "-10%",
              strokeDasharray: "10% 0"   
            }}

            transition={{
              duration : 10,
              repeatType : 'reverse'
            }}
          
          >
            {logo}
          </motion.text>
      </motion.svg>
  )
}