import React from 'react'
import brand1 from '../../assets/Images/brand/brand1.png'
import brand2 from '../../assets/Images/brand/brand2.png'
import brand3 from '../../assets/Images/brand/brand3.png'
import brand4 from '../../assets/Images/brand/brand4.png'
import brand5 from '../../assets/Images/brand/brand5.png'

import card from '../../assets/Images/card.png'
import card1 from '../../assets/Images/card1.png'
import card2 from '../../assets/Images/card2.png'
import card3 from '../../assets/Images/card3.png'
import card4 from '../../assets/Images/card4.png'
import { Link } from 'react-router-dom'


const companyLogo = [
    { id: 1, img: brand1 },
    { id: 2, img: brand2 },
    { id: 3, img: brand3 },
    { id: 4, img: brand4 },
    { id: 5, img: brand5 },
]

const Category = () => {
    return (
        <div className='xl:px-28 px-4 py-28 max-w-screen-xl container mx-auto'>
            <div className='flex items-center justify-center flex-wrap gap-4 py-5'>
                {
                    companyLogo.map(({ id, img }) => (
                        <div key={id}><img src={img} alt="" className=" w-44" /></div>
                    ))
                }

            </div>
            {/* Category grid */}

            <div className='mt-8 md:flex gap-4 md:flex-row items-center '>
                <p className=' font-semibold uppercase bg-Black text-white rounded-sm inline-flex md:-rotate-90 md:p-1.5 p-2 mb-4 text-center'>Explore new and popular styles</p>
                <div className="md:w-1/2">
                    <Link to="/">
                        <img src={card} alt="" className=' hover:scale-105 transition-all duration-200 w-full' />
                    </Link>
                </div>
                <div className='md:w-1/2'>
                    <div className='grid grid-cols-2 gap-2'>
                        <Link to="/"><img src={card1} alt="" className='hover:scale-105 transition-all duration-200 w-full' /></Link>
                        <Link to="/"><img src={card2} alt="" className='hover:scale-105 transition-all duration-200 w-full'/></Link>
                        <Link to="/"><img src={card3} alt="" className='hover:scale-105 transition-all duration-200 w-full'/></Link>
                        <Link to="/"><img src={card4} alt="" className='hover:scale-105 transition-all duration-200 w-full'/></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Category