import React from 'react';
import styles from "../style.js";
import { arrowUp } from "../assets"

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-0.5 cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row mr-3`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient'>Get</p>
        <img src={arrowUp} alt="arrow-up" className='w-[23px] h-[23px] object-contain' />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient'>Started </p>
    </div>
  </div>
)

export default GetStarted
