
import React from 'react'
import Atlantic from '../assets/Atlantic.png'
import DigitalHub from '../assets/DigitalHub.png'
import PopcornTime from '../assets/PopcornTime.png'
import StudioGhibli from '../assets/StudioGhibli.png'

const Projects = () => {
    return (
        <div name="projects" className="w-full md:h-screen text-[#b8c1ec] bg-[#232946]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#eebbc3]">Projects</p>
                    <p className="py-4"> // Check out some of my projects.</p>
                </div>

                {/* list of projects */}
                {/* DIGITAL HUB */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div
                        style={{ backgroundImage: `url(${DigitalHub})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-3xl font-bold text-[#eebbc3] tracking-wider">Digital Hub</p>
                            <p className="text-l text-[#eebbc3]">MERN full stack social media/blog app.</p>

                            <div className="pt-4 text-center">
                                <a target="_blank" href="/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Coming soon... </button>
                                </a>
                                <a target="_blank" target="_blank" href="https://github.com/juliafan55/digital-hub-frontend">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ATLANTIC */}
                    <div
                        style={{ backgroundImage: `url(${Atlantic})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-3xl font-bold text-[#eebbc3] tracking-wider">Atlantic</p>
                            <p className="text-l text-[#eebbc3]">React front-end ecommerce app using fakestore api.</p>

                            <div className="pt-4 text-center">
                                <a target="_blank" href="https://atlantic-ecommerce.netlify.app/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Demo </button>
                                </a>
                                <a target="_blank" href="https://github.com/juliafan55/react-ecommerce-site">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* POPCORN TIME */}
                    <div
                        style={{ backgroundImage: `url(${PopcornTime})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-3xl font-bold text-[#eebbc3] tracking-wider">Popcorn Time</p>
                            <p className="text-l text-[#eebbc3]">MEN stack simple movie review app.</p>

                            <div className="pt-4 text-center">
                                <a target="_blank" href="https://sei-popcorn-time.herokuapp.com/movies">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Demo </button>
                                </a>
                                <a target="_blank" href="https://github.com/juliafan55/SEI-Project-2-IMDB">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Code </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* TRIVIA GAME */}
                    <div
                        style={{ backgroundImage: `url(${StudioGhibli})` }}
                        className="group container rounded-md flex justify-center items-center mx-auto content-div"
                    >
                        <div className="opacity-0 group-hover:opacity-100">
                            <p className="text-3ßxl font-bold text-[#eebbc3] tracking-wider">Studio Ghibli Trivia</p>
                            <p className="text-l text-[#eebbc3]">Studio Ghibli themed browser based trivia game.</p>

                            <div className="pt-4 text-center">
                                <a target="_blank" href="https://juliafan55.github.io/javascript-trivia/">
                                    <button className="text-center px-4 py-2 m-2 font-bold text-lg"> Demo </button>
                                </a>
                                <a target="_blank" href="https://github.com/juliafan55/javascript-trivia">
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
