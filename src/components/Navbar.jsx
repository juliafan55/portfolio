import React, {useState} from 'react'
import { FaBars, FaLinkedin, FaTimes, FaGithub } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { IoDocumentTextOutline } from "react-icons/io5"
import {Link} from "react-scroll"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#232946] text-[#fffffe]">
            <div className="text-4xl font-bold text-[#eebbc3]">
                JF
            </div>

            {/* desktop menu */}
                <ul className="hidden md:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
      

            {/* hamburger */}
            <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <div className={
                !nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#232946] flex flex-col justify-center items-center"
            }>
                 <ul>
                    <li className="py-6 text-3xl">
                        <Link to="home" smooth={true} duration={500} onClick={handleClick}>Home</Link>
                    </li>
                    <li className="py-6 text-3xl">
                        <Link to="about" smooth={true} duration={500} onClick={handleClick}>About</Link>
                    </li>
                    <li className="py-6 text-3xl">
                        <Link to="skills" smooth={true} duration={500} onClick={handleClick}>Skills</Link>
                    </li>
                    <li className="py-6 text-3xl">
                        <Link to="projects" smooth={true} duration={500} onClick={handleClick}>Projects</Link>
                    </li>
                    <li className="py-6 text-3xl">
                        <Link to="contact" smooth={true} duration={500} onClick={handleClick}>Contact</Link>
                    </li>
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
