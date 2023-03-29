import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Slick from "@/components/Slick";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Sectional from "@/components/Sectional";
import Title from "@/components/Title";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Slider Template</title>
        <meta name="description" content="Mosque website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="py-5 my-6">
          <Title />
          <Slick />
          {/* <Hero /> */}

          <Features />
          <Sectional />
          <FAQ />
        </div>
      </Layout>
    </>
  );
}
