import React from 'react';

const TravelPlaces = () => {
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
        <div className='flex overflow-hidden gap-10'>
            {
                places.map(place =>
                    <img className='w-[270px] border-4 border-transparent hover:border-amber-500 rounded-3xl' src={place.img} alt="" />
                )
            }
        </div>
    );
};

export default TravelPlaces;