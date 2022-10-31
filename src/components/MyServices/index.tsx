import React from "react";
import { Fade } from "react-awesome-reveal";
function Services() {
  return (
    <section className="w-full h-full bg-secondary">
      <div className="container py-10">
        <Fade cascade direction="down" >
        <h2 className=" text-secondary3 text-center text-6xl font-bold ">
          My Services
        </h2>
        </Fade>
        <Fade cascade direction="up" >
          <div
            className="grid gap-10 py-14 "
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            }}
          >
            <div className="card  flex flex-col items-center text-secondary h-50 bg-secondary3 py-10 rounded-3xl">
              <i className="fa-solid fa-5x fa-laptop-code "></i>
              <h2 className="font-size py-2 text-xl font-semibold">
                Web Development
              </h2>
              <p className="w-11/12 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="mt-5 rounded-xl hover:bg-secondary hover:text-primary outline">
                Learn More
              </button>
            </div>
            <div className="card  flex flex-col items-center text-secondary h-50 bg-secondary3 py-10 rounded-3xl">
              <i className="fa-solid fa-5x fa-laptop-code "></i>
              <h2 className="font-size py-2 text-xl font-semibold">
                Web Development
              </h2>
              <p className="w-11/12 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="mt-5 rounded-xl hover:bg-secondary hover:text-primary outline">
                Learn More
              </button>
            </div>
            <div className="card  flex flex-col items-center text-secondary h-50 bg-secondary3 py-10 rounded-3xl">
              <i className="fa-solid fa-5x fa-laptop-code "></i>
              <h2 className="font-size py-2 text-xl font-semibold">
                Web Development
              </h2>
              <p className="w-11/12 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="mt-5 rounded-xl hover:bg-secondary hover:text-primary outline">
                Learn More
              </button>
            </div>
            
              
           
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Services;
