import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-full my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <header className="bg-gray-700">
      <div className="mx-auto px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="relative w-14 h-14 z-50">
            <Image
              src="/img/KB-Gym-Logo.svg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          {/* Mobile Navigation Hamburger */}
          <button
            className="flex flex-col h-9 w-8 justify-center items-center group z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 h-screen bg-gray-700 flex flex-col container z-40 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute top-1/2 -translate-y-3/4 flex flex-col text-right container uppercase text-white font-bold text-sm font-exo container px-8">
            <Link href="/">
              <a
                className={`py-6 transition-transform duration-500 hover: ${
                  isOpen ? "translate-x-0" : "-translate-x-5"
                }`}
              >
                Heim
              </a>
            </Link>
            <Link href="/om-senteret/">
              <a
                className={`py-6 transition-transform duration-500 ${
                  isOpen ? "translate-x-0" : "-translate-x-5"
                }`}
              >
                Om Senteret
              </a>
            </Link>
            <Link href="/medlemskap/">
              <a
                className={`py-6 transition-transform duration-500 ${
                  isOpen ? "translate-x-0" : "-translate-x-5"
                }`}
              >
                Medlemskap
              </a>
            </Link>
            <Link href="/pt/">
              <a
                className={`relative py-6 transition-transform duration-500 after:absolute after:w-full after:left-1/2 after:-translate-x-1/2  after:h-0.5 after:bg-white ${
                  isOpen ? "translate-x-0" : "-translate-x-5"
                }`}
              >
                Personleg trenar
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
