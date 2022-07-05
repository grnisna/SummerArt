import React from 'react'

const LeftContent = () => {
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
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <p className='ml-5'>467 total review for this teacher</p>
            </div>

            <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <p className='ml-5'>467 total review for this teacher</p>
            </div>
           
        </div>
    )
}

export default LeftContent
