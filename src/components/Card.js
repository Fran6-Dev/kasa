import { data } from '../data';
import React from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <>

            <div className='bg-gray-100 rounded-lg p-8 flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                    {data.map((data) => (
                        <Link to={"housing/" + data.id}>
                            <div className="" key={data.id}>
                                <img src={data.cover} alt="logement" className='rounded opacity-80 h-60 w-96' />
                                <p className='text-white text-xs font-bold relative left-5 bottom-9'>{data.title}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Card