import React from 'react'

const HomePageHeroSection = () => {
  return (
    <div>
      <div
        className='bg-[#89614a] min-h-screen pt-20 relative'
      >
        {/* Block graphics */}
        <div
          className='absolute top-0 left-0 w-full h-full flex gap-16'
        >
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
              <div
                key={index}
                className='w-full bg-[#c69879]'
              />
            ))
          }
        </div>
      </div>
      <div
        className='bg-[#BA131C] text-white py-2 px-5 text-center text-sm'
      >
        <p>Free shipping on your 1st order with The Sknly Club</p>
      </div>
    </div>
  )
}

export default HomePageHeroSection