import React from 'react';
import styles, { layout } from '../style';
import { feedback } from "../constants/index.js";
import FeedBackCard from './FeedBackCard.jsx';

const Testimonials = () => (
    <section id='clients' className={`flex flex-col ${styles.paddingY} ${styles.paddingY} ${styles.flexCenter} relative`}>
        <div className='absolute z-0 w-[60%] h-[60%] -right-[20%] rounded-full blue__gradient' />

        <div className={`w-[90%] flex flex-col md:flex-row items-center justify-between mb-6 sm:mb-16 relative z-[1]`}>
            <h1 className={`${styles.heading2}`}>What people are <br className='hidden sm:block' />saying about us</h1>
            <div className='w-full mt-6 md:mt-0 flex'>
                <p className={`${styles.paragraph} text-left max-w-[450px] md:ml-16`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>

        <div className='flex flex-wrap justify-center  feedback-container relative z-[1]'>
            {
                feedback.map((card) => (
                    <FeedBackCard key={card.id} {...card} />
                ))
            }
        </div>


    </section>
)

export default Testimonials
