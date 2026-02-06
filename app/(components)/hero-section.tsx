import TicketGrapicsImage from "./assets/ticket-design-for-hero-section.png";

const HomePageHeroSection = () => {
  return (
    <div>
      <div
        className='bg-[#89614a] min-h-screen pt-20 relative'
      >
        {/* Block graphics */}
        <div
          className='absolute top-0 left-0 w-full h-full flex gap-16 z-0'
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

        {/* Section Content */}
        <div
          className="z-10 relative h-[90dvh] flex justify-center items-center"
        >
          <div
            className='z-10 relative min-h-120 bg-contain w-full max-w-220 mx-auto'
            style={{
              backgroundImage: `url(${TicketGrapicsImage.src})`,
            }}
          >
            
          </div>
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