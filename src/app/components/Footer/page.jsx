import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center w-full h-20 mt-5 text-center bg-slate-800 text-slate-100">
      <div className="absolute bottom-0 inset-x-0">
        <p className="border-b-2 border-slate-700 font-thin">
          Designed by Jimmy B
        </p>
        <Link 
        href='https://github.com/jimmybcoding?tab=repositories'
        target="_blank"
        >
          <FaGithub 
           className="mx-auto h-6 w-6" 
           title="Github"
           aria-label="Github"
          />
        </Link>
        <p>
          2025
        </p> 
      </div>
    </div>
  )
}

export default Footer