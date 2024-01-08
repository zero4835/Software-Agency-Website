import Image from "next/image";
import { Inter } from "next/font/google";
import Masthead from "@/components/masthead";
import AboutUs from "@/components/aboutus";
import Head from "next/head";
import Skills from "@/components/skill";
import Works from "@/components/works";
import TrustedBy from "@/components/trustedby";
import ContactUs from "@/components/cantactus";
import Footer from "@/components/footer";
import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

const fetcher = (input: any, init?: any) =>
  fetch(input, init).then(res => res.json())

export default function Home() {
  const { data } = useSWR("api/stats", fetcher);
  return (
    <div className="">
      <Head>
        <title>Natsusaka</title>
        <meta name="description" content="Next.js pratice" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <div className="font-bold text-9xl"></div>
      <Masthead />
      <AboutUs />
      <Skills commits={data?.commits} downloads={data?.downloads} />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  );
}
