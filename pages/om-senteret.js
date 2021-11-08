import Head from "next/head";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-body flex flex-col h-screen justify-between">
            <Head>
                <title>KB Gym Sande - Om Senteret</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="mb-auto">
                <div className="w-full h-25vh relative bg-blend-darken">
                    <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority className="brightness-50"/>
                    <div className={'absolute w-full h-full flex items-center justify-center'}>
                        <h1 className="relative text-white uppercase font-bold text-xl font-exo after:absolute after:w-full after:left-1/2 after:-translate-x-1/2  after:h-0.5 after:bg-white after:-bottom-1">Om Senteret</h1>
                    </div>
                </div>
                <div className="container mx-auto px-5 py-10 bg-white">
                    <p className="text-ligth-grey text-base mb-4 leading-normal">
                        KB Gym Sande er eit ubemanna senter, som held til ved siden av Spar Sande, rett over veien for bussholdeplassen. På KB Gym Sande så finner du alt du trenger for å ha ei god treningsøkt, og komme inn i gode treningsrutiner. Vi har eit godt utvalg av kondisjonsapparater, styrketreningsapparater og eige frivektsrom!
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">
                        Utstyret vårt er delevis produsert i Norge hos den kjente utstyrslevrandøren GYM2000, men det aller meste av styrketreningsapparatene er frå merke Panatta, som har vert ein kvalitetsprodusent av treningsutstyr i ei årrekke.
                    </p>
                    <p className="text-ligth-grey text-base leading-normal mb-4">
                        Utover treningsfasiliteter så finn du både herre og dame garderober med dusj og skap, sånn at du kan legge frå deg eigendeler i garderoben.
                    </p>
                    <p className="text-ligth-grey text-base leading-normal mb-4">
                        Vi tilbyr også Personlig trening, meir informasjon om dette <Link href="/pt/"><a className="text-blue-600 hover:text-opacity-70">finn du her.</a></Link>
                    </p>

                    <p className="text-ligth-grey text-base leading-normal mb-4">
                        Vi trur på minst mulig forskjeller i medlemskapa våre, og for å gjer det enkelt for deg så har vi kun dei viktigaste variantene av medlemskap, til ein konkurransedyktig pris. For å lese meir om medlemskapa våre kan du <Link href="https://booking.xakt.no/Innmelding?org=926187538"><a className="text-blue-600 hover:text-opacity-70">trykke her.</a></Link>
                    </p>
                    <p className="text-ligth-grey text-base leading-normal">
                        Har du ellers spørsmål om treningsenteret eller våre tilbud kan du kontakte oss pr epost til <Link href="mailto:kbgym@outlook.com"><a className="text-blue-600 hover:text-opacity-70">kbgym@outlook.com</a></Link>, eller ringe <Link href="tel:97116715"><a className="text-blue-600 hover:text-opacity-70">97116715</a></Link> / <Link href="tel:94163408"><a className="text-blue-600 hover:text-opacity-70">94163408</a></Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
