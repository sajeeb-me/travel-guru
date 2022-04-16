import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TravelPlaces from '../TravelPlaces/TravelPlaces';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home-container flex items-center pt-20'>
            <section className='grid grid-cols-2'>
                <article className='pl-[120px]'>
                    <h1 className='home-title'>Cox's Bazar</h1>
                    <p className='paragraph-text'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters  in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <button onClick={() => navigate('/booking')} className='bg-amber-600 text-black py-2 px-5 rounded-md my-5 font-semibold flex items-center gap-3 hover:bg-amber-500 duration-200 ease-in'>
                        <p>Booking</p>
                        <ArrowRightIcon className='w-5 mt-1' />
                    </button>
                </article>
                <article>
                    <TravelPlaces />
                </article>
            </section>
        </div>
    );
};

export default Home;