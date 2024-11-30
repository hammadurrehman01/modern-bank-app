import React from 'react';
import { features } from "../constants/index"
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ title, content, icon, index }) => (
    <div className={`feature-card cursor-pointer flex flex-row p-6 rounded-[20px] ${index === features.length - 1 ? "mb-6" : "mb-0"} `}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className='w-1/2 h-1/2 object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins font-medium text-dimWhite text-base leading-[24px] mb-1'>
                {content}
            </p>
        </div>
    </div>
)

const Business = () => (
    <section id='features' className={`${layout.section}`}>
        <div className={`left ${layout.sectionInfo} px-6 sm:px-16 xl:px-0`}>
            <h2 className={`${styles.heading2}`}>
                You do the business, <br className='hidden sm:block' /> we’ll handle the money.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <Button styles={"mt-10"} />
        </div>
        <div className={`right ${layout.sectionImg} flex-col px-6 sm:px-16 xl:px-0`}>
            {
                features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))
            }

        </div>
    </section>
)

export default Business
