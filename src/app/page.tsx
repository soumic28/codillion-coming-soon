// import Image from "next/image";
import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
export default function Home() {
  const words = ["Dev_", "Hacker_", "Coder_", "Engineer_"];
 return (     
    <div className="flex flex-col items-center justify-center h-screen bg-[#0C121A] overflow-hidden ">       
      <svg         
        className="absolute bottom-1/4 left-0 animate-float-slow opacity-70 transition-all duration-1000 transform will-change-transform"         
        width="752"         
        height="638"         
        viewBox="0 0 752 638"         
        fill="none"         
        xmlns="http://www.w3.org/2000/svg"       
      >         
        <g filter="url(#filter0_f_82_24)">           
          <circle             
            cx="376"             
            cy="262"             
            r="176"             
            fill="#5FEBAA"             
            fillOpacity="0.25"           
          />         
        </g>         
        <defs>           
          <filter             
            id="filter0_f_82_24"             
            x="0"             
            y="-114"             
            width="752"             
            height="752"             
            filterUnits="userSpaceOnUse"             
            colorInterpolationFilters="sRGB"           
          >             
            <feFlood floodOpacity="0" result="BackgroundImageFix" />             
            <feBlend               
              mode="normal"               
              in="SourceGraphic"               
              in2="BackgroundImageFix"               
              result="shape"             
            />             
            <feGaussianBlur               
              stdDeviation="100"               
              result="effect1_foregroundBlur_82_24"             
            />           
          </filter>         
        </defs>       
      </svg>        
      
      <svg         
        className="absolute -bottom-[0px] right-8 animate-float opacity-70 transition-all duration-1000 transform will-change-transform"         
        width="1256"         
        height="1006"         
        viewBox="0 0 1256 1006"         
        fill="none"         
        xmlns="http://www.w3.org/2000/svg"       
      >         
        <g filter="url(#filter0_f_82_25)">           
          <circle cx="628" cy="378" r="428" fill="#192330" />         
        </g>         
        <defs>           
          <filter             
            id="filter0_f_82_25"             
            x="0"             
            y="-250"             
            width="1256"             
            height="1256"             
            filterUnits="userSpaceOnUse"             
            colorInterpolationFilters="sRGB"           
          >             
            <feFlood floodOpacity="0" result="BackgroundImageFix" />             
            <feBlend               
              mode="normal"               
              in="SourceGraphic"               
              in2="BackgroundImageFix"               
              result="shape"             
            />             
            <feGaussianBlur               
              stdDeviation="100"               
              result="effect1_foregroundBlur_82_25"             
            />           
          </filter>         
        </defs>       
      </svg>        
      
      <h1 className="md:text-[72px] font-bold text-white max-w-[55%] md:max-w-[40%] md:leading-[79px] z-20">         
        The <span className="text-[#5FEBAA]">Ultimate</span> Platform For All         
        Things <FlipWords words={words} className="text-[#5FEBAA]" />       
      </h1>       
      
              
      
      <div className="mt-16 md:mt-24 z-20">         
        <p className="text-white md:text-[48px] md:text-5xl ">           
          <span className="font-bold">Coming Soon</span>{" "}           
          <span className="text-white font-normal">—</span> Fall 2025         
        </p>         
        <p className="md:text-[24px] md:text-2xl mt-4 text-left text-[#D2D2D2]">           
          <span className="font-bold">Built By Developers</span>{" "}           
          <span className="text-[#D2D2D2]">—</span> For Developers         
        </p>       
      </div>     
    </div>   
  ); 
}
