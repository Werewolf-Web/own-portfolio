import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { label: 'Home',    path: '/' },
        { label: 'About',   path: '/about' },
        { label: 'Service', path: '/service' },
        { label: 'Resume',  path: '/resume' },
        { label: 'Project', path: '/project' },
        { label: 'Contact', path: '/contact-me' },
    ]

    const isActive = (path) => location.pathname === path

    const NavLink = ({ item }) => (
        <Link
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`px-4 lg:px-5 py-2 rounded-full font-medium transition whitespace-nowrap ${
                isActive(item.path)
                    ? 'bg-orange-400 text-white'
                    : 'text-white hover:text-orange-400'
            }`}
        >
            {item.label}
        </Link>
    )

    return (
        <>
            {/* Desktop Navbar */}
            <div className='hidden md:flex bg-black h-[65px] mx-6 lg:mx-[190px] mt-[20px] rounded-[45px] items-center px-4 lg:px-6'>
                <ul className='text-white text-[14px] lg:text-[16px] font-[600] flex items-center gap-4 lg:gap-10 w-full justify-center'>

                    {navItems.slice(0, 3).map((item) => (
                        <li key={item.label} className='shrink-0'>
                            <NavLink item={item} />
                        </li>
                    ))}

                    {/* Logo */}
                    <li className='flex items-center gap-2 shrink-0'>
                    <Link to='/' className='flex items-center gap-2'>
    <div className='bg-orange-400 w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0'>
        SC
    </div>
    <span className='text-white font-semibold text-base lg:text-lg tracking-wide whitespace-nowrap'>
        SUJAL CRAFT
    </span>
</Link>
                    </li>

                    {navItems.slice(3).map((item) => (
                        <li key={item.label} className='shrink-0'>
                            <NavLink item={item} />
                        </li>
                    ))}

                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className='md:hidden bg-black mx-4 mt-4 rounded-[30px] px-5 py-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-orange-400 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0'>
                            SC
                        </div>
                        <span className='text-white font-semibold text-base tracking-wide whitespace-nowrap'>
                            SUJAL CRAFT
                        </span>
                    </div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='text-white flex flex-col gap-1.5 ml-4'
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {menuOpen && (
                    <ul className='mt-4 flex flex-col gap-2 pb-3'>
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block w-full text-left px-4 py-2 rounded-full font-medium transition ${
                                        isActive(item.path)
                                            ? 'bg-orange-400 text-white'
                                            : 'text-white hover:text-orange-400'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default Navbar