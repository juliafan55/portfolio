import React from 'react'

import JavaScript from "../assets/javascript.png"
import Mongo from "../assets/mongo.png"
import Node from "../assets/node.png"
import ReactImg from "../assets/react.png"

const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#232946] text-[#b8c1ec]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#eebbc3]">Skills</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>

                {/* icons */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Mongo} alt="MongoDB icon" />
                        <p className="my-4">MongoDB</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Node} alt="Node.js icon" />
                        <p className="my-4">Node.js</p>
                    </div>
                    <div className="hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
                        <p className="my-4">React.js</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
