import { useState, useEffect } from "react";

export default function Navbar() {
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // If the screen size is larger than the xl breakpoint, close the sidebar
      if (window.innerWidth >= 1280) {
        setBurger(false);
      }
    };

    // Attach event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between fixed items-center p-2 px-5 bg-[#b78a00] w-full shadow-md z-50 top-0">
      {/* Title */}
      <p className="text-black font-bold font-rubik">Dharmasena A.A.</p>

      {/* Burger Button */}
      <div className="xl:hidden">
        <button onClick={() => setBurger(!burger)}>
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden xl:flex p-2 gap-5 rounded-xl">
        <a href="#hero" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
          About
        </a>
        <a href="#workexp" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
          Experience
        </a>
        <a href="#skills" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
          Skills
        </a>
        <a href="#testimonials" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
          Testimonials
        </a>
        <a href="#contacts" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
          Contact
        </a>
      </div>

      {/* Socials */}
      <div className="hidden xl:flex gap-3">
        <a href="#https://www.linkedin.com/in/dharmasena-aji-024765234/">
          <img src="/icons/linkedin.svg" alt="linkedin" className="w-8" />
        </a>
        <a href="#https://www.instagram.com/urenunknacdb/">
          <img src="/icons/instagram.svg" alt="instagram" className="w-8" />
        </a>
        <a href="#https://github.com/KaonashiMFG">
          <img src="/icons/github.svg" alt="github" className="w-8" />
        </a>
      </div>

      {/* Burger Menu (Mobile Drawer) */}
      <div
        className={`fixed top-0 right-0 h-full bg-navbar w-64 shadow-lg z-40 transform ${
          burger ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setBurger(false)}
          className="absolute top-5 right-5 text-black text-2xl font-bold"
        >
          ×
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-start gap-5 p-5 mt-20">
          <a href="#hero" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
            About
          </a>
          <a href="#workexp" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
            Experience
          </a>
          <a href="#skills" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
            Skills
          </a>
          <a href="#testimonials" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
            Testimonials
          </a>
          <a href="#contacts" className="onHover font-rubik font-normal border-2 px-3 border-transparent">
            Contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-3 p-5 mt-5">
          <a href="https://www.linkedin.com/in/dharmasena-aji-024765234/">
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-8" />
          </a>
          <a href="https://www.instagram.com/urenunknacdb/">
            <img src="/icons/instagram.svg" alt="instagram" className="w-8"/>
          </a>
          <a href="https://github.com/KaonashiMFG">
            <img src="/icons/github.svg" alt="github" className="w-8" />
          </a>
        </div>
      </div>

      {/* Overlay (close the menu when clicking outside) */}
      {burger && (
        <div
          onClick={() => setBurger(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </nav>
  );
}
