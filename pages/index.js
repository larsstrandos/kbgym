import Head from "next/head";
import Footer from "./../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-body flex flex-col h-screen justify-between">
      <Head>
        <title>KB Gym Sande</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mb-auto">
        <div className="w-full h-70vh relative">
          <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority />
        </div>
      </main>
      <Footer />
    </div>
  );
}
