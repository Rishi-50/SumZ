import React from 'react';
import { logo } from '../assets';

function Hero() {
    return (
        <header className='w-full flex justify-center items-center flex-col '>
            
            {/* Navbar */}
            <nav className='flex justify-between items-center w-full mb-10 pt-3 cursor-pointer'>
                <img src={logo} alt="logo" className='w-28 object-contain'/>

                <button type='button' 
                onClick={() => window.open('https://github.com/Rishi-50/SumZ')} className='black_btn'>
                    Github
                </button>
            </nav>


            {/* Title */}
            <h1 className="head_text">
                Summarize Articles with <br className='max-md:hidden'/>
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>

            {/* Sub-Title */}
            <h2 className='desc'>
                Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into short and concisee summaries.
            </h2>


        </header>
    )
}

export default Hero
