import React from 'react';
import image1 from './../assets/image1.jpeg';

const RightContentImage = () => {
  return (

    <div className="flex items-center justify-center">
      <div className="lg:w-96 w-48" > <img src={image1} /> </div>
      <div >
        <div className="lg:w-48 w-24 m-0" >  <img src={image1} /> </div>
        <div className="lg:w-48 w-24 m-0" > <img src={image1} /> </div>
      </div>
    </div>
  )
}

export default RightContentImage
