import React, { useRef } from 'react';
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/outline'

const TravelPlaces = () => {
    const ref = useRef('')
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    const places = [
        {
            "name": "Sajek",
            "img": "https://i.ibb.co/9VTzgCc/Sajek.png"
        },
        {
            "name": "Sreemongol",
            "img": "https://i.ibb.co/X3kgNcH/Sreemongol.png"
        },
        {
            "name": "Sundorbon",
            "img": "https://i.ibb.co/7rTwKyb/sundorbon.png"
        }
    ]
    return (
        <div>
            <div className='flex overflow-hidden gap-10' ref={ref}>
                {
                    places.map(place =>
                        <img className='w-[270px] border-4 border-transparent hover:border-amber-500 rounded-3xl duration-200 ease-in' src={place.img} alt="" />
                    )
                }
            </div>
            <div className='flex gap-3 mt-5'>
                <button onClick={() => scroll(-300)}><ArrowCircleLeftIcon className="w-9" /></button>
                <button onClick={() => scroll(300)} > <ArrowCircleRightIcon className="w-9" /></button>
            </div>
        </div >
    );
};

export default TravelPlaces;