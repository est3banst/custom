import React from 'react'
import { Link } from 'react-router-dom'
import NavEn from './NavEn'
import FooterEn from './FooterEn'

const SupportEn = () => {
  return (
    <>
    <div className='pb-24'>
    <NavEn />
    </div>
    <div className='container-conic'>
        <div className='relative p-2'>
        <section className='flex flex-col justify-center gap-2 leading-relaxed font-medium px-2 py-8'>
        <h2>Is your website slow, not bringing in customers, or not representing your brand because it was made a long time ago?</h2>
        <hr />
        <h2>Do you have an online store that doesn't meet your expectations?</h2>
        <hr />
        <h2>Did you purchase a system to improve your business management, but instead of speeding up your processes, it slows you down due to long support wait times or just a slow system?</h2>
    </section>
    <section className='bg-[#24242493] px-5 py-10'>
        <h2 className='font-bold text-xl'>We are your ideal partner to help you use technology efficiently, so you don’t have to spend mountains of money re-hiring over and over to get the same results</h2>
     <Link to="/en/contact" >
           <button className='action'>Get started</button>
           </Link>
        </section>
        </div>

        <section className='relative w-full text-center underline py-4'>
        <Link to="/en">
        Go back</Link>
        </section>
     
    </div>
    <div className='relative pt-64'>
   <FooterEn />
   </div>
   
    </>
  )
}

export default SupportEn