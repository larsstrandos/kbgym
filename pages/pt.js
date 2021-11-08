import Head from "next/head";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-body flex flex-col h-screen justify-between">
            <Head>
                <title>KB Gym Sande - Personlig Trener</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <main className="mb-auto">
                <div className="w-full h-25vh relative bg-blend-darken">
                    <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority className="brightness-50"/>
                    <div className={'absolute w-full h-full flex items-center justify-center text-center px-5'}>
                        <h1 className="relative text-white uppercase font-bold text-xl font-exo after:absolute after:w-full after:left-1/2 after:-translate-x-1/2  after:h-0.5 after:bg-white after:-bottom-1">Vi
                            tilbyr personlig trening på KB Gym Sande</h1>
                    </div>
                </div>
                <div className="container mx-auto px-5 py-10 bg-white">
                    <table className="border-collapse shadow-sm mb-5">
                        <thead>
                            <tr className="border-b-2">
                                <th>PT - 50 minutt</th>
                            </tr>
                        </thead>
                        <tbody className="text-ligth-grey text-base leading-normal">
                            <tr className="border-b-2">
                                <td>1 time</td>
                                <td>750kr pr time</td>
                            </tr>
                            <tr className="border-b-2">
                                <td>5 time</td>
                                <td>720kr pr time</td>
                            </tr>
                            <tr className="border-b-2">
                                <td>10 time</td>
                                <td>700kr pr time</td>
                            </tr>
                            <tr className="border-b-2">
                                <td>20 time</td>
                                <td>670kr pr time</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-ligth-grey text-base mb-2 leading-normal">
                        Prisene gjelde pr time, og dersom du ønsker enda større pakker så kan vi ordne dette.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">
                        Vi tilbyr også PT-duo der fleire kan trene saman, og dermed fordele kostnaden
                    </p>
                    <h2 className="text-lg font-semibold font-exo text-ligth-grey mb-4">ONLINE COACHING</h2>
                    <p className="text-ligth-grey text-base mb-2 leading-normal">
                        I tillegg til fysiske PT-timer tilbyr vi oppfølging via nett. Dette er ein form for oppfølging som har hatt stigande popularitet den siste tida, og er dessutan rimligare enn fysiske PT-timer.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">
                        Her kan du få oppfølging av treningsprogram, som innbærer oppdateringer av program kvar veke, samt tilgang på din PT under heile oppfølginga via epost. I tillegg til program kan ein få oppfølging av kosthold.
                    </p>
                    <table className="border-collapse shadow-sm mb-3">
                        <thead>
                        <tr className="border-b-2">
                            <th colSpan="2">Online Coaching Pakker</th>
                        </tr>
                        </thead>
                        <tbody className="text-ligth-grey text-base leading-normal">
                        <tr className="border-b-2">
                            <td className="pr-5">1 mnd oppfølging av treningsprogram</td>
                            <td>1799kr</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="pr-5">1 mnd oppfølging av kosthold</td>
                            <td>1799kr</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="pr-5">1 mnd oppfølging av kosthold og treningsprogram</td>
                            <td>2799kr</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="pr-5">3 mnd oppfølging av treningsprogram</td>
                            <td>1399kr pr mnd</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="pr-5">3 mnd oppfølging av kosthold</td>
                            <td>1399kr pr mnd</td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="pr-5">3 mnd oppfølging av kosthold og treningsprogram</td>
                            <td>2399kr pr mnd</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
