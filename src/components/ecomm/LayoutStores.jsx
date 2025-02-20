import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import Ecommerce from './Ecomm';
import SectionEcommerce from './SectionEcommerce';
import Footer from '../Footer';

const LayoutStores = () => {

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    const [showModal, setShowModal] = useState(false);

    const closeModal = (e) => {
      
        if (e.target.id === 'modalOverlay') {
            setShowModal(false);
        }
    };

    return (
        <>
            <Nav />
            <div className='p-4 flex flex-col gap-3'>
                <SectionEcommerce />
                <h2 className='text-2xl md:text-3xl lg:text-4xl py-4'>Estás a un paso de 
                    <b className='text-[#a78bfa] px-2'>
                    transformar
                    </b>
                 tu negocio</h2>
                <button className='action' onClick={() => setShowModal(true)}>Comenzar</button>
            </div>

            {showModal && (
                <div 
                    id="modalOverlay" 
                    className="fixed inset-0 bg-black bg-opacity-50 p-4 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div className="bg-[#242424] p-6 rounded-lg shadow-lg relative w-[80%] max-w-lg" onClick={(e) => e.stopPropagation()}>
                        <p className='my-2 '>Completa los datos y te contactaremos para agendar una reunión. Hablaremos de tus necesidades y de cómo crear tu tienda virtual que vende.</p>
                   
                        <button className="absolute cursor-pointer top-2 right-2 text-[#a78bfa] hover:text-gray-700" onClick={() => setShowModal(false)}>
                            ✖
                        </button>
                        <Ecommerce />
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default LayoutStores;
