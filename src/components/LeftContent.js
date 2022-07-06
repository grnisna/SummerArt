import React from 'react';
import { FaArrowRight, FaHeart, FaShare} from 'react-icons/fa';
import { useState } from "react";

const LeftContent = () => {
    const [redHeart, setRedHeart] = useState(false);
    const [share, setShare] = useState(false);

    const handleHeart = () => {
        setRedHeart(redHeart => !redHeart);
    }
    const handleShare = () => {
        setShare(share => !share);
    }
    return (
        <div className='lg:mt-14  mt-3'>
            <p className='text-xl'> In this 5 dasy class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own inspired by their work. </p>

            <div className='flex items-center gap-4  mt-5'>
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <h2 className='text-primary font-bold'>Kimberly R Moseler</h2>
            </div>

            <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
                <p className='ml-5 text-sm text-gray-500'>467 total review for this teacher</p>
            </div>
            <br/>

            <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
                <p className='ml-5 text-sm text-gray-500'>5 Reviews For This Class</p>
            </div>

            <div>
                <h2 className='text-xl font-bold'>Completed by 21 learner</h2>
            </div>

            <div className='flex items-center'>
                <button className="btn btn-primary my-5">See Class Schedule <span className='lg:mx-5'></span>  < FaArrowRight /> </button>
                <div onClick={handleHeart} className="flex items-center lg:mx-5 mx-2">  < FaHeart color={redHeart ? 'red' : 'gray'} /><button className="mx-2 font-bold text-primary">Save  </button> </div>
                <div onClick={handleShare} className="flex items-center lg:mx-5 mx-2">  < FaShare color={share ? 'green' : 'gray'} /> <button className="mx-2 font-bold text-primary">Share  </button> </div>

            </div>

        </div>
    )
}

export default LeftContent
