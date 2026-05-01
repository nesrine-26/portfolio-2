import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & UX",
      skills: ["Figma", "Adobe Suite", "Responsive Design"]
    },
    {
      title: "Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Engineering Logic",
      skills: ["Industrial Systems", "Process Optimization", "Sanity.io"]
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
        <div className='max-w-7xl mx-auto px-6 md:py-32 py-10'>
        <h2 className="text-center md:order-2 order-1 text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Tecknical <span className="text-green-600">Toolkit</span>
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-8 border-2 border-green-100 rounded-2xl bg-white hover:border-green-500 transition-colors">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li key={skill} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
       <div className="absolute inset-0 -z-10">
                 <Image
                   src="/bg2.png"
                   alt="background"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
       
    </section>
  );
};

export default Skills;