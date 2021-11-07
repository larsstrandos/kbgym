import Head from "next/head";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Image from "next/image";

import Link from "next/link"

export default function Home() {
    return (
        <div className="font-body flex flex-col h-screen justify-between">
            <Head>
                <title>KB Gym Sande</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="mb-auto">
                <div className="h-55vh w-full relative bg-blend-darken">
                    <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority className="brightness-50"/>
                    <div className={'absolute h-full w-full flex items-center justify-center'}>
                        <h1 className="text-white uppercase font-bold text-xl font-exo">Velkommen til KB Gym Sande</h1>
                    </div>
                </div>
                <div className="">
                    <div className="relative container mx-auto text-center py-10 px-4">
                        <h2 className="text-gray-800 uppercase font-exo text-lg mb-6">Kjøp medlemskap Online</h2>
                        <p className="text-ligth-grey text-base mb-6">Trykk her for meir informasjon om medlemskap og innmelding</p>
                        <Link href="https://booking.xakt.no/Innmelding?org=926187538" passHref>
                            <button className="px-5 py-3 mb-6 rounded bg-blue-500 relative font-exo uppercase text-white text-base">Kjøp Medlemskap</button>
                        </Link>
                        <p className="text-ligth-grey text-sm">Etter innmelding ber vi deg kontakte oss for utlevering av medlemskort.</p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
