import Image from "next/image"

const Projects = () => {
    const projectList = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Full Stack Development",
    image: "/bg3.png", // Path to your screenshot
    techStack: ["Next.js", "Tailwind", "Sanity.io"],
    description: "A high-level look at how engineering logic solved a design problem."
  },
    {
    id: 2,
    title: "Project Alpha",
    category: "Full Stack Development",
    image: "/bg4.png", // Path to your screenshot
    techStack: ["Next.js", "Tailwind", "Sanity.io"],
    description: "A high-level look at how engineering logic solved a design problem."
  },
    {
    id: 3,
    title: "Project Alpha",
    category: "Full Stack Development",
    image: "/bg2.png", // Path to your screenshot
    techStack: ["Next.js", "Tailwind", "Sanity.io"],
    description: "A high-level look at how engineering logic solved a design problem."
  },

];
  return (
      <section className="relative min-h-screen overflow-hidden">      
         {/* Background */}
         <div className="absolute inset-0 -z-10">
            <Image
                   src="/bg4.png"
                   alt="Creative Background"
                   fill
                   priority
                   className="object-cover dark:hidden block"
                 />
                 <Image
                   src="/dark4.png"
                   alt="Creative Background"
                   fill
                   priority
                   className="object-cover  hidden dark:block"
                 />
           
         </div>
      <h2 className="text-center pt-16 md:order-2 order-1 text-5xl md:text-6xl font-bold  dark:text-white text-gray-900">
             My <span className="text-green-600">Projects</span>
          </h2>
         <div className="grid grid-cols-1 relative z-10  md:grid-cols-3 gap-10 py-10 px-4  max-w-6xl  ">
            {projectList?.map(project=>(
                <div key={project.id} className="dark:text-white w-fit max-w-96 max-h-fit  mx-auto md:mx-0 bg-[#EFEBD2]/10 p-6  backdrop-blur-sm  border-[#298415] border-4 rounded-2xl">
                    <h3 className="text-center font-bold ">{project.title} </h3>
        <p className="text-center font-semibold italic mb-2 underline  ">{project.category } </p>

                     <Image
          src={project.image}
          alt="bg image"
          width={1000}
          height={1000}
          className=" rounded-2xl  object-fill w-full h-50 bg-amber-500"
        />
        <p className="mt-5 ">{project.description } </p>
        <ul className="flex items-center gap-2 justify-center my-3 ">
            {project?.techStack.map((stack, index) =>(
                <li key={index} className="bg-green-200 p-1 rounded-lg ">{stack} </li>
            ))}
        </ul>
                </div>
            ))}


      </div>
      </section>
  )
}

export default Projects
