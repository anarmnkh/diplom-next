"use npm install "
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/News";

import Head from "next/head";


export default function Home() {
  

  return (
    <div>
      <Head>
        <title>Нүүр хуудас</title>
      </Head>
      <Navbar />

      <Hero/>
      <News/>
      
      <Footer />
    </div>
  );
}


