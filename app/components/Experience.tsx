import React from 'react';

// 1. Define the Data Structure
const workHistory = [
  {
    company: "Company Name",
    role: "Industrial Engineer / Developer",
    period: "Month Year – Present",
    description: "Briefly describe your high-level impact here.",
    highlights: [
      "Detail 1: Scaled a system using React/Next.js...",
      "Detail 2: Applied engineering logic to optimize workflow...",
    ],
    stack: ["TypeScript", "Next.js", "Systems Design"]
  },
  {
    company: "Company Name",
    role: "Industrial Engineer / Developer",
    period: "Month Year – Present",
    description: "Briefly describe your high-level impact here.",
    highlights: [
      "Detail 1: Scaled a system using React/Next.js...",
      "Detail 2: Applied engineering logic to optimize workflow...",
    ],
    stack: ["TypeScript", "Next.js", "Systems Design"]
  }
];

const Experience = () => {
  return (
    <section className=" bg-dark">
      <div className='max-w-7xl mx-auto px-4 py-20 '>

     
        <h2 className="text-center md:order-2 order-1 text-5xl md:text-6xl font-bold mb-6 dark:text-white  text-gray-900">
            Professional <span className="text-green-600">Journey</span>
          </h2>
      
      <div className="space-y-12">
        {workHistory.map((job, index) => (
          <div key={index} className="group relative grid grid-cols-1 md:grid-cols-4 gap-8 p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300">
            
            {/* Sidebar: Date & Role */}
            <div className="md:col-span-1">
              <p className="text-green-600 font-bold uppercase tracking-wider text-sm">{job.period}</p>
              <h3 className="text-xl font-bold mt-2 text-gray-900">{job.role}</h3>
              <p className="text-gray-500">{job.company}</p>
            </div>

            {/* Main Body: Achievements */}
            <div className="md:col-span-3">
              <p className="text-gray-600 text-lg mb-4">{job.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              {/* Tech Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
       </div>
    </section>
  );
};

export default Experience;