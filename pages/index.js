import Head from "next/head";
import Footer from "./../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>KB Gym Sande</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          id="monsterrat_font-css"
          href="https://fonts.googleapis.com/css?family=Montserrat%3A300%2C300i%2C400%2C500%2C600&amp;display=swap&amp;ver=5.8.1"
          type="text/css"
          media="all"
        ></link>
      </Head>
      <div className="w-full h-70vh relative">
        <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority />
      </div>
      <Footer />
    </div>
  );
}
