import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/herobg.png')] bg-cover bg-left h-[78vh] w-[95vw] mx-auto rounded-2xl p-6 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left text-[#1E293B]">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-md">
        Welcome to Calm
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-md">
        Minds Therapy
      </h1>

      {/* Subheading */}
      <p className="text-base md:text-xl mt-4 max-w-xl drop-shadow-sm">
        Helping you find balance, peace, and clarity, one session at a time.
      </p>

      {/* CTA Button */}
      <Button className="mt-6 px-6 py-6 bg-[#1E293B] text-white text-sm md:text-base font-semibold rounded-lg shadow-md hover:bg-[#334155] transition">
        Book Your First Session
      </Button>
    </div>
  );
};

export default Hero;
