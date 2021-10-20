import Head from "next/head";
import Footer from "./../components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-70vh relative">
        <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority />
      </div>
      <Footer />
    </div>
  );
}
