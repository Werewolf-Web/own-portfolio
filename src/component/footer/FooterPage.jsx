import React from 'react'

const FooterPage = () => {
  return (
    <>
      <div className='bg-[#272727] min-h-[550px] rounded-t-3xl pt-8'>

        {/* Top Section */}
        <div className='mx-4 sm:mx-[30px] flex flex-col sm:flex-row justify-between items-center gap-4'>
          <h1 className="font-abhaya text-3xl sm:text-4xl md:text-5xl text-white text-center sm:text-left">
            Lets Connect there
          </h1>

          <button className='h-12 px-6 bg-[#FD853A] text-white rounded-full font-medium'>
            Hire Me
          </button>
        </div>

        <hr className='mx-4 sm:mx-[30px] mt-6 border-[#475467]' />

        {/* Middle Section */}
        <div className="mt-10 mx-4 sm:mx-[30px] mb-10 flex flex-col sm:flex-row flex-wrap gap-[60px] p-4">

          {/* Left */}
          <div className="p-4 text-white flex-1 min-w-[200px] sm:min-w-[250px]">
            <ul className="space-y-3">
              <li>Image</li>
              <li className="text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
              </li>
              <li className='flex gap-3'>
                <span>Youtube</span>
                <span>Instagram</span>
                <span>LinkedIn</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="p-4 text-white min-w-[120px] sm:min-w-[150px]">
            <span className="text-orange-400 font-bold block mb-4">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Resume</li>
              <li>Project</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="p-4 text-white min-w-[120px] sm:min-w-[150px]">
            <span className="text-orange-400 font-bold block mb-4">
              Contact
            </span>
            <ul className="space-y-2 text-sm">
              <li>+20 11 43 63 73 41</li>
              <li>fawzisayed1209@gmail.com</li>
              <li>fawziuiux.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="p-4 text-orange-400 flex-1 min-w-[200px] sm:min-w-[250px]">
            <span className="block mb-3 font-semibold">
              Get the latest information
            </span>

            <div className="flex">
              <input
                type="email"
                placeholder="Email"
              className="flex-1 p-2 text-black bg-yellow-100 rounded-l-2xl"
              />
              <button className="bg-black px-4 text-white rounded-r-2xl">
                send 
              </button>
            </div>
          </div>

        </div>

        <hr className='mx-4 sm:mx-[30px] mt-6 border-[#475467]' />

        {/* Bottom */}
        <div className='mt-6 mx-4 sm:mx-[30px] pb-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left'>
          <span className='text-white text-sm'>
            Copyright© 2023 Fawziuiux. All Rights Reserved.
          </span>

          <span className='text-white font-medium text-sm'>
            User Terms & Conditions | Privacy Policy
          </span>
        </div>

      </div>
    </>
  )
}

export default FooterPage