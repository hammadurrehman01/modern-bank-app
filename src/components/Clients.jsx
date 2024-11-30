import React from 'react';
import { clients } from '../constants/index.js';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} gap-6 md:gap-28 flex-wrap mx-auto w-full`}>
      {
        clients.map((client) => (
          <div key={client.id} className={`min-w-[120px] sm:min-w-[120px] cursor-pointer `}>
            <img src={client.logo} alt="client" className='w-[100px] sm:w-[192px] object-contain img ' />
          </div>
        ))
      }
    </div>
  </section>
)

export default Clients
