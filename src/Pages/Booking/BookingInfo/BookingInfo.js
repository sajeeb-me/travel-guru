import React from 'react';
import './BookingInfo.css'

const BookingInfo = () => {
    return (
        <div className='bg-white text-black p-5 rounded-lg'>
            <form className='booking-form'>
                <label htmlFor="origin">Origin</label>
                <input type="text" name="origin" id="origin" placeholder='ex: Dhaka' />
                <label htmlFor="destination">Destination</label>
                <input type="text" name="destination" id="destination" placeholder="ex: Cox's Bazar" />
                <label htmlFor="from">From</label>
                <input type="date" name="from" id="from" />
                <label htmlFor="to">To</label>
                <input type="date" name="to" id="to" />
                <input className='bg-amber-600 font-semibold hover:bg-amber-500 duration-200 ease-in' type="submit" value="Start Booking" />
            </form>
        </div>
    );
};

export default BookingInfo;