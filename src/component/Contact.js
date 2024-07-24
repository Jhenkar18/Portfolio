import React from 'react'
import { useForm } from "react-hook-form"
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <>
            <div name="Contact" 
            className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>

                <h1 className='text-3xl font-bold mb-4'>Contact</h1>
                <span>Fill Out The Form To Conatact ME</span>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <form  onSubmit={handleSubmit(onSubmit)}
                    className= 'bg-slate-200 rounded-xl w-[96] px-8 py-6'
                    >

                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Full Name
                            </label>
                            <input
                            {...register("name", { required: true })}
                                className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700'
                                id="name"
                                name="name"
                                type='text'
                                placeholder='Enter Your Full Name' />
                                {errors.name && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Enter Your Email Address
                            </label>
                            <input
                             {...register("Email", { required: true })}
                                className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700'
                                id="email"
                                name="email"
                                type='text'
                                placeholder='Email Address' />
                                {errors.Email && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Message
                            </label>
                            <textarea
                            {...register("message", { required: true })}
                                className='shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700'
                                id="message"
                                name="message"
                                type='text'
                                placeholder='Enter Your Query' />
                                {errors.message && <span>This field is required</span>}
                        </div>

                        <button type='submit' className='bg-gray-700 text-white rounded-xl px-3 py-2 hover:bg-gray-900 duration-200'>Send</button>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact