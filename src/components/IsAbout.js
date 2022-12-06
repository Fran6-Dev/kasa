import React, { useState } from 'react'

const IsAbout = () => {

    const [fiability, setFiability] = useState(true);
    const [respect, setRespect] = useState(true);
    const [service, setService] = useState(true);
    const [security, setSecurity] = useState(true);

    return (
        <>
            <div className='flex justify-center items-center my-8 bg-[url("https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60")] h-60 w-full bg-cover bg-center rounded-lg' >
            </div>
            <div className='mb-6 rounded'>
                <div className='bg-red-500 flex justify-between px-2 rounded' onClick={() => setFiability(!fiability)}>
                    <h4 className=' text-white py-2'>Fiabilité</h4>
                    {fiability ?
                        <img src="../../asset/dropdown-arrow.svg" alt="" className="text-red" /> :
                        <img src="../../asset/dropup-arrow.svg" alt="" className="text-red" />}
                </div>
                <div className='bg-gray-100'>
                    {fiability ? <p className='text-red-500 p-3'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p> : null}
                </div>
            </div>
            <div className='mb-6 rounded'>
                <div className='bg-red-500 flex justify-between px-2 rounded' onClick={() => setRespect(!respect)}>
                    <h4 className=' text-white py-2'>Respect</h4>
                    {respect ?
                        <img src="../../asset/dropdown-arrow.svg" alt="" className="text-red" /> :
                        <img src="../../asset/dropup-arrow.svg" alt="" className="text-red" />}
                </div>
                <div className='bg-gray-100'>
                    {respect ? <p className='text-red-500 p-3'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p> : null}
                </div>
            </div>
            <div className='mb-6 rounded'>
                <div className='bg-red-500 flex justify-between px-2 rounded' onClick={() => setService(!service)}>
                    <h4 className=' text-white py-2'>Service</h4>
                    {service ?
                        <img src="../../asset/dropdown-arrow.svg" alt="" className="text-red" /> :
                        <img src="../../asset/dropup-arrow.svg" alt="" className="text-red" />}
                </div>
                <div className='bg-gray-100'>
                    {service ? <p className='text-red-500 p-3'>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p> : null}
                </div>
            </div>
            <div className='mb-6 rounded'>
                <div className='bg-red-500 flex justify-between px-2 rounded' onClick={() => setSecurity(!security)}>
                    <h4 className=' text-white py-2'>Sécurité</h4>
                    {security ?
                        <img src="../../asset/dropdown-arrow.svg" alt="" className="text-red" /> :
                        <img src="../../asset/dropup-arrow.svg" alt="" className="text-red" />}
                </div>
                <div className='bg-gray-100'>
                    {security ? <p className='text-red-500 p-3'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p> : null}
                </div>
            </div>
        </>

    )
}

export default IsAbout