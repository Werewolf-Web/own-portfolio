import React, { useState } from 'react'

const ProjectPage = () => {

    const [activeFilter, setActiveFilter] = useState('All')

    const filters = ['All', 'UI/UX', 'Web Dev', 'Branding']

    const projects = [
        {
            title: 'E-Commerce App',
            category: 'UI/UX',
            desc: 'A modern e-commerce mobile app design with seamless user experience and intuitive navigation.',
            tags: ['Figma', 'Prototyping', 'UX Research'],
            color: 'bg-orange-50',
            iconBg: 'bg-orange-400',
            emoji: '🛒',
            link: '#',
        },
        {
            title: 'Portfolio Website',
            category: 'Web Dev',
            desc: 'A fully responsive portfolio website built with React and Tailwind CSS with smooth animations.',
            tags: ['React', 'Tailwind', 'Vite'],
            color: 'bg-blue-50',
            iconBg: 'bg-blue-500',
            emoji: '💼',
            link: '#',
        },
        {
            title: 'Food Delivery UI',
            category: 'UI/UX',
            desc: 'End-to-end UI design for a food delivery app focused on speed, clarity and delightful micro-interactions.',
            tags: ['Figma', 'UI Design', 'Mobile'],
            color: 'bg-yellow-50',
            iconBg: 'bg-yellow-400',
            emoji: '🍔',
            link: '#',
        },
        {
            title: 'Real Estate Platform',
            category: 'Web Dev',
            desc: 'A feature-rich real estate web platform with advanced filtering, map integration and property listings.',
            tags: ['React', 'REST API', 'Tailwind'],
            color: 'bg-teal-50',
            iconBg: 'bg-teal-500',
            emoji: '🏠',
            link: '#',
        },
        {
            title: 'Brand Identity - Luxe',
            category: 'Branding',
            desc: 'Complete brand identity design for a luxury fashion label including logo, palette and brand guidelines.',
            tags: ['Logo', 'Brand Guide', 'Typography'],
            color: 'bg-purple-50',
            iconBg: 'bg-purple-500',
            emoji: '✨',
            link: '#',
        },
        {
            title: 'Finance Dashboard',
            category: 'UI/UX',
            desc: 'A clean and data-rich finance dashboard UI with charts, analytics and real-time data visualization.',
            tags: ['Figma', 'Dashboard', 'Data Viz'],
            color: 'bg-green-50',
            iconBg: 'bg-green-500',
            emoji: '📊',
            link: '#',
        },
        {
            title: 'Travel App',
            category: 'UI/UX',
            desc: 'A travel booking app design with immersive visuals, smart itinerary planning and booking flow.',
            tags: ['Figma', 'Mobile', 'UX'],
            color: 'bg-cyan-50',
            iconBg: 'bg-cyan-500',
            emoji: '✈️',
            link: '#',
        },
        {
            title: 'Startup Branding',
            category: 'Branding',
            desc: 'Full branding package for a tech startup — logo, color system, typography and social media kit.',
            tags: ['Logo', 'Social Kit', 'Brand'],
            color: 'bg-pink-50',
            iconBg: 'bg-pink-500',
            emoji: '🚀',
            link: '#',
        },
        {
            title: 'Blog Platform',
            category: 'Web Dev',
            desc: 'A minimal and elegant blog platform built with React featuring markdown support and dark mode.',
            tags: ['React', 'Markdown', 'Dark Mode'],
            color: 'bg-gray-50',
            iconBg: 'bg-gray-700',
            emoji: '📝',
            link: '#',
        },
    ]

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <>
        <div className='bg-white min-h-screen'>

            {/* Hero */}
            <div className='bg-[#f9f9f9] py-16 px-4 text-center'>
                <span className='text-orange-400 font-semibold text-sm tracking-widest uppercase'>
                    My Work
                </span>
                <h1 className='font-abhaya text-4xl sm:text-5xl lg:text-6xl font-bold mt-2'>
                    <span className='text-black'>My </span>
                    <span className='text-orange-400'>Projects</span>
                </h1>
                <p className='text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto'>
                    A collection of my recent work across UI/UX design, web development and branding.
                </p>

                {/* Filters */}
                <div className='flex flex-wrap justify-center gap-3 mt-8'>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-medium text-sm transition ${
                                activeFilter === filter
                                    ? 'bg-orange-400 text-white'
                                    : 'bg-white border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-400'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className='py-16 px-4'>
                <div className='max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filtered.map((project, index) => (
                        <div key={index} className={`${project.color} rounded-3xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition`}>

                            {/* Top */}
                            <div className='flex items-center justify-between'>
                                <div className={`${project.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl`}>
                                    {project.emoji}
                                </div>
                                <span className='text-xs font-semibold text-orange-400 bg-white px-3 py-1 rounded-full'>
                                    {project.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className='text-xl font-bold'>{project.title}</h3>
                                <p className='text-gray-500 text-sm leading-relaxed mt-1'>{project.desc}</p>
                            </div>

                            {/* Tags */}
                            <div className='flex flex-wrap gap-2'>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className='text-xs bg-white text-gray-600 px-3 py-1 rounded-full'>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            
                     <a           href={project.link}
                                className='mt-auto inline-flex items-center gap-1 text-sm font-semibold text-orange-400 hover:text-orange-500 transition'
                            >
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Bar */}
            <div className='bg-[#272727] py-12 px-4'>
                <div className='max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center'>
                    {[
                        { value: '20+', label: 'Projects Completed' },
                        { value: '15+', label: 'Happy Clients' },
                        { value: '3+',  label: 'Years Experience' },
                        { value: '5★',  label: 'Average Rating' },
                    ].map((stat, index) => (
                        <div key={index}>
                            <p className='text-orange-400 text-4xl font-bold'>{stat.value}</p>
                            <p className='text-gray-400 text-sm mt-1'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className='py-16 px-4 text-center'>
                <h2 className='font-abhaya text-3xl sm:text-4xl font-bold'>
                    Have a project in <span className='text-orange-400'>mind?</span>
                </h2>
                <p className='text-gray-500 mt-3 text-sm max-w-md mx-auto'>
                    Let's collaborate and build something great together.
                </p>
                
             <a       href='/contact-me'
                    className='inline-block mt-6 bg-orange-400 hover:bg-orange-500 transition text-white font-semibold px-8 py-3 rounded-full'
                >
                    Let's Talk →
                </a>
            </div>

        </div>
        </>
    )
}

export default ProjectPage