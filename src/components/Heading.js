import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';

const Heading = () => {
    return (
        <div>
            <h1 className='lg:text-5xl text-2xl font-sans-serif font-bold mb-2'>Summer Art Camp! 5 Days of Artists Painting Monet, Van Gogh, Matisse, & More..</h1>
            <h4 className="text-2xl font-bold text-gray-500"> Multi-Day Course <span className="tooltip" data-tip="about course" >   <FaQuestionCircle /> </span></h4>

        </div>
    )
}

export default Heading
