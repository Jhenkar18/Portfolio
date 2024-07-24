import React from 'react';

const Resume = () => {
  return (


    <div name="Resume"
    className="max-w-screen-2xl container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 my-8 md:my-16">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">Resume</h1>
  <span className="block text-center md:text-left mb-4">Download My Resume For More Details</span>

  <div className="text-center">
    <a
      href="/Jhenkar_Resume1.pdf"
      download
      className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-md hover:bg-blue-700 transition duration-300"
    >
      Download Resume
    </a>
  </div>
</div>
  )
};

export default Resume;