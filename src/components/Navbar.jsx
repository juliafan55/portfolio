import React, {useState} from 'react'
import { FaBars, FaLinkedin, FaTimes, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import {IoDocumentTextOutline} from "react-icons/io5"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#232946] text-[#fffffe]">
            <div className="text-4xl">
                JF
            </div>

            {/* desktop menu */}
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
      

            {/* hamburger */}
            <div className="md:hidden z-10" onClick={handleClick}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <div className={
                !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#232946] flex flex-col justify-center items-center"
            }>
                 <ul>
                    <li className="py-6 text-3xl">Home</li>
                    <li className="py-6 text-3xl">About</li>
                    <li className="py-6 text-3xl">Skills</li>
                    <li className="py-6 text-3xl">Projects</li>
                    <li className="py-6 text-3xl">Contact</li>
                </ul>
            </div>

            {/* sidebar */}
                <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a href="/" className="flex justify-between items-center w-full text-[#fffffe] pl-4">
                                LinkedIn <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a href="/" className="flex justify-between items-center w-full text-[#fffffe] pl-4">
                                GitHub <FaGithub size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a href="/" className="flex justify-between items-center w-full text-[#fffffe] pl-4">
                                Email <HiOutlineMail size={30} />
                            </a>
                        </li>
                        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
                            <a href="/" className="flex justify-between items-center w-full text-[#fffffe] pl-4">
                                Resume <IoDocumentTextOutline size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
        </div>

    )
}

export default Navbar
