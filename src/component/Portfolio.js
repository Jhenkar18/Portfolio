import React from 'react'
import java from "../java.png"
import express from "../express.png"
import javascript from "../javascript.png"
import node from "../node.png"
import python from "../python.jpg"
const Portfolio = () => {
    const cardItem=[
        {
            id:1,
            logo:java,
            name:"Java"
        },
        {
            id:2,
            logo:express,
            name:"Express"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:node,
            name:"Node"
        },
        {
            id:5,
            logo:python,
            name:"Pyhton"
        }

    ]
  return (
    <div name="Portfolio"
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>

            <h1 className='text-3xl font-bold mb-5'>
                PortFolio
            </h1>
            <span className='underline font-semibold'>Featured Projects</span>
        

        <div className='grid md:grid-cols-3 gap-3 my-5'>
            {
                cardItem.map(({id,logo,name})=>(
                    <div key={id} className='md:w-[300px] md:h-[300px] rounded-lg shadow-lg p-1 border-[2px] cursor-pointer hover:scale-110 duration-300'>
                        <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt=''/>
                        <div>
                            <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                            <p className='px-2 text-gray-700s'> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='px-6 py-4 space-x-3 justify-around'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded '>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                        </div>
                    </div>
                ))}
            
        </div>

        </div>
        
    </div>
  )
}

export default Portfolio