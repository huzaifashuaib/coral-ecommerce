import React from 'react'


const companyLogo = [
    { Id: 1, img: "../../assets/Images/brand/brand-1.png" },
    { Id: 2, img: '../../assets/Images/brand/brand-2.png' },
    { Id: 3, img: '../../assets/Images/brand/brand-3.png' },
    { Id: 4, img: '../../assets/Images/brand/brand-4.png' },
    { Id: 5, img: '../../assets/Images/brand/brand-5.png' },
]

const Category = () => {
    return (
        <div className='xl:px-28 px-4 py-28'>
            <div>
            {/* {
                companyLogo.map(({Id,img})=>(
                    <div key={Id}><img src={img} alt="" /></div>
                ))
            } */}
            <img src="" alt="" />
        </div>
         
        </div>
    )
}

export default Category