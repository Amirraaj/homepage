import React from 'react'

function IconHolder() {
  return (
    <div className='fixed left-3 sm:left-5 top-[250px] flex flex-col items-center gap-10' style={{ zIndex:"999", }}>
        <div className={`content-none w-0.5 bg-primary h-20 `} ></div>
        <i className="fa-brands fa-facebook fa-xl text-primary cursor-pointer hover:text-[#3b5998] "></i>         
        <i className="fa-brands fa-twitter fa-xl text-primary cursor-pointer hover:text-[#00acee]"></i>  
        <i className="fa-brands fa-github fa-xl text-primary cursor-pointer hover:text-[#171515]"></i>       
        <i className="fa-brands fa-linkedin fa-xl text-primary cursor-pointer hover:text-[#0072b1]"></i> 
        <div className='content-none w-0.5 bg-primary h-20 '></div>      
    </div>
  )
}

export default IconHolder