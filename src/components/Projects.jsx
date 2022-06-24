import React from 'react'
import WorkImg from "../assets/workImg.jpg"

const Projects = () => {
    return (
        <div name="projects" className="w-full md:h-screen bg-[#232946] text-[#b8c1ec]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#eebbc3]">Projects</p>
                    <p className="py-4">// Check out my recent projects.</p>
                </div>

                {/* projects list */}
                {/* container */}
                <div classaName="grid sm:grid-cols-2 md: grid-cols-3 gap-4">
                    {/* each project */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-[#eebbc3] tracking-wider text-center"> Digital Hub </span>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2  font-bold text-lg"> Demo </button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-3 m-2 font-bold text-lg"> Code </button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects
