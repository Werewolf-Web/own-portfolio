const MyWorkExperince = () => {
  const experiences = [
    {
      company: "Cognizant, Mumbai",
      period: "Sep 2016 - July 2020",
      role: "Experience Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      dotColor: "bg-orange-500",
    },
    {
      company: "Sugee Pvt limited, Mumbai",
      period: "Sep 2020 - July 2023",
      role: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      dotColor: "bg-gray-800",
    },
    {
      company: "Cinetstox, Mumbai",
      period: "Sep 2023",
      role: "Lead UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
      dotColor: "bg-orange-500",
    },
  ];

  return (
    <div className="bg-white min-h-[650px] w-full">
    <h1 className='font-abhaya text-orange-400 text-6xl text-center p-13 pb-9 text-wrap'> <span className='text-black'>My</span> Work Experince</h1>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center gap-3 sm:gap-6 lg:gap-8 relative">

            {/* Left: Company — hidden on mobile, shown sm+ */}
            <div className="hidden sm:block sm:w-[200px] lg:w-[280px] text-right py-6 sm:py-8 shrink-0">
              <h3 className="text-lg lg:text-2xl font-medium">{exp.company}</h3>
              <p className="text-sm lg:text-base font-normal opacity-60">{exp.period}</p>
            </div>

            {/* Center: Timeline dot + line */}
            <div className="flex flex-col items-center self-stretch relative w-6 sm:w-8 shrink-0">
              {index !== 0 && <div className="w-[2px] bg-gray-400 flex-1"></div>}
              {index === 0 && <div className="flex-1"></div>}
              <div className={`w-3 h-3 sm:w-4 sm:h-4 ${exp.dotColor} rounded-full z-10 border-2 sm:border-4 border-white shrink-0`}></div>
              {index !== experiences.length - 1 && <div className="w-[2px] bg-gray-400 flex-1"></div>}
              {index === experiences.length - 1 && <div className="flex-1"></div>}
            </div>

            {/* Right: Role + on mobile also shows company */}
            <div className="flex-1 py-6 sm:py-8">
              {/* Show company/period on mobile only */}
              <div className="sm:hidden mb-1">
                <p className="text-sm font-semibold text-orange-500">{exp.company}</p>
                <p className="text-xs font-normal opacity-60 mb-1">{exp.period}</p>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">{exp.role}</h3>
              <span className="text-sm lg:text-base font-normal opacity-60">{exp.desc}</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorkExperince;