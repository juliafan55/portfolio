import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"
import Typewriter from 'typewriter-effect'

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#232946]">

            {/* intro container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#b8c1ec]">
                <p className="text-2xl sm:text-3xl">Hi, my name is </p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#eebbc3] py-3">Julia Fan</h1>
                <div className="flex text-3xl sm:text-5xl">
                <p className="pr-3">I'm a</p>
                    <Typewriter
                        className=""
                        options={{
                            strings: ["Developer.", "Learner."],
                            autoStart: true,
                            delay: 50,
                            loop: true,
                            pauseFor: 500,
                        }}
                    />
                </div>
                <div className="py-3">
                    <button className="group border-2 px-6 py-3 my-2 flex items-center text-[#eebbc3] hover:bg-[#eebbc3] hover:text-[#232946] hover:border-[#eebbc3]">Projects
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-2" />
                        </span>
                    </button>
                </div>
                    

            </div>
        </div>
    )
}

export default Home
