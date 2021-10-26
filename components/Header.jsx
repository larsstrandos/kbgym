import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-gray-700">
      <div className="container mx-auto px-8 py-4">
        <nav className="flex items-center justify-between">
          <div className="relative w-14 h-14">
            <Image
              src="/img/KB-Gym-Logo.svg"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          {/* Mobile Navigation Hamburger */}
          <div className="relative w-7 h-7 md:hidden">
            <div className="hamburger-inner h-1 w-full bg-white before:bg-white after:bg-white"></div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden">
          <Link href="/">
            <a>Heim</a>
          </Link>
          <Link href="/om-senteret/">
            <a>Om Senteret</a>
          </Link>
          <Link href="/medlemskap/">
            <a>Medlemskap</a>
          </Link>
          <Link href="/pt/">PT</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
