import React from "react";
import "./About.scss";
import { Fade } from "react-awesome-reveal";

function About() {
  return (
    <section className="w-full h-full bg-secondary3 pb-10">
      <div className="container pt-0 lg:pt-10 flex flex-col items-center md:flex-row md:justify-between md:gap-20 md:items-center">
      <Fade cascade direction={"left"} >
        <div className="shape relative md:my-14">
        <img src="Image/Amir2.png" alt="Amir" className="about-image  absolute " />
        <div className="bottom-shape"></div>
        </div>
      </Fade>
    <Fade cascade direction={"right"} >
    <div className="mt-28 order-first md:order-last">
        <h2 className="about-title text-secondary text-4xl md:text-6xl font-bold ">Who I am</h2>
        <p className="py-1 px-2 text-xl font-medium text-primary">Designer & Developer</p>
        <div className=" info w-[550px] mt-10 text-secondary ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-10">
            <button className="rounded-xl hover:bg-secondary hover:text-secondary3">Contact me</button>
          </div>
          
        </div>
          
        </div>
    </Fade>
        
      </div>
    </section>
  );
}

export default About;
