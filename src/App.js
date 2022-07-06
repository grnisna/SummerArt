import Heading from "./components/Heading";
import LeftContent from "./components/LeftContent";
import RightContentImage from "./components/RightContentImage";
import { FaArrowRight, FaHeart, FaShare} from 'react-icons/fa';
import { useState } from "react";

function App() {
  const [redHeart, setRedHeart] = useState(false);

  const handleHeart = () =>{
    setRedHeart(redHeart => !redHeart);
    console.log(redHeart)
  }


  return (
    <div className="p-5">
      <Heading></Heading>
      <div className="lg:flex justify-between items-center" >
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
            <p className='ml-5'>467 total review for this teacher</p>
          </div>

          <div className="rating mt-3">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
            <p className='ml-5'>467 total review for this teacher</p>
          </div>

          <div>
            <h2 className='text-xl font-bold'>Completed by 21 learner</h2>
          </div>

          <div className='flex items-center'>
            <button className="btn btn-primary my-5">See Class Schedule <span className='lg:mx-5'></span>  < FaArrowRight /> </button>
            <div onClick={handleHeart}  className="flex items-center mx-5">  < FaHeart color={redHeart ? 'red' : 'gray'} /><button className="mx-2 font-bold text-primary">Save  </button> </div>
            <div className="flex items-center mx-5">  < FaShare /> <button className="mx-2 font-bold text-primary">Share  </button> </div>
            
          </div>

        </div>
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
            <p className='ml-5'>467 total review for this teacher</p>
          </div>

          <div className="rating mt-3">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
            <p className='ml-5'>467 total review for this teacher</p>
          </div>

          <div>
            <h2 className='text-xl font-bold'>Completed by 21 learner</h2>
          </div>

          <div className='flex items-center'>
            <button className="btn btn-primary my-5">See Class Schedule <span className='lg:mx-5'></span>  < FaArrowRight /> </button>
            <button>Save < FaHeart />  </button>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
