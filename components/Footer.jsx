import Link from "next/link";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";

function footer() {
    return (
        <footer>
            <div className="mx-auto w-full py-10 px-2 bg-dark-grey text-center">
                {/* Social Media Icons */}
                <p className="text-white container mx-auto mb-5">Telefon: <Link href="tel:97116715"><a className="text-white hover:text-opacity-70 font-medium"> 97116715</a></Link> / <Link href="tel:94163408"><a className="text-white font-medium hover:text-opacity-70">94163408</a></Link></p>
                <div className="container mx-auto text-center">
                    <div className="flex flex-1 justify-center mb-5">
                        <Link href="https://www.facebook.com/KBgymSande">
                            <a className="bg-fb text-xl text-white mx-1.5 p-2.5  rounded-full shadow-sm">
                                <FaFacebookF/>
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/kbgymsande/">
                            <a className="bg-ig text-xl text-white mx-1.5 p-2.5  rounded-full shadow-sm">
                                <FaInstagram/>
                            </a>
                        </Link>
                        <Link href="mailto:kbgym@outlook.com">
                            <a className="bg-gray-800 text-xl text-white mx-1.5 p-2.5  rounded-full shadow-sm hover:opacity-80">
                                <HiOutlineMail/>
                            </a>
                        </Link>
                    </div>

                    {/* Footer Menu */}

                    <div className="flex flex-1 justify-center uppercase mb-5">
                        <Link href="/">
                            <a className="px-1.5 text-sm text-white font-bold hover:text-opacity-90">
                                Heim
                            </a>
                        </Link>
                        <Link href="/om-senteret/">
                            <a className="px-1.5 text-sm text-white font-bold hover:text-opacity-90">
                                Om Senteret
                            </a>
                        </Link>
                        <Link href="https://booking.xakt.no/Innmelding?org=926187538">
                            <a className="px-1.5 text-sm text-white font-bold hover:text-opacity-90">
                                Medlemskap
                            </a>
                        </Link>
                        <Link href="/pt/">
                            <a className="px-1.5 text-sm text-white font-bold hover:text-opacity-90">
                                PT
                            </a>
                        </Link>
                    </div>

                    {/* Copyright and Made by Section */}
                    <p className="text-xs text-gray-100 font-normal">
                        © {new Date().getFullYear()} KB Gym&Coaching AS -{" "}
                        <Link href="/personvernerklaering/">
                            <a>Personvern og Cookies</a>
                        </Link>
                    </p>
                    <p className="text-xs text-gray-100 font-normal">
                        Drift og design:{" "}
                        <Link href="https://strandos-ikt.no">
                            <a>Strandos IKT</a>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default footer;
