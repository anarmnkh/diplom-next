import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SalaryInfo from "../../../components/SalaryInfo";
import YearsCheckboxes from "../../../components/YearsCheckboxes";
import Image from "next/image";
import bgImg from "../../../public/bg2.jpg";
import Head from "next/head";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Тэтгэвэр төлөвлөлт</title>
      </Head>
      <Navbar />
      <Image className="w-full absolute h-screen" src={bgImg} alt="/" layout="fill" objectPosition="center" />
      <div className="container mx-auto py-24  relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div>
            <YearsCheckboxes />
          </div>
          <div>
            <SalaryInfo />
          </div>
        </div>
      </div>
      <div className="relative">
        <Footer/>
      </div>
      
    </div>
  );c
}
