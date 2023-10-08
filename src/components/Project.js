import React from 'react'

const Project = ({item}) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center '>
      <div className='mb-5'>
        <a href={item.url} target="_blank" rel='noreferrer'><img className ='rounded-2xl' src={item.image} alt=''/></a>
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <a href={item.url} target="_blank" rel='noreferrer'><h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3></a>
      <a className='btn hover:bg-accent-hover md:btn-lg transition-all opacity-70' href={item.repository} target="_blank" rel='noreferrer'>{item.buttonLabel}</a>
    </div>
  )
}

export default Project