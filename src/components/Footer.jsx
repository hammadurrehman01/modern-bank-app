import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} px-16 flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className='flex flex-col mx-auto'>
        <img src={logo} alt="hoobank" className='w-[150px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-2 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-12 lg:gap-48 mt-10 md:mt-0'>
        {
          footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col my-4 ss:my-0 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul>
                {
                  footerLink.links.map((link, index) => (
                    <li key={link.name} className={`mt-6 font-poppins font-normal text-base leading-[24px] text-dimWhite transition duration-300 ease-in-out hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
    <div className='w-full flex flex-col md:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins font-normal text-[18px] text-white'>Copyright © 2021 HooBank. All Rights Reserved.</p>
      <div className='flex mt-6 md:mt-0'>
        {
          socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer transition duration-200 ease-in-out hover:scale-110 ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))
        }
      </div>
    </div>
  </section>
)

export default Footer
