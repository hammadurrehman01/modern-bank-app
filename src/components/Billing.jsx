import React from 'react';
import { apple, bill, google } from "../assets";
import styles, { layout } from '../style';

const Billing = () => (
  <section id='product' className={`${layout.sectionReverse}`}>
    <div className={`left ${layout.sectionImgReverse} px-6 sm:px-16 xl:px-0`}>
      <img src={bill} alt="bill" className='w-[6  00px] relative z-[5]' />
      <div className='absolute z-[3] top-0 w-1/2 h-1/2 rounded-full white__gradient' />
      <div className='absolute z-0 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient' />
    </div>

    <div className={`right ${layout.sectionInfo} px-6 sm:px-16 xl:px-0`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className='hidden sm:block' /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
      <div className='flex  mt-6 sm:mt10'>
        <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
)

export default Billing