import React from 'react'

//import skills data
import {skills} from '../data'


const Skills = () => {
  return (
    <section id="skills" className='bg-tertiary py-12'>
            <h1 className='text-center text-5xl pb-5 text-opacity-40'>My Skills</h1>
        <div className='container mx-auto pb-5'>
            <div className='grid grid-cols-9 md:grid-flow-row '>
                {skills.map((skill, index)=>{
                    return (
                    <div className='flex items-center justify-center' key={index}>
                        <img src={skill.image} alt=''/>
                    </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills