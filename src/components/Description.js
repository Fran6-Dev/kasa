import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../data';
import Rating from './Rating';

const Description = () => {
    const { id } = useParams();
    let detailsLogement = data.find((logement) => (logement.id === id));

    if (detailsLogement !== undefined) {

        let tags = detailsLogement.tags;


        return (
            <>
                <div className='mx-6 lg:flex justify-between '>
                    <div>
                        <h2 className='text-xl text-red-500 my-2 lg:text-3xl'>{detailsLogement.title}</h2>
                        <p className='text-red-500 my-2'>{detailsLogement.location}</p>
                        <ul className='flex gap-4 '>
                            {tags.map((tag) => <li className='bg-red-500 text-white text-center text-sm mb-2 w-28 rounded-xl flex justify-center items-center my-2 p-1' key={tag[0]} >{tag}</li>)}
                        </ul>
                    </div>
                    <div className='flex justify-between my-2 lg:flex lg:flex-col-reverse lg:justify-center '>
                        <div className='flex items-center'>
                            <Rating />
                        </div>
                        <div className='flex'>
                            <p className='text-red-500 pr-3 flex items-center'>{detailsLogement.host.name}</p>
                            <img src={detailsLogement.host.picture} alt="profil-pic" className='rounded-full w-16' />
                        </div>
                    </div>


                </div>
            </>
        )
    }
}

export default Description