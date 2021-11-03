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
                <div className="w-full h-55vh relative bg-blend-darken">
                    <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority className="brightness-50"/>
                    <div className={'absolute w-screen h-full flex items-center justify-center'}>
                        <h1 className="text-white uppercase font-bold text-xl font-exo">Velkommen til KB Gym Sande</h1>
                    </div>
                </div>
                <div className="bg-ligth-grey">
                    <div className="relative container mb-auto text-center py-10 px-4">
                        <h2 className="text-white uppercase font-exo text-lg mb-6">Kjøp medlemskap Online</h2>
                        <p className="text-white text-sm mb-6">Trykk her for meir informasjon om medlemskap og innmelding</p>
                        <Link href="https://booking.xakt.no/Innmelding?org=926187538" passHref>
                            <button className="px-5 py-3 rounded bg-blue-500 relative font-exo uppercase text-white text-base">Kjøp Medlemskap</button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
