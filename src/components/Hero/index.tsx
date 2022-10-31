
import Header from "../Header";
import './hero.css'
import IconHolder from "../IconHolder/IconHolder";
import { Fade } from "react-awesome-reveal";

function Hero() {
  function downloadPdtFile(){
    console.log("clicked");
  }
  return (
    <section className="w-full h-full bg-secondary overflow-hidden">
      <Header />
      <IconHolder />
      <div className="container flex sm:justify-between flex-col md:flex-row gap-10 md:gap-64 items-center h-2/3 ">
        <div className="data-container text-secondary2 -ml-16 sm:ml-0 pt-32 pb-16">
          <Fade cascade direction={"left"} >
          <div
            className="semi-circle w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] w-full h-full content-none rounded-full z-0 relative"
            style={{
              background:
                "linear-gradient(140deg, rgba(217,2,238,1) 0%, rgba(50,13,62,1) 45%)",
              zIndex: 0,
            }}
          >     
          
            <div className="data-holder absolute left-20 top-16 sm:-ml-12 md:ml-0  w-fit sm:left-52 sm:top-36 "
            style={{ 
              width: 'inherit',
             }}>
              <h1 className="text-base font-thin">Hi, my name is </h1>
              <h1 className="name text-2xl sm:text-6xl font-bold w-fit text-secondary3">Amir Raj Regmi</h1>
              <h1 className="text-xl sm:text-2xl">Frontend Developer</h1>
              <div className="flex py-4">
                <button className="bg-primary rounded-2xl" onClick={downloadPdtFile}>Download CV <i className=" mx-2 fa-solid fa-download"></i></button>
              </div>
            </div>
          </div>
            
          </Fade>
        </div>
        <Fade cascade  direction={"right"} >
        <div className="frame mt-0 mt-64 sm:mt-32 sm:mb-32 order-first md:order-last relative">
          <div className="circle"></div>
          <img src="Image/Amir.png" alt="Amir" className=" max-w-none "
          />
          <div className="circle-bottom"></div>
        </div>
        </Fade>
      </div>
    </section>
  );
}

export default Hero;
