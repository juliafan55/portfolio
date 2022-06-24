import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#232946] text-[#b8c1ec] flex justify-center items-center p-4">
            <form method="POST" action="https://getform.io/f/d2a50b10-2b58-4791-b7c1-299a5ccdbb42" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-2">
                    <p className="text-4xl font-bold inline border-b-4 border-[#eebbc3]"> Contact </p>
                    <p className="py-4">// Submit the form below or shoot me an email - juliafan55@gmail.com</p>
                </div>
                <input type="text" placeholder="Name" name="name"
                className="my-2 p-2 text-[#232946]"/>
                <input type="text" placeholder="Email" name="email" className="my-2 p-2 text-[#232946]" />
                <textarea className="my-2 p-2 text-[#232946]" name="message" rows="10" placeholder="Write your message"></textarea>
                <button className="border-2 px-4 py-3 my-4 mx-auto flex items-center">Send your message</button>
            </form>
        </div>
    )
}

export default Contact
