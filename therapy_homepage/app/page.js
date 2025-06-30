import About from "@/components/about";
import Faq from "@/components/faq";
import GetinTouch from "@/components/getintouch";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";


export default function Home() {
  return (
    <div>
      <div className="bg-[#F2F0E8] pb-16">
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className="bg-[#F2F0E8] px-8 py-8 md:px-16 md:py-16">
        <Services />
      </div>
      <GetinTouch />
      <div className="bg-[#F2F0E8] px-8 py-8 md:px-16 md:py-16">
        <Faq />
      </div>

      {/* Footer Section */}
      <footer className="text-[#1E2938] text-center py-10 px-4">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Dr. Serena Blake, PsyD</h2>

        {/* Location */}
        <p className="text-sm md:text-base mb-1">
          1287 Maplewood Drive, Los Angeles, CA 90026
        </p>

        {/* Contact Info */}
        <p className="text-sm md:text-base mb-1">Phone: (323) 555-0192</p>
        <p className="text-sm md:text-base mb-1">
          Email:{" "}
          <a
            href="mailto:serena@blakepsychology.com"
            className="underline hover:text-[#334155]"
          >
            serena@blakepsychology.com
          </a>
        </p>

        {/* Office Hours */}
        <p className="mt-4 font-semibold text-base md:text-lg">Office Hours</p>
        <p className="text-sm md:text-base mb-1">
          In-person: Tue & Thu, 10 AM–6 PM
        </p>
        <p className="text-sm md:text-base mb-1">
          Virtual (Zoom): Mon, Wed & Fri, 1 PM–5 PM
        </p>

        {/* Copyright */}
        <p className="mt-4 text-xs md:text-sm text-[#475569]">
          © 2025 Dr. Serena Blake, PsyD. All rights reserved.
        </p>
      </footer>


    </div>
  );
}
