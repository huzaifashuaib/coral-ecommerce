import React, { useState, useEffect } from 'react'
import data from '../../JSON Data/product.json'
import { FaFilter } from 'react-icons/fa'
import Card from '../../Components/Card'

const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setProduct(data)
    }, [])


    return (
        <div className='xl:px-28 px-4 max-w-screen-2xl m-auto container mb-12'>
            <h1 className='title'>Or subscribe to the newsletter</h1>

            {/* Product Cards */}
            <div>
                <div className='flex flex-col md:flex-row items-center md:justify-between flex-wrap space-y-3 md:space-y-0 mb-8'>
                    {/* All Btns */}
                    <div className='flex flex-row justify-start md:items-center gap-4 md:gap-8 flex-wrap'>
                        <button>All Products</button>
                        <button>T-Shirt</button>
                        <button>Hoodies</button>
                        <button>Bag</button>
                    </div>

                    {/* Sorting Btn */}
                    <div className='flex justify-end rounded-sm'>
                        <div className='bg-Black p-2'>
                            <FaFilter className='h-4 w-4 text-white' />
                        </div>
                        <select className='bg-Black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low to high">Low to High</option>
                            <option value="high to low">High to Low</option>
                        </select>
                    </div>
                </div>

                <Card product={product} />
                
            </div>
        </div>
    )
}

export default Products
