import Head from "next/head";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-body flex flex-col h-screen justify-between">
            <Head>
                <title>KB Gym Sande - Personvernerlæring</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="mb-auto">
                <div className="w-full h-25vh relative bg-blend-darken">
                    <Image src="/DSC_5845.jpg" layout="fill" objectFit="cover" priority className="brightness-50"/>
                    <div className={'absolute w-screen h-full flex items-center justify-center'}>
                        <h1 className="relative text-white uppercase font-bold text-xl font-exo after:absolute after:w-full after:left-1/2 after:-translate-x-1/2  after:h-0.5 after:bg-white after:-bottom-1">PERSONVERNERKLÆRING</h1>
                    </div>
                </div>
                <div className="container mx-auto px-5 py-10 bg-white">
                    <p className="text-ligth-grey text-base mb-4 leading-normal">
                        <b>Hva er informasjonskapsler («cookies»)?</b>
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Når du besøker nettsidene våre lagres det ulike data på din enhet via nettleseren din. Dataene kan for eksempel inneholde brukerinnstillinger, informasjon om hvordan du har surfet på våre nettsider, hvilke nettleser du bruker eller hvilke annonser du har blitt vist. Slike «lokalt lagret data» kan brukes til å tilpasse innhold og funksjoner på tjenester til deg, og dermed bidra til å gjøre ditt besøk bedre tilrettelagt og mer meiningsfullt for deg. Informasjonskapsler inneholder ikke direkte identifiserbare data om deg (slik som navn, adresse, telefonnummer og lignende), men informasjon om nettleseren din og aktivitet som har funnet seg gjennom denne.</p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>Personvernærklering</b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>1. Formålet med vår håndsamling av personopplysninger
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">I samband med kundeforhold må vi innhente opplysninger som navn, adresse, organisasjonsnummer og annen nødvendig informasjon. Dette er opplysninger vi utelukkende bruker for å håndtere ditt kundeforhold. Vi tar vare på opplysningene så lenge vi har et kundeforhold. Du har rett til innsyn, retting og sletting av data vi har lagret om deg. Etter endt kundeforhold vil vi ta vare på data så lenge vi ser det hensiktsmessig for å hjelpe deg med eventuell historikk om du skulle ha behov for det.</p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>2. Utlevering av personopplysningar til tredjepart
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Utlevering av personopplysninger vil ikke skje, med mindre det foreligger lovbestemt opplysningsplikt ovenfor offentlige myndigheter.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>3. Kunderegister
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Vårt kunderegister inneholder opplysninger om kunden som selskapsnavn, adresse, informasjon om kontaktpersoner hos kunden, og opplysninger om hvilke tjenester og produkt kunden har avtale om.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>4. Bruk av informasjonskapsler på denne nettsiden
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Google Analytics – Denne informasjonskapselen har som formål å samle informasjon om hvordan besøkende bruker nettsiden. Vi bruker denne informasjonen for å lage rapporter for å bedre nettsiden. Informasjonskapslene anonymiserer all informasjon. De sier noe om antall besøkende på nettsiden, hvor de kommer fra og hvilke sider de besøker.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>5. Kontaktskjema
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Når du fyller ut et kontaktskjema på nettsiden blir informasjon send til <Link href="mailto:kbgym@outlook.com"><a className="text-blue-600 hover:text-opacity-70">kbgym@outlook.com</a></Link> som en e-post. Disse blir loggført som en del av ditt kundeforhold hos oss, og blir lagret så lenge du har et kundeforhold hos oss.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>6. Deling
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Det er mulig å dele artikler på nettsiden i sosiale medier (Facebook, Twitter). Videre handtering av data som blir delt i sosiale medier, blir regulert av din avtale med det aktuelle nettsamfunnet.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>7. Innsyn, retting og sletting
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Etter personopplysningsloven § 18 har den enkelte krav på innsyn i de opplysninger som er registrert om en selv. Innsyn kan en få ved å henvende seg til KB Gym&Coaching AS – epost. <Link href="mailto:kbgym@outlook.com"><a className="text-blue-600 hover:text-opacity-70">kbgym@outlook.com</a></Link> Dersom registrerte opplysninger er uriktige, ufullstendige eller du ønsker å slette dine opplysninger, kan en kreve dette i henhold til personopplysningsloven § 27.
                    </p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal"><b>8. Ansvarlig databehandler
                    </b></p>
                    <p className="text-ligth-grey text-base mb-4 leading-normal">Daglig leder i KB Gym&Coaching AS  er ansvarlig for håndsamling av personopplysninger. Vedkommende er ansvarlig for at det blir gjennomført internkontroller med omsyn til behandling av personopplysninger, og at evt. avvik fra gjeldende lovverk blir meldt inn og rettet. Vi etterstreber til enhver tid å følge gjeldende regelverk for personvern. Har du spørsmål, ta kontakt på <Link href="mailto:kbgym@outlook.com"><a className="text-blue-600 hover:text-opacity-70">kbgym@outlook.com</a></Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
