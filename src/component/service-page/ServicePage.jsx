import React from 'react'
import { MdDesignServices, MdCode, MdBrush, MdDevices, MdSpeed, MdSupportAgent } from 'react-icons/md'
import { FaFigma, FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const ServicePage = () => {

    const services = [
        {
            icon: <MdDesignServices size={32} />,
            title: 'UI/UX Design',
            desc: 'Creating intuitive and visually stunning user interfaces with a deep focus on user experience, accessibility, and modern design principles.',
            features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
            color: 'bg-orange-50',
            iconBg: 'bg-orange-400',
        },
        {
            icon: <MdCode size={32} />,
            title: 'Web Development',
            desc: 'Building fast, responsive, and scalable web applications using the latest technologies and best development practices.',
            features: ['React Development', 'Tailwind CSS', 'REST APIs', 'Performance Optimization'],
            color: 'bg-blue-50',
            iconBg: 'bg-blue-500',
        },
        {
            icon: <MdBrush size={32} />,
            title: 'Brand Identity',
            desc: 'Crafting unique and memorable brand identities that communicate your vision and connect deeply with your target audience.',
            features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
            color: 'bg-purple-50',
            iconBg: 'bg-purple-500',
        },
        {
            icon: <MdDevices size={32} />,
            title: 'Responsive Design',
            desc: 'Ensuring your digital products look and work beautifully across all devices — from mobile phones to large desktop screens.',
            features: ['Mobile First', 'Cross Browser', 'Pixel Perfect', 'Adaptive Layouts'],
            color: 'bg-teal-50',
            iconBg: 'bg-teal-500',
        },
        {
            icon: <MdSpeed size={32} />,
            title: 'Performance Optimization',
            desc: 'Analyzing and optimizing your existing web products for speed, accessibility, and overall performance improvements.',
            features: ['Core Web Vitals', 'SEO Basics', 'Code Splitting', 'Image Optimization'],
            color: 'bg-yellow-50',
            iconBg: 'bg-yellow-400',
        },
        {
            icon: <MdSupportAgent size={32} />,
            title: 'Design Consulting',
            desc: 'Providing expert design guidance and consultation to help your team make better product decisions and design strategies.',
            features: ['Design Audit', 'Design System', 'Team Mentoring', 'Strategy Planning'],
            color: 'bg-pink-50',
            iconBg: 'bg-pink-500',
        },
    ]

    const tools = [
        { name: 'Figma',    icon: <FaFigma />,       color: 'text-purple-500' },
        { name: 'React',    icon: <FaReact />,        color: 'text-cyan-400' },
        { name: 'Tailwind', icon: <SiTailwindcss />,  color: 'text-teal-400' },
    ]

    const process = [
        { step: '01', title: 'Discovery',   desc: 'Understanding your goals, target audience, and project requirements through in-depth consultation.' },
        { step: '02', title: 'Research',    desc: 'Analyzing competitors, user behavior, and market trends to inform design decisions.' },
        { step: '03', title: 'Design',      desc: 'Creating wireframes, mockups, and prototypes that bring your vision to life.' },
        { step: '04', title: 'Develop',     desc: 'Translating designs into clean, performant, and maintainable code.' },
        { step: '05', title: 'Test',        desc: 'Rigorous testing across devices and browsers to ensure a flawless experience.' },
        { step: '06', title: 'Launch',      desc: 'Deploying your product and providing ongoing support to ensure long-term success.' },
    ]

    const plans = [
        {
            name: 'Basic',
            price: '$299',
            desc: 'Perfect for small projects and startups.',
            features: ['1 Page Design', 'UI Design Only', '2 Revisions', '5 Day Delivery', 'Figma File'],
            highlight: false,
        },
        {
            name: 'Pro',
            price: '$799',
            desc: 'Best for growing businesses and teams.',
            features: ['Up to 5 Pages', 'UI/UX Design', 'Development', 'Unlimited Revisions', '15 Day Delivery', 'Source Code'],
            highlight: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            desc: 'For large scale projects and organizations.',
            features: ['Unlimited Pages', 'Full Design System', 'Full Development', 'Priority Support', 'Custom Timeline', 'Dedicated Manager'],
            highlight: false,
        },
    ]

    return (
            <>
        <div className='bg-white min-h-screen'>

            {/* Hero */}
            <div className='bg-[#f9f9f9] py-16 px-4 text-center'>
                <span className='text-orange-400 font-semibold text-sm tracking-widest uppercase'>
                    What I Offer
                </span>
                <h1 className='font-abhaya text-4xl sm:text-5xl lg:text-6xl font-bold mt-2'>
                    <span className='text-black'>My </span>
                    <span className='text-orange-400'>Services</span>
                </h1>
                <p className='text-gray-500 mt-4 text-sm sm:text-base max-w-xl mx-auto'>
                    I offer a wide range of design and development services to help bring your ideas to life with quality and precision.
                </p>
            </div>

            {/* Services Grid */}
            <div className='py-16 px-4'>
                <div className='max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map((service, index) => (
                        <div key={index} className={`${service.color} rounded-3xl p-6 hover:scale-[1.02] transition`}>
                            <div className={`${service.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4`}>
                                {service.icon}
                            </div>
                            <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                            <p className='text-gray-500 text-sm leading-relaxed mb-4'>{service.desc}</p>
                            <ul className='flex flex-col gap-1'>
                                {service.features.map((f, i) => (
                                    <li key={i} className='flex items-center gap-2 text-sm text-gray-600'>
                                        <span className='w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0'></span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools */}
            <div className='bg-[#272727] py-12 px-4'>
                <div className='max-w-[1100px] mx-auto'>
                    <h2 className='text-white text-center text-2xl sm:text-3xl font-bold mb-8'>
                        Tools I <span className='text-orange-400'>Use</span>
                    </h2>
                    <div className='flex flex-wrap justify-center gap-6'>
                        {tools.map((tool, index) => (
                            <div key={index} className='bg-[#1a1a1a] rounded-2xl px-8 py-5 flex flex-col items-center gap-2'>
                                <span className={`text-5xl ${tool.color}`}>{tool.icon}</span>
                                <p className='text-white text-sm font-medium'>{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className='py-16 px-4'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='font-abhaya text-3xl sm:text-4xl font-bold'>
                            My <span className='text-orange-400'>Process</span>
                        </h2>
                        <p className='text-gray-500 mt-2 text-sm max-w-md mx-auto'>
                            A streamlined process to ensure every project is delivered with quality and on time.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {process.map((p, index) => (
                            <div key={index} className='flex gap-4 bg-gray-50 rounded-3xl p-6'>
                                <span className='text-4xl font-bold text-orange-100 shrink-0'>{p.step}</span>
                                <div>
                                    <h3 className='text-lg font-bold mb-1'>{p.title}</h3>
                                    <p className='text-gray-500 text-sm leading-relaxed'>{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pricing */}
            <div className='bg-[#f9f9f9] py-16 px-4'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='font-abhaya text-3xl sm:text-4xl font-bold'>
                            Pricing <span className='text-orange-400'>Plans</span>
                        </h2>
                        <p className='text-gray-500 mt-2 text-sm max-w-md mx-auto'>
                            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                        {plans.map((plan, index) => (
                            <div key={index} className={`rounded-3xl p-8 flex flex-col gap-4 ${plan.highlight ? 'bg-[#272727] text-white scale-105 shadow-xl' : 'bg-white'}`}>
                                <div>
                                    <p className={`text-sm font-semibold uppercase tracking-wide ${plan.highlight ? 'text-orange-400' : 'text-orange-400'}`}>
                                        {plan.name}
                                    </p>
                                    <p className={`text-4xl font-bold mt-1 ${plan.highlight ? 'text-white' : 'text-black'}`}>
                                        {plan.price}
                                    </p>
                                    <p className={`text-sm mt-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {plan.desc}
                                    </p>
                                </div>

                                <hr className={plan.highlight ? 'border-gray-600' : 'border-gray-100'} />

                                <ul className='flex flex-col gap-2'>
                                    {plan.features.map((f, i) => (
                                        <li key={i} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                                            <span className='w-1.5 h-1.5 bg-orange-400 rounded-full shrink-0'></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                
               <a                     href='/contact-me'
                                    className={`mt-auto text-center py-3 rounded-full font-semibold text-sm transition ${
                                        plan.highlight
                                            ? 'bg-orange-400 hover:bg-orange-500 text-white'
                                            : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-50'
                                    }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className='py-16 px-4 text-center'>
                <h2 className='font-abhaya text-3xl sm:text-4xl font-bold'>
                    Ready to start your <span className='text-orange-400'>project?</span>
                </h2>
                <p className='text-gray-500 mt-3 text-sm max-w-md mx-auto'>
                    Let's work together to create something amazing. Reach out and let's discuss your idea.
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

export default ServicePage