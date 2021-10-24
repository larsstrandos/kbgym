import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function footer() {
  return (
    <footer className="w-full py-10 bg-gray-600">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <Link href="https://www.facebook.com/KBgymSande">
            <a>
              <FaInstagram className="" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/kbgymsande/">
            <a>
              <FaFacebook />
            </a>
          </Link>
        </div>
        <p className="text-xs text-gray-100">
          © {new Date().getFullYear()} KB Gym&Coaching AS -{" "}
          <Link href="/personvernerklaering/">
            <a>Personvern og Cookies</a>
          </Link>
        </p>
        <p className="text-xs text-gray-100 ">
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
