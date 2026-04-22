import React from 'react'
import RoundButton from '../../common-components/RoundButton'

const FooterPage = () => {
  return (
    <>
      <div className='bg-[#272727] h-137.5 rounded-t-3xl pt-8'>
        {/* First connect slice */}
        <div className=' mx-17 flex justify-between'>
          <div>
            <h1 className="font-abhaya text-5xl text-white">
              Lets Connect there
            </h1>
          </div>
          <div>
            <button className='h-12 w-30.5 bg-[#FD853A] text-white rounded-4xl font-medium '>Hire Me </button>
          </div>
        </div>
        <hr className='mx-17 mt-6.25 text-[#475467]' />
        <div className=" mt-10 mx-[30px] mb-10 flex gap-6 p-6">
          {/* Left Section */}
          <div className=" p-4 w-[300px] text-white">
            <ul className="space-y-3">
              <li>Image</li>
              <li className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </li>
              <div className='flex gap-2'>
                <li>Youtube</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </div>
            </ul>
          </div>
          {/* Navigation */}
          <div className=" p-4 w-48 text-white">
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
          <div className=" p-4 w-48 text-white">
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
          <div className=" p-4 w-[250px] text-orange-400">
            <span className="block mb-3 font-semibold">
              Get the latest information
            </span>
            <div className="flex rounded-4xl">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 text-white bg-yellow-100 rounded-tl-2xl rounded-bl-2xl"
              />
              <button className="bg-black px-3 rounded-tr-2xl rounded-br-2xl">→</button>
            </div>
          </div>
        </div>
        <hr className='mx-17 mt-6.25 text-[#475467]' />
        <div className='  mt-10 mx-17  mb-3 flex justify-between'>
          <div >
            <span className='text-[#FFFFFF]'>Copyright© 2023 Fawziuiux. All Rights Reserved.</span>
          </div>
          <div>
            <span className='text-[#FFFFFF] font-medium'>User Terms & Conditions | Privacy Policy</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterPage