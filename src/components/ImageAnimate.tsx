import React from 'react'
import {motion} from 'framer-motion'
import imagebgr from '../assets/xx.jpg'

export default function ImageAnimate() {
    return (
        <motion.div style={{ backgroundImage: `url(${imagebgr})` }} className='w-[80px] h-[100px] overflow-hidden bg-cover bg-no-repeat cat'
        ></motion.div>
      );
}