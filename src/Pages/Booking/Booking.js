import React from 'react';
import BookingInfo from './BookingInfo/BookingInfo';

const Booking = () => {
    return (
        <div className='home-container flex justify-center items-center pt-20'>
            <section className='grid grid-cols-2'>
                <article className='px-[120px]'>
                    <h1 className='home-title'>Cox's Bazar</h1>
                    <p className='paragraph-text'>Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </article>
                <article className='flex justify-center items-center'>
                    <BookingInfo />
                </article>
            </section>
        </div>
    );
};

export default Booking;