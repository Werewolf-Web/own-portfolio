import React from 'react'
import { PiShootingStarFill } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import { MdEmail, MdVerifiedUser } from "react-icons/md";

const ProjectIdea = () => {
    return (
        <>
            <div className="px-4 my-20">
                <h1 className='font-abhaya text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center pb-9'>
                    Have an Awsome Project <br /> Idea?
                    <span className='text-orange-400'>{' '}Let's Discuss</span>
                </h1>

                <div className="max-w-[600px] mx-auto">
                    <div className="flex items-center bg-amber-100 rounded-full px-4 py-2 gap-3">
                        <div className="bg-orange-400 p-2 rounded-full text-white shrink-0">
                            <MdEmail size={20} />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            className="flex-1 bg-transparent outline-none text-gray-500 text-sm sm:text-base min-w-0"
                        />
                        <button className="bg-orange-400 text-white px-4 sm:px-6 py-2 rounded-full font-medium shrink-0 text-sm sm:text-base">
                            Send
                        </button>
                    </div>

                    <div className="flex justify-between mt-4 items-center flex-wrap gap-y-2">
                        <span className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium">
                            <PiShootingStarFill className='text-[18px] shrink-0' /> 4.9/5 Average Ratings
                        </span>
                        <span className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium">
                            <FaMedal className='text-[18px] shrink-0' /> 25+ Winning Awards
                        </span>
                        <span className="flex items-center gap-1 text-[13px] sm:text-[14px] font-medium">
                            <MdVerifiedUser className='text-[18px] shrink-0' /> Certified Product Designer
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectIdea