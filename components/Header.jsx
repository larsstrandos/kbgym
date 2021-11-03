import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import ActiveLink from "./ActiveLink";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-full my-1 rounded-full bg-white transition ease transform duration-300`;

    return (
        <header className="bg-dark-grey">
            <div className="mx-auto px-8 py-4">
                <nav className="flex items-center justify-between">
                    <Link href="/">
                        <a>
                            <div className="relative w-14 h-14 z-50">
                                <Image
                                    src="/img/KB-Gym-Logo.svg"
                                    layout="fill"
                                    objectFit="cover"
                                    priority
                                />
                            </div>
                        </a>
                    </Link>
                    {/* Mobile Navigation Hamburger */}
                    <button
                        className="flex flex-col h-9 w-8 justify-center items-center group z-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-70"
                                    : "opacity-100 group-hover:opacity-70"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-70"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-70"
                                    : "opacity-100 group-hover:opacity-70"
                            }`}
                        />
                    </button>
                </nav>

                {/* Mobile Navigation Menu */}
                <div
                    className={`md:hidden fixed top-0 left-0 bg-dark-grey flex flex-col transition-opacity w-screen duration-300 h-screen ${
                        isOpen ? "opacity-100 z-40" : "opacity-0 -z-1"
                    }`}
                >
                    <ul className="absolute top-1/2 -translate-y-1/2 right-8 flex flex-col text-right uppercase text-white font-bold text-sm font-exo">
                        <Link href="/">
                            <li className={`relative py-7 transition-all duration-300 ${
                                isOpen ? " translate-x-0" : "-translate-x-5"}`}>
                                <ActiveLink href="/">
                                    <a
                                        className={`relative cursor-pointer hover:opacity-70`}
                                    >
                                        Heim
                                    </a>
                                </ActiveLink>
                            </li>
                        </Link>
                        <Link href="/om-senteret/">
                            <li className={`relative py-7 transition-all duration-300 ${
                                isOpen ? " translate-x-0" : "-translate-x-5"}`}>
                                <ActiveLink href="/om-senteret">
                                    <a
                                        className={`relative cursor-pointer hover:opacity-70`}
                                    >
                                        Om Senteret
                                    </a>
                                </ActiveLink>
                            </li>
                        </Link>
                        <Link href="/medlemskap/">
                            <li className={`relative py-7 transition-all duration-300 ${
                                isOpen ? " translate-x-0" : "-translate-x-5"}`}>
                                <ActiveLink href="/medlemskap">
                                    <a
                                        className={`relative cursor-pointer hover:opacity-70`}
                                    >
                                        Medlemskap
                                    </a>
                                </ActiveLink>
                            </li>
                        </Link>
                        <Link href="/pt/">
                            <li className={`relative py-7 transition-all duration-300 ${
                                isOpen ? " translate-x-0" : "-translate-x-5"}`}>
                                <ActiveLink href="/pt">
                                    <a
                                        className={`relative cursor-pointer hover:opacity-70`}
                                    >
                                        Personleg trenar
                                    </a>
                                </ActiveLink>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    )
        ;
}

export default Header;
