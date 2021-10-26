import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function footer() {
  return (
    // <link rel="stylesheet" id="monsterrat_font-css" href="https://fonts.googleapis.com/css?family=Montserrat%3A300%2C300i%2C400%2C500%2C600&amp;display=swap&amp;ver=5.8.1" type="text/css" media="all">
    <footer className="mt-auto w-full py-10 px-2 bg-gray-600 ">
      {/* Social Media Icons */}
      <div className="container mx-auto text-center">
        <div className="flex flex-1 justify-center mb-5">
          <Link href="https://www.facebook.com/KBgymSande">
            <a className="bg-fb text-xl text-white mx-1.5 p-2.5  rounded-full shadow-sm">
              <FaFacebookF />
            </a>
          </Link>
          <Link href="https://www.instagram.com/kbgymsande/">
            <a className="bg-ig text-xl text-white mx-1.5 p-2.5  rounded-full shadow-sm">
              <FaInstagram />
            </a>
          </Link>
          <Link href="mailto:kbgym@outoo.com">
            <a className="bg-gray-800 text-xl text-white mx-1.5 p-2.5  rounded-full shadow-sm hover:opacity-80">
              <HiOutlineMail />
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
          <Link href="/medlemskap/">
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
    </footer>
  );
}

export default footer;
