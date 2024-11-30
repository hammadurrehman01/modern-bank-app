import React from 'react';
import { stats } from "../constants/index.js";
import styles from '../style.js';


const Stats = () => (
  <section className={`${styles.flexCenter} lg:gap-24 flex-wrap mb:6 sm:mb-20`}>
    {
      stats.map((stat, index) => (
        <div key={stat.id} className='flex justify-start items-center m-3'>
          <h4 className='font-poppins font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal text-[20px] leading-[21px] xs:leading-[26px] text-gradient uppercase ml-3'>
            {stat.title}
          </p>
        </div>
      ))
    }
  </section>
)

export default Stats
