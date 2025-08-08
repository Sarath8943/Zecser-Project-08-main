import React from "react";

interface HeroSectionProps {
  image: string;         
  heading: string;     
  subheading: string;    
  className?: string;   
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  heading,
  subheading,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full aspect-[3/1] bg-cover bg-center flex items-center justify-center ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50" /> 
      
      <div className="relative md:w-3/4 z-10 text-start text-white p-[30px]">
        <h1 className="text-3xl md:text-5xl mb-4 leading-tight max-w-xl">
          {heading}
        </h1>
        <p className="font-light text-sm md:text-lg max-w-2xl">
          {subheading}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
