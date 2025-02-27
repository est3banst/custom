import React from 'react'
import { Link } from 'react-router-dom'

const Us = () => {
    return (
        <div className='flex font-bold items-center flex-col w-4/6 justify-center m-auto relative h-auto gap-4'>
            <p>
                Diseñamos y desarrollamos sitios web modernos, escalables y de alto rendimiento adaptados a tus necesidades.
            </p>
            <p>
                Ya seas una startup o una empresa consolidada, nuestro equipo experto crea experiencias digitales atractivas y funcionales para que destaques en el mundo online.
            </p>
            <p>Todo el mundo antes de contratar un servicio o pagar un producto hace una búsqueda en línea, si no estás las chances son de que pierdas ese potencial cliente</p>
            <p>Vos te ocupas de tu negocio mientras nosotros hacemos la web</p>
            <p>
                ¡Construyamos algo increíble juntos!
            </p>
            <section className='flex p-3 items-center justify-center'>
                <Link to="/contact">
                <button className="action">Contactar</button>
                </Link>
            </section>
        </div>
    )
}

export default Us