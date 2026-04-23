import React from 'react'
import { MdSchool, MdWork } from 'react-icons/md'
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript } from 'react-icons/si'

const ResumePage = () => {

    const education = [
        {
            degree: 'Bachelor of Design',
            school: 'Mumbai University',
            year: '2012 - 2016',
            desc: 'Specialized in Visual Communication and Interaction Design.'
        },
        {
            degree: 'Higher Secondary Certificate',
            school: 'Delhi Public School',
            year: '2010 - 2012',
            desc: 'Science stream with focus on Mathematics and Computer Science.'
        },
    ]

    const experience = [
        {
            role: 'Lead UX Designer',
            company: 'Cinetstox, Mumbai',
            year: 'Sep 2023 - Present',
            desc: 'Leading the UX team to design end-to-end digital experiences for web and mobile products.'
        },
        {
            role: 'UI/UX Designer',
            company: 'Sugee Pvt Limited, Mumbai',
            year: 'Sep 2020 - July 2023',
            desc: 'Designed user interfaces for real estate platforms, improving user engagement by 40%.'
        },
        {
            role: 'Experience Designer',
            company: 'Cognizant, Mumbai',
            year: 'Sep 2016 - July 2020',
            desc: 'Worked on enterprise-level design systems and collaborated with cross-functional teams.'
        },
    ]

    const skills = [
        { name: 'HTML5',       icon: <FaHtml5 />,       level: 95, color: 'text-orange-500' },
        { name: 'CSS3',        icon: <FaCss3Alt />,      level: 90, color: 'text-blue-500' },
        { name: 'JavaScript',  icon: <SiJavascript />,   level: 80, color: 'text-yellow-400' },
        { name: 'React',       icon: <FaReact />,        level: 85, color: 'text-cyan-400' },
        { name: 'Tailwind',    icon: <SiTailwindcss />,  level: 88, color: 'text-teal-400' },
        { name: 'Figma',       icon: <FaFigma />,        level: 92, color: 'text-purple-500' },
    ]
  return (
    <>
       <div className='bg-white min-h-screen px-4 py-16'>

            {/* Heading */}
            <div className='text-center mb-12'>
                <h1 className='font-abhaya text-4xl sm:text-5xl lg:text-6xl font-bold'>
                    <span className='text-black'>My </span>
                    <span className='text-orange-400'>Resume</span>
                </h1>
                <p className='text-gray-500 mt-3 text-sm sm:text-base max-w-xl mx-auto'>
                    A summary of my education, experience, and skills.
                </p>

                {/* Download Button */}
                
                  <a  href='/resume.pdf'
                    download
                    className='inline-block mt-6 bg-orange-400 hover:bg-orange-500 transition text-white font-semibold px-8 py-3 rounded-full'
                >
                    Download CV ↓
                </a>
            </div>

            <div className='max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-10'>

                {/* Left Column */}
                <div className='flex-1 flex flex-col gap-10'>

                    {/* Education */}
                    <div>
                        <div className='flex items-center gap-2 mb-6'>
                            <div className='bg-orange-400 p-2 rounded-full text-white'>
                                <MdSchool size={20} />
                            </div>
                            <h2 className='text-2xl font-bold'>Education</h2>
                        </div>

                        <div className='flex flex-col gap-6'>
                            {education.map((edu, index) => (
                                <div key={index} className='flex gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <div className='w-3 h-3 bg-orange-400 rounded-full mt-1.5 shrink-0'></div>
                                        {index !== education.length - 1 && (
                                            <div className='w-[2px] bg-gray-200 flex-1 mt-1'></div>
                                        )}
                                    </div>
                                    <div className='pb-4'>
                                        <span className='text-xs text-orange-400 font-semibold bg-orange-50 px-3 py-1 rounded-full'>
                                            {edu.year}
                                        </span>
                                        <h3 className='text-lg font-semibold mt-2'>{edu.degree}</h3>
                                        <p className='text-gray-500 text-sm'>{edu.school}</p>
                                        <p className='text-gray-400 text-sm mt-1'>{edu.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <div className='flex items-center gap-2 mb-6'>
                            <div className='bg-orange-400 p-2 rounded-full text-white'>
                                <MdWork size={20} />
                            </div>
                            <h2 className='text-2xl font-bold'>Experience</h2>
                        </div>

                        <div className='flex flex-col gap-6'>
                            {experience.map((exp, index) => (
                                <div key={index} className='flex gap-4'>
                                    <div className='flex flex-col items-center'>
                                        <div className='w-3 h-3 bg-orange-400 rounded-full mt-1.5 shrink-0'></div>
                                        {index !== experience.length - 1 && (
                                            <div className='w-[2px] bg-gray-200 flex-1 mt-1'></div>
                                        )}
                                    </div>
                                    <div className='pb-4'>
                                        <span className='text-xs text-orange-400 font-semibold bg-orange-50 px-3 py-1 rounded-full'>
                                            {exp.year}
                                        </span>
                                        <h3 className='text-lg font-semibold mt-2'>{exp.role}</h3>
                                        <p className='text-gray-500 text-sm'>{exp.company}</p>
                                        <p className='text-gray-400 text-sm mt-1'>{exp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column - Skills */}
                <div className='lg:w-[380px] shrink-0'>
                    <div className='bg-[#272727] rounded-3xl p-8 sticky top-8'>
                        <h2 className='text-2xl font-bold text-white mb-6'>Skills</h2>

                        <div className='flex flex-col gap-5'>
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className='flex items-center justify-between mb-1'>
                                        <div className='flex items-center gap-2 text-white'>
                                            <span className={`text-xl ${skill.color}`}>{skill.icon}</span>
                                            <span className='text-sm font-medium'>{skill.name}</span>
                                        </div>
                                        <span className='text-orange-400 text-sm font-semibold'>{skill.level}%</span>
                                    </div>
                                    <div className='w-full bg-gray-700 rounded-full h-2'>
                                        <div
                                            className='bg-orange-400 h-2 rounded-full transition-all duration-500'
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-2 gap-4 mt-8'>
                            {[
                                { value: '4+',   label: 'Years Experience' },
                                { value: '20+',  label: 'Projects Done' },
                                { value: '15+',  label: 'Happy Clients' },
                                { value: '3',    label: 'Companies' },
                            ].map((stat, index) => (
                                <div key={index} className='bg-[#1a1a1a] rounded-2xl p-4 text-center'>
                                    <p className='text-orange-400 text-2xl font-bold'>{stat.value}</p>
                                    <p className='text-gray-400 text-xs mt-1'>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ResumePage