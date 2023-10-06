import React from 'react'

//import image
import Image from '../assets/img/coding.svg';

const About = () => {
  const smoothScroll = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section id="about" className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-20  md:items-center md:justify-center'>
                <img className='object-cover h-full w-[350px] md:mx-auto lg:mx-0  rounded-2xl'
                 src={Image} 
                 alt=''
                 />
                 <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                    <div className='flex flex-col'>
                       <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 
                       before:content-about relative 
                       before:absolute before:opacity-40 
                       before:-top-[2rem] before:hidden 
                       before:lg:block'>
                        Ivan Vizcarra
                        </h2>
                        <p className='mb-4 text-accent'>Web Developer</p>
                        <hr className='mb-8 opacity-5'/>
                        <p className='mb-8 text-lg'>
                        1 year of experience in personal projects and 4 years at university studying Engineering informatics 
                        working in a team being team leader of 4-5 people solving problems together
                            <br/>
                            <br/>
                        Experience with Personal projects that you can see in my portfolio  such as a CRUD, ToDo-List, 
                        a project managing an API and doing front end web pages and landing pages.
                        In the university solving problems with a team many times taking the initiative, 
                        collaborating and helping others
                        </p>
                    </div>
                    <button onClick={smoothScroll} className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>Contact me
                    </button>
                 </div>
            </div>
        </div>
    </section>
  )
  
}




export default About