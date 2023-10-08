import React from 'react'

//import image
import Coding from '../assets/img/programming.svg'

const Hero = () => {
  const cvESURL = `${process.env.PUBLIC_URL}Ivan-CV-ES.pdf`
  const cvENURL = `${process.env.PUBLIC_URL}Ivan-CV.pdf`
  return (
    <section id='home'
    className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center
    lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>

        <div className='container mx-auto h-full'>
          <div className='flex items-center h-full 
          pt-8'>
            {/* left side */}
            <div className='flex-1 flex flex-col items-center lg:items-start' >
              <p className='text-3xl text-accent mb-[22px]'>Hi, I'm Ivan</p>
              <h1 className='text-4xl leading-[44px] md:text-4xl md:leading-tight lg:text-6xl
              lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                Front-end <br></br>Developer <br/> 
              </h1>
              <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480] text-lg text-center lg:text-left'>
              Passionate guy who wants to become an excellent software developer, here you can see my skills and projects, download my resume in the language of your choice below!
              </p>
              <div className="flex flex-row">

              <a href={cvENURL} download="Ivan-CV.pdf" className='p-4 m-4 btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Download my CV (EN)</a>
              <a href={cvESURL} download="Ivan-CV-ES.pdf" className='p-4 m-4 btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>Descargar mi CV (ES)</a>
              
              </div>
            </div>
            {/* right side */}
            <div className='hidden lg:flex flex-1 justify-center items-center h-full'>
            <img src={Coding} alt=''/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero