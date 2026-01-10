
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import EdunityImg from "../assets/edtech.PNG";
import TodoImg from "../assets/todo.PNG";
import KapuImg from "../assets/kapu.PNG";
import JiraniImg from "../assets/jirani.PNG";
import FlowerImg from "../assets/flower.PNG";

const projects = [
 {
  title: "Edunity",
  subtitle: "Full-Stack EdTech Solution",
  description: "A comprehensive EdTech ecosystem designed to bridge the gap between students and educators. It features a streamlined interface for course management, interactive learning modules, and a responsive design that ensures education is accessible on any device.",
  image: EdunityImg, 
  stack: ["React", "Component-based Architecture", "Responsive UI"],
  live: "https://edunity-edtech.vercel.app/",
  github: "https://github.com/Fatma-Suleiman/Edunity-EdTech", 
},
  {
    title: "TaskMaster",
    description:
      "A high-performance productivity application built to help users organize their daily lives. I focused on creating an intuitive user interface with real-time state updates, ensuring that task management is fluid, fast, and satisfying.",
    image: TodoImg,
     stack: ["JavaScript", "Client-side Logic"],
    live: "https://todo-app-snowy-chi-48.vercel.app/",
    github: "https://github.com/Fatma-Suleiman/todo-app",
  },
 
{ 
   title: "Project Jirani",
description:
  "A dynamic application that bridges the gap between local service providers and customers. I focused on building a high-trust interface where users can discover, evaluate, and book services instantly, reducing the friction found in traditional service procurement.",
image: JiraniImg,
stack: ["React", "Node.js", "REST APIs", "Service Booking"],  
    live: "https://servicesystem-omega.vercel.app/",
    github: "https://github.com/Fatma-Suleiman/Service-Provision-System",
  },
  {
    title: "Kapu Ecommerce",
    description:
      " A community-driven e-commerce solution designed to make essential goods more affordable and accessible. I built this platform with a focus on high-performance product browsing and a seamless checkout experience tailored for emerging markets.",
    image: KapuImg,
     stack: ["React", "E-commerce", "Performance Optimization"],
    live: "https://kapu-ecommerce.vercel.app/",
    github: "https://github.com/Fatma-Suleiman/kapu-ecommerce",
  },


  { 
  title: "Flower Shop",
description:
  "A sophisticated e-commerce experience designed for a premium floral brand. I focused on creating a high-end visual aesthetic using minimalist design principles, ensuring that the vibrant product imagery remains the focal point.",
image: FlowerImg,
stack: ["Responsive UI", "UX-Focused Design"],
    live: "https://flower-shop-three-zeta.vercel.app/",
    github: "https://github.com/Fatma-Suleiman/Flower-Shop-Ecommerce",
  },
];


export default function ProjectPage() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
       
        <h2 className="text-center text-4xl md:text-5xl font-bold text-green-400 mb-16">
          Featured Projects
        </h2>

      
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}


function ProjectCard({ project }) {
  return (
    <div
      className="border border-green-400 rounded-2xl p-6 flex flex-col
                 shadow-[0_0_0px_rgba(34,197,94,0.4)]
                 hover:shadow-[0_0_25px_rgba(34,197,94,0.7)]
                 transition-all duration-300"
    >
   
      <h3 className="text-green-400 text-2xl font-bold mb-4">
        {project.title}
      </h3>

   
      <p className="text-green-200 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
  {project.stack.map((tech, idx) => (
    <span
      key={idx}
      className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full"
    >
      {tech}
    </span>
  ))}
</div>


    
      <div className="rounded-xl overflow-hidden mb-6 border border-green-400/30">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover"
        />
      </div>

   
      <div className="flex gap-4 mt-auto">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-400 text-black px-4 py-2
                     rounded-lg font-semibold hover:bg-green-300 transition"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white
                     text-white px-4 py-2 rounded-lg font-semibold
                     hover:bg-white hover:text-black transition"
        >
          <FaGithub />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
