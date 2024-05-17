import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesPage from "../../components/Service";
import Head from "next/head";

import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Үйлчилгээ</title>
      </Head>
      <Navbar />

      <ServicesPage/>
      <Footer />
    </div>
  );
}
