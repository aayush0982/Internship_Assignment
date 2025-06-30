import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="mt-32 mb-32 w-[80vw] mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start text-[#1E2938]">
      
      {/* Image Section */}
      <div className="bg-[url('/assets/dr.png')] bg-cover bg-center h-[60vh] rounded-2xl md:h-[80vh] w-full md:w-[50vw] md:rounded-tr-2xl md:rounded-br-2xl shadow-2xl " />

      {/* Text Section */}
      <div className="w-full md:w-[60vw] space-y-5">
        
        {/* Intro */}
        <p className="italic text-lg text-gray-700">Nice to meet you</p>
        <h2 className="text-2xl md:text-4xl font-bold">I’m Dr. Serena Blake</h2>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          Alternative practitioner, speaker, and compassionate therapist.  
          My own life story and client experiences have shown me that we all carry an inner power to heal and grow. Since then, I've lived by one message: 
          <strong> “When we follow the path of our heart, our possibilities become limitless.”</strong>
        </p>

        {/* Mission */}
        <div>
          <h3 className="text-lg md:text-xl font-bold">My Mission</h3>
          <p className="text-sm md:text-base mt-2 text-justify">
            My mission is to use my experiences and training to inspire others to find healing, purpose, and resilience — no matter what they’re facing.
          </p>
        </div>

        {/* Office Hours */}
        <div className="pt-4 space-y-1">
          <h3 className="text-lg md:text-xl font-bold">Office Hours</h3>
          <ul className="list-disc list-inside text-sm md:text-base">
            <li>In-person: <strong>Tue & Thu, 10 AM – 6 PM</strong></li>
            <li>Zoom: <strong>Mon, Wed & Fri, 1 PM – 5 PM</strong></li>
          </ul>
        </div>

        {/* Experience */}
        <div className="pt-2">
          <h3 className="text-lg md:text-xl font-bold">Experience</h3>
          <p className="text-sm md:text-base">8 years of practice, 500+ sessions</p>
        </div>

        {/* CTA Button */}
        <Button className="mt-6 px-6 py-6 bg-[#1E2938] text-white font-semibold cursor-pointer rounded-lg hover:bg-[#334155] transition">
          Know more about me
        </Button>
      </div>
    </div>
  );
};

export default About;
