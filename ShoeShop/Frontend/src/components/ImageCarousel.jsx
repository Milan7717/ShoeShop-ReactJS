import React, { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  function nextImage () {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  useEffect(()=>{
    const timeInterval=setInterval(() => {
        nextImage();
    }, 3000);
    return()=>clearInterval(timeInterval)
  },[current,images])

  return (
    <>
     
      <div>
          {images.map(
            (image, index) =>
              current === index && (
                <div>
                  <img
                    src={image}
                    key={index}
                    className=" object-cover object-center rounded-lg"
                    alt="image"
                  />
                </div>
              )
          )}
        </div>
      
    </>
  );
};

export default ImageCarousel;
