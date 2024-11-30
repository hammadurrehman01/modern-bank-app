import React from 'react';
import styles from '../style.js';
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted.jsx"

const Hero = () => (
  <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={`left flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}>
      <div className={`flex flex-row items-center py-1.5 px-4 bg-discount-gradient rounded-[10px] mb-2`}>
        <img src={discount} alt="discount" className={`w-[32px] h-[32px]`} />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20% </span>
          <span>Discount For {" "}</span>
          <span className='text-white'>1 Month</span>
          <span> Account</span>
        </p>


      </div>
      <div className='flex justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold text-[52px] ss:text-[67px] text-white leading-[75px] ss:leading-[100px] '>
          The Next <br className='hidden sm:block' />
          <span className='text-gradient'>Generation</span>
        </h1>
        <div className="hidden ss:flex md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className='flex-1 font-poppins font-semibold text-[52px] ss:text-[67px] text-white leading-[75px] ss:leading-[100px]'>
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[483px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
        We examine annual percentage rates, annual fees.</p>
    </div>

    <div className={`right flex flex-1 ${styles.flexCenter} my-10 md:my-0 relative`}>
      <img className='w-full h-full relative z-[5]'
        src={robot}
        alt="billing"
      />
      <div className='absolute z-0 w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>

    <div className={`ss:hidden ${styles.flexStart}`}>
      <GetStarted />
    </div>

  </section >
)

export default Hero
