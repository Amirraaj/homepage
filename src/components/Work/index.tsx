
import React from "react";
import { useState } from "react";
import {Fade} from 'react-awesome-reveal';

function Work() {
  const [isShown, setIsShown] = useState(false);
  const [getIndex, setGetIndex]= useState<Number>();

  const images =["portfolio-01.jpg","portfolio-02.jpg","portfolio-03.jpg","portfolio-04.jpg","portfolio-05.jpg","portfolio-06.jpg"]

  function hoverEvent(data:number){
    setIsShown(prev =>!prev);
    setGetIndex(data);

  }

  const mapImages =images.map((item, index) =>{
    return(
      <div  className="portfolio-item relative"
      key={index}
      onMouseEnter={() => hoverEvent(index)}
      onMouseLeave={() => hoverEvent(0)}
      >
        <img
              src={`Image/work/${item}`}
              alt=""
              className="portfolio_img rounded-3xl"
            />
            {index === getIndex &&  isShown &&(
              <div className="absolute inset-0 bg-secondary opacity-50 flex justify-center items-center rounded-3xl">
                <button className="bg-secondary2 hover:bg-secondary3">
                  Learn more
                </button>
              </div>
            )}
      </div>
    )
  
  })

  return (
    <section className="w-full h-full bg-secondary3">
      <div className="container py-10">
        <Fade cascade direction={'left'} >

        <h2 className=" text-secondary text-center text-6xl font-bold ">
          My Work
        </h2>
        </Fade>
        <Fade cascade direction="right" >
        <div
          className="grid gap-5 py-14"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          }}
        >
          {mapImages}
        </div>
        </Fade>
      </div>
    </section>
  );
}

export default Work;
