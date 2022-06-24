import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-[#232946] text-[#b8c1ec]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#eebbc3]">About</p>
                    </div>
                    <div></div>
                    </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-2xl font-bold ">
                        <p> 🌎  Born in Brazil but now a New Yorker, with a passion for making designs into functional products.</p>
                    </div>
                    <div>
                        <p className="mb-3">My background is in fashion, where I gained familiarity managing international suppliers and accounts and leveraging my knowledge on supply chain. In the fashion industry I have also worked with product development which lead me to my interest in web development!
                        </p>
                        <p className="mt-4">As for my future, I hope to work in a full-stack or front-end web development role with a diverse team that supports my learning. I hope to bring a lot to the table along with my experience working in a cross-functional team with Design and Sales.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
