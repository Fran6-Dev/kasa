import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data';

const Infos = () => {

    const [showDescription, setShowDescription] = useState(true);
    const [showEquipement, setShowEquipement] = useState(true);

    const { id } = useParams();

    let detailsLogement = data.find((logement) => logement.id === id);

    if (detailsLogement !== undefined) {

        let equipement = detailsLogement.equipments


        return (
            <>
                <div className='my-6'>
                    <div className='mb-6 rounded'>
                        <div className='bg-red-500 flex justify-between px-2 rounded' onClick={() => setShowDescription(!showDescription)}>
                            <h4 className=' text-white py-2'>Description</h4>
                            {showDescription ?
                                <img src="../../asset/dropdown-arrow.svg" alt="" className="text-red" /> :
                                <img src="../../asset/dropup-arrow.svg" alt="" className="text-red" />}
                        </div>
                        <div className='bg-gray-100'>
                            {showDescription ? <p className='text-red-500 p-3'>{detailsLogement.description}</p> : null}
                        </div>
                    </div>

                    <div className='rounded'>
                        <div className='bg-red-500 flex justify-between px-2 rounded' onClick={() => setShowEquipement(!showEquipement)}>
                            <h4 className=' text-white py-2'>Equipements</h4>
                            {showEquipement ?
                                <img src="../../asset/dropdown-arrow.svg" alt="" className="text-red" /> :
                                <img src="../../asset/dropup-arrow.svg" alt="" className="text-red" />}
                        </div>
                        <div className='bg-gray-100'>
                            {showEquipement ? <ul className='text-red-500 p-3'>{equipement.map((object, index) => <li key={index}>{object}</li>)}</ul> : null}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Infos