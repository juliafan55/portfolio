
import React from 'react'
import WorkImg from '../assets/workImg.jpg';

const Projects = () => {
    return (
        <div name="projects" className="w-full md:h-screen text-[#b8c1ec] bg-[#232946]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#eebbc3]">Work</p>
                    <p className="py-4"> // Check out some of my work.</p>
                </div>

                {/* list of projects */}
                {/* DIGITAL HUB */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-2xl font-bold text-[#eebbc3] tracking-wider">Digital Hub</p>
                            <p className="text-l text-[#eebbc3]">A blog app...</p>

                            <div classname="pt-4 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Demo </button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ATLANTIC */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-2xl font-bold text-[#eebbc3] tracking-wider">Digital Hub</p>
                            <p className="text-l text-[#eebbc3]">A blog app...</p>

                            <div classname="pt-4 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Demo </button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* POPCORN TIME */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-2xl font-bold text-[#eebbc3] tracking-wider">Digital Hub</p>
                            <p className="text-l text-[#eebbc3]">A blog app...</p>

                            <div classname="pt-4 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Demo </button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* TRIVIA GAME */}
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-2xl font-bold text-[#eebbc3] tracking-wider">Digital Hub</p>
                            <p className="text-l text-[#eebbc3]">A blog app...</p>

                            <div classname="pt-4 text-center">
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Demo </button>
                                </a>
                                <a href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Code </button>
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
