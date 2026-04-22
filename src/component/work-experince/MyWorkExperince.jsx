import React from 'react'

const MyWorkExperince = () => {
    return (
        <>
            <div className='bg-white min-h-[650px] w-full'>
                <div>
                    <h1 className='font-abhaya text-orange-400 text-6xl text-center p-13 pb-9 text-wrap'> <span className='text-black'>My</span> Work Experince</h1>
                </div>
                <div className='flex min-h-[350px] max-w-[1200px] m-auto justify-evenly'>
                    <div className='flex flex-col justify-between '>
                        <div>
                            <h3 className='text-2xl font-medium'>Cognizant, Mumbai</h3>
                            <p className='font-normal opacity-60'>Sep 2016- July 2020</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-medium'>Sugee Pvt limited, Mumbai</h3>
                            <p className='font-normal opacity-60'>Sep 2020- July 2023</p>
                        </div>
                        <div>
                            <h3 className='text-2xl font-medium'>Cinetstox, Mumbai</h3>
                            <p className='font-normal opacity-60'>Sep 2023</p>
                        </div>
                    </div>
                      <div className="flex flex-col items-center relative">

      {/* vertical line */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-gray-400"></div>

      {/* dots */}
      <div className="w-4 h-4 bg-orange-500 rounded-full z-10 mb-34 border-4 border-white"></div>
      <div className="w-4 h-4 bg-gray-800 rounded-full z-10 mb-34 border-4 border-white"></div>
      <div className="w-4 h-4 bg-orange-500 rounded-full z-10 border-4 border-white"></div>

    </div>
                    <div className="flex flex-col justify-between w-[528px]">
                        <div>
                            <h3  className='text-2xl font-medium'>Experince Designer</h3>
                            <span  className='font-normal opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</span>
                        </div>
                        <div>
                            <h3  className='text-2xl font-medium'>UI/UX Designer</h3>
                            <span  className='font-normal opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</span>
                        </div>
                        <div>
                            <h3  className='text-2xl font-medium'>Lead UX Designer</h3>
                  <span  className='font-normal opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyWorkExperince