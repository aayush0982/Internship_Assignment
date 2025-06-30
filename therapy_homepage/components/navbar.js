"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-gray-800 text-white mb-16'>
      <div className='flex justify-between items-center p-4'>
        <p className='text-lg font-bold'>Calm Minds</p>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className='hidden md:flex items-center space-x-6'>
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>Services</p>
          <p className='cursor-pointer'>About</p>
          <p className='cursor-pointer'>Resources</p>
          <p className='cursor-pointer'>Contact</p>
          <p className='border-2 px-2 py-1 rounded-md bg-white text-[#1E2938] font-bold cursor-pointer'>
            Book a Session
          </p>
        </div>
      </div>

      {/* Mobile menu*/}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center px-4 space-y-3 pb-4'>
          <p className='cursor-pointer'>Home</p>
          <p className='cursor-pointer'>Services</p>
          <p className='cursor-pointer'>About</p>
          <p className='cursor-pointer'>Resources</p>
          <p className='cursor-pointer'>Contact</p>
          <p className='border-2 px-2 py-1 rounded-md bg-white text-[#1E2938] font-bold cursor-pointer'>
            Book a Session
          </p>
        </div>
      )}
    </div>
  );
}

