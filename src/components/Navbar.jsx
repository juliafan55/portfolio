import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#232946] text-[#fffffe]">
            <div className="">
                Julia Fan
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

        </div>

    )
}

export default Navbar
