import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} py-12 px-12 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow max-w-[450px] sm:max-w-[750px] lg:max-w-[1170px] mx-auto`}>
    <div className='flex flex-1 flex-col'>
      <h2 className={`${styles.heading2} -leading-2`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className={`${styles.flexCenter} ml-0 sm:ml-10 mt-10 sm:mt-0`}>
      <Button />
    </div>
  </section>
)

export default CTA
