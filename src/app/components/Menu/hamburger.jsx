"use client"

import { useState } from "react";
import Link from "next/link";
import { indie_flower } from '@/app/fonts/fonts'; 

const HamburgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to handle closing when clicking outside the menu
  const handleOverlayClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className={`${indie_flower.className} fixed top-4 left-4 z-50`}>
      <div className="relative flex items-center justify-between p-4 bg-pink-600 rounded-md shadow-lg">
        <nav>
          <section className="flex">
            <div
              className="space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            {isNavOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black bg-opacity-50"
                  onClick={handleOverlayClick}
                ></div>
                <div className="fixed inset-y-0 left-0 z-50 w-64 bg-pink-600 rounded-md shadow-lg p-8">
                  <div
                    className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer"
                    onClick={() => setIsNavOpen(false)}
                    aria-label="Close Menu"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <ul className="flex flex-col items-start justify-between min-h-[250px] text-white">
                    <li className="border-b border-gray-400 my-4 uppercase">
                      <Link href="/" onClick={() => setIsNavOpen(false)}>
                        Home
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-4 uppercase">
                      <Link href="#about" onClick={() => setIsNavOpen(false)}>
                        About Me
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-4 uppercase">
                      <Link href="#Working" onClick={() => setIsNavOpen(false)}>
                        Working With Me
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-4 uppercase">
                      <Link href="#Motivators_Deal_Breakers" onClick={() => setIsNavOpen(false)}>
                        Motivators & Dealbreakers
                      </Link>
                    </li>
                    <li className="border-b border-gray-400 my-4 uppercase">
                      <Link href="#Perceptions" onClick={() => setIsNavOpen(false)}>
                         Perceptions & Misunderstandings
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </section>
        </nav>
      </div>
    </div>
  );
}

export default HamburgerMenu;
