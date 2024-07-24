import React from 'react'
import css from "../css.jpg"
import java from "../java.png"
import html from "../html.png"
import javascript from "../javascript.png"
import react from "../reactjs.png"
import node from "../node.png"
const Experience = () => {
    const cardItem=[
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:java,
            name:"JAVA"
        },
        {
            id:5,
            logo:react,
            name:"React"
        },
        {
            id:6,
            logo:node,
            name:"Node"
        }

    ]
  return (
    <div name="Experience" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>

            <h1 className='text-3xl font-bold mb-5'>
                Experience
            </h1>
            <span className=' font-semibold'> I've more than 2 years of experiance in below technologies.</span>
        

        <div className='grid grid-cols-2 md:grid-cols-4 gap-7 my-3'>
            {
                cardItem.map(({id,logo,name})=>(
                    <div key={id} className=' flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300'>
                        <img src={logo} className='w-[150px] rounded-full' alt=''/>
                        <div>
                            <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                           
                        </div>
                       
                    </div>
                ))}
            
        </div>

        </div>
        
    </div>
  )
}


export default Experience