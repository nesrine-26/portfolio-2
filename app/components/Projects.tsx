import Image from "next/image"

const Projects = () => {
    const projectList = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Full Stack Development",
    image: "/bg2.png", // Path to your screenshot
    techStack: ["Next.js", "Tailwind", "Sanity.io"],
    description: "A high-level look at how engineering logic solved a design problem."
  },
    {
    id: 2,
    title: "Project Alpha",
    category: "Full Stack Development",
    image: "/bg2.png", // Path to your screenshot
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
    <div className="relative h-screen ">
          <div className='absolute inset-0 h-full -z-10 w-full  '>
              <Image
                            src="/bg4.png"
                            alt="bg image"
                            width={1000}
                            height={1000}
                            className="object-fill w-full h-full "
                          />
                    </div>
       <h2 className="text-5xl font-bold text-center my-12">
        My <span className="text-green-600">Projects</span>
      </h2>
         <div className="grid grid-cols-1 relative z-10   md:grid-cols-3 gap-10 py-10 px-6  max-w-6xl  ">
            {projectList?.map(project=>(
                <div key={project.id} className="w-fit max-w-96 max-h-fit  bg-[#EFEBD2]/10 p-6  backdrop-blur-sm  border-[#298415] border-4 rounded-2xl">
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
            {project?.techStack.map(stack =>(
                <li className="bg-green-200 p-1 rounded-lg ">{stack} </li>
            ))}
        </ul>
                </div>
            ))}


      </div>
      </div>
  )
}

export default Projects
