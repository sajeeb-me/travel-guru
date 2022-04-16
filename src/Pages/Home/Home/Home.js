import React from 'react';
import TravelPlaces from '../TravelPlaces/TravelPlaces';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container flex items-center'>
            <section className='grid grid-cols-2'>
                <article className=''>
                    <h1 className='home-title'>Cox's Bazar</h1>
                    <p className='paragraph-text'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters  in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button className='bg-amber-600 text-black py-2 px-5 rounded-md my-5 font-semibold hover:bg-amber-500'>Booking</button>
                </article>
                <article>
                    <TravelPlaces />
                </article>
            </section>
        </div>
    );
};

export default Home;