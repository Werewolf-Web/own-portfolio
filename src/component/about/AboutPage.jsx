import React from 'react'
import { MdDownload } from 'react-icons/md'
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiFramer } from 'react-icons/si'
import { PiShootingStarFill } from 'react-icons/pi'
import { FaMedal } from 'react-icons/fa'
import { MdVerifiedUser } from 'react-icons/md'

const AboutPage = () => {

    const stats = [
        { value: '4+',  label: 'Years Experience' },
        { value: '20+', label: 'Projects Done' },
        { value: '15+', label: 'Happy Clients' },
        { value: '3',   label: 'Companies' },
    ]

    const skills = [
        { name: 'HTML5',      icon: <FaHtml5 />,       color: 'text-orange-500', bg: 'bg-orange-50' },
        { name: 'CSS3',       icon: <FaCss3Alt />,      color: 'text-blue-500',   bg: 'bg-blue-50' },
        { name: 'JavaScript', icon: <SiJavascript />,   color: 'text-yellow-400', bg: 'bg-yellow-50' },
        { name: 'React',      icon: <FaReact />,        color: 'text-cyan-400',   bg: 'bg-cyan-50' },
        { name: 'Tailwind',   icon: <SiTailwindcss />,  color: 'text-teal-400',   bg: 'bg-teal-50' },
        { name: 'Figma',      icon: <FaFigma />,        color: 'text-purple-500', bg: 'bg-purple-50' },
    ]

    const services = [
        {
            title: 'UI/UX Design',
            desc: 'Creating intuitive and visually appealing user interfaces with a focus on user experience and accessibility.',
            icon: '🎨',
        },
        {
            title: 'Web Development',
            desc: 'Building responsive and performant web applications using modern technologies like React and Tailwind CSS.',
            icon: '💻',
        },
        {
            title: 'Brand Identity',
            desc: 'Crafting unique brand identities that communicate your vision and connect with your target audience.',
            icon: '✨',
        },
        {
            title: 'Prototyping',
            desc: 'Turning ideas into interactive prototypes for user testing and stakeholder presentations.',
            icon: '🧩',
        },
    ]

    return (
        <>
        <div className='bg-white min-h-screen'>

            {/* Hero Section */}
            <div className='bg-[#f9f9f9] py-16 px-4'>
                <div className='max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-12'>

                    {/* Left - Text */}
                    <div className='flex-1'>
                        <span className='text-orange-400 font-semibold text-sm tracking-widest uppercase'>
                            About Me
                        </span>
                        <h1 className='font-abhaya text-4xl sm:text-5xl font-bold text-black mt-2 leading-tight'>
                            I'm a Creative <br />
                            <span className='text-orange-400'>UI/UX Designer</span> &<br />
                            Developer
                        </h1>
                        <p className='text-gray-500 mt-4 text-sm sm:text-base leading-relaxed max-w-lg'>
                            With over 4 years of experience designing and building digital products,
                            I specialize in creating beautiful, functional, and user-centered experiences.
                            I believe great design is not just about how things look — it's about how they work.
                        </p>

                        <div className='flex flex-wrap gap-3 mt-6'>
                           <a 
                                href='/resume.pdf'
                                download
                                className='flex items-center gap-2 bg-orange-400 hover:bg-orange-500 transition text-white font-semibold px-6 py-3 rounded-full'
                            >
                                <MdDownload size={18} /> Download CV
                            </a>
                            
                             <a   href='/contact-me'
                                className='flex items-center gap-2 border-2 border-orange-400 text-orange-400 hover:bg-orange-50 transition font-semibold px-6 py-3 rounded-full'
                            >
                                Hire Me
                            </a>
                        </div>

                        {/* Badges */}
                        <div className='flex flex-wrap gap-4 mt-8'>
                            <span className='flex items-center gap-1 text-sm font-medium'>
                                <PiShootingStarFill className='text-orange-400' /> 4.9/5 Average Ratings
                            </span>
                            <span className='flex items-center gap-1 text-sm font-medium'>
                                <FaMedal className='text-orange-400' /> 25+ Winning Awards
                            </span>
                            <span className='flex items-center gap-1 text-sm font-medium'>
                                <MdVerifiedUser className='text-orange-400' /> Certified Product Designer
                            </span>
                        </div>
                    </div>

                    {/* Right - Image Placeholder */}
                    <div className='shrink-0 w-[280px] sm:w-[320px] lg:w-[380px]'>
                        <div className='relative'>
                            <div className='w-full aspect-square bg-orange-100 rounded-3xl flex items-center justify-center text-orange-300 text-6xl font-bold'>
                                SC
                            </div>
                            {/* Floating badge */}
                            <div className='absolute -bottom-4 -left-4 bg-white shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2'>
                                <div className='bg-orange-400 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0'>
                                    SC
                                </div>
                                <div>
                                    <p className='text-xs font-bold leading-none'>Sujal Craft</p>
                                    <p className='text-xs text-gray-400'>Lead UX Designer</p>
                                </div>
                            </div>
                            {/* Experience badge */}
                            <div className='absolute -top-4 -right-4 bg-orange-400 text-white rounded-2xl px-4 py-3 text-center shadow-lg'>
                                <p className='text-2xl font-bold leading-none'>4+</p>
                                <p className='text-xs mt-0.5'>Years Exp.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Stats */}
            <div className='bg-[#272727] py-10 px-4'>
                <div className='max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6'>
                    {stats.map((stat, index) => (
                        <div key={index} className='text-center'>
                            <p className='text-orange-400 text-4xl font-bold'>{stat.value}</p>
                            <p className='text-gray-400 text-sm mt-1'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className='py-16 px-4'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className='text-center mb-10'>
                        <h2 className='font-abhaya text-3xl sm:text-4xl font-bold'>
                            My <span className='text-orange-400'>Skills</span>
                        </h2>
                        <p className='text-gray-500 mt-2 text-sm max-w-md mx-auto'>
                            Technologies and tools I work with on a daily basis.
                        </p>
                    </div>

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
                        {skills.map((skill, index) => (
                            <div key={index} className={`${skill.bg} rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition`}>
                                <span className={`text-4xl ${skill.color}`}>{skill.icon}</span>
                                <p className='text-sm font-semibold text-gray-700'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className='bg-[#f9f9f9] py-16 px-4'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className='text-center mb-10'>
                        <h2 className='font-abhaya text-3xl sm:text-4xl font-bold'>
                            What I <span className='text-orange-400'>Do</span>
                        </h2>
                        <p className='text-gray-500 mt-2 text-sm max-w-md mx-auto'>
                            Services I offer to help bring your ideas to life.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {services.map((service, index) => (
                            <div key={index} className='bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition'>
                                <div className='text-4xl mb-4'>{service.icon}</div>
                                <h3 className='text-lg font-bold mb-2'>{service.title}</h3>
                                <p className='text-gray-500 text-sm leading-relaxed'>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Personal Info */}
            <div className='py-16 px-4'>
                <div className='max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-10 items-center'>

                    <div className='flex-1'>
                        <h2 className='font-abhaya text-3xl sm:text-4xl font-bold mb-6'>
                            Personal <span className='text-orange-400'>Info</span>
                        </h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {[
                                { label: 'Name',        value: 'Sujal Craft' },
                                { label: 'Email',       value: 'sujal@sujalcraft.com' },
                                { label: 'Phone',       value: '+91 98765 43210' },
                                { label: 'Location',    value: 'Mumbai, India' },
                                { label: 'Availability',value: 'Freelance / Full-time' },
                                { label: 'Languages',   value: 'English, Hindi' },
                            ].map((info, index) => (
                                <div key={index} className='bg-gray-50 rounded-2xl px-5 py-4'>
                                    <p className='text-xs text-orange-400 font-semibold uppercase tracking-wide'>{info.label}</p>
                                    <p className='text-sm font-medium text-gray-800 mt-0.5'>{info.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex-1 bg-[#272727] rounded-3xl p-8 text-white'>
                        <h3 className='text-xl font-bold mb-4'>A little more about me</h3>
                        <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                            I'm passionate about solving real problems through design and technology.
                            When I'm not designing, you'll find me exploring new design trends,
                            contributing to open source, or mentoring aspiring designers.
                        </p>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            I believe in continuous learning and always strive to stay up-to-date
                            with the latest tools and technologies in the industry.
                        </p>
                        <div className='flex gap-3 mt-6'>
                            {['Youtube', 'Instagram', 'LinkedIn'].map((s) => (
                                <button key={s} className='bg-orange-400 hover:bg-orange-500 transition text-white text-xs px-4 py-2 rounded-full font-medium'>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


        </div>
</>
    )
}

export default AboutPage