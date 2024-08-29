import React from "react";
import { TypewriterEffect } from "../components/ui/TypewriterEffectSmooth";
import { PlaceholdersAndVanishInput } from "../components/ui/PlaceholdersAndVanishInput";
import KominfoWidget from "../components/KominfoWidget";
import NewsCarousel from "../components/NewsCarousel";
import NewsTabs from "../components/NewsTabs";
import PublikasiSection from "../components/PublikasiSection";
import PengumumanHomePage from "../components/PengumumanHomePage";
import WisataBudataHomePage from "../components/WisataBudataHomePage";

export default function Home() {
  const words = [
    { text: "Selamat " },
    { text: "Datang " },
    { text: "di " },
    { text: "Portal " },
    { text: "Kepulauan " },
    { text: "Riau" },
  ];

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <div className="relative">
        <img
          src="/bg-kepri.jpg"
          alt="Kepri"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-0"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
          <h1 className="text-white text-lg lg:text-4xl font-bold mb-4">
            <TypewriterEffect words={words} />
          </h1>
          <p className="text-white dark:text-neutral-200 text-xs mb-10">
            Temukan informasi publik terkini dari Pemerintah Daerah Provinsi
            Kepulauan Riau
          </p>
          <div className=" w-3/4 lg:w-1/2">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-10 left-0 w-full"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FAFAFA"
            fillOpacity="1"
            d="M0,224L120,234.7C240,245,480,267,720,266.7C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      {/* Berita Section */}
      <div className="relative bg-slate-50">
        <div className="container bg-white mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20 -translate-y-1/3 rounded-2xl shadow-lg">
          {/* Column 1: Kominfo Widget */}
          <div className="rounded-lg h-full min-h-[200px] max-h-[500px]">
            <KominfoWidget />
          </div>

          {/* Column 2: News Carousel */}
          <div className=" rounded-lg h-full min-h-[200px] max-h-[500px]">
            <NewsCarousel />
          </div>

          {/* Column 3: News Tabs */}
          <div className="ounded-lg h-full min-h-[200px] max-h-[500px]">
            <NewsTabs />
          </div>
        </div>
      </div>

      {/* SECTION PUBLIKASI */}

      <PublikasiSection />
      <PengumumanHomePage />
      <WisataBudataHomePage />
    </>
  );
}
