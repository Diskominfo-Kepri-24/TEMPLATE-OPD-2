import React, { useState } from "react";

const NewsTabs = () => {
  const [activeTab, setActiveTab] = useState("terbaru");

  const latestNews = [
    {
      title: "Siap Berlaga di PON XXI",
      category: "Ekonomi",
      time: "4 jam yang lalu",
      link: "#",
    },
    {
      title: "Pilkada 2024",
      category: "Pemerintahan",
      time: "4 jam yang lalu",
      link: "#",
    },
    {
      title: "Pemkab Bogor Terima Studi Tiru",
      category: "Pemerintahan",
      time: "5 jam yang lalu",
      link: "#",
    },
    {
      title: "Juara Umum di MTQ",
      category: "Sosial",
      time: "6 jam yang lalu",
      link: "#",
    },
    {
      title: "Berita Kelima",
      category: "Politik",
      time: "7 jam yang lalu",
      link: "#",
    },
    {
      title: "Berita Ke6 ",
      category: "Politik",
      time: "7 jam yang lalu",
      link: "#",
    },
  ];

  const popularNews = [
    {
      title: "Berita Populer Pertama",
      category: "Teknologi",
      time: "2 hari yang lalu",
      link: "#",
    },
    {
      title: "Berita Populer Kedua",
      category: "Olahraga",
      time: "1 hari yang lalu",
      link: "#",
    },
    {
      title: "Berita Populer Ketiga",
      category: "Hiburan",
      time: "3 jam yang lalu",
      link: "#",
    },
    {
      title: "Berita Populer Keempat",
      category: "Politik",
      time: "5 jam yang lalu",
      link: "#",
    },
    {
      title: "Berita Populer Kelima",
      category: "Pendidikan",
      time: "6 jam yang lalu",
      link: "#",
    },
    {
      title: "Berita Populer Keenam",
      category: "Pendidikan",
      time: "6 jam yang lalu",
      link: "#",
    },
  ];

  const renderNewsList = (newsList) => {
    return (
      <ul className="p-4">
        {newsList.map((news, index) => (
          <a
            href={news.link}
            key={index}
            className="block border-b p-2 rounded hover:bg-gray-100 transition-colors duration-300"
          >
            <li>
              <h4 className="font-semibold">{news.title}</h4>
              <p className="text-sm text-gray-500">
                {news.category} | {news.time}
              </p>
            </li>
          </a>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="flex justify-center border-b border-gray-300">
        <button
          className={`py-2 px-4 mx-2 ${
            activeTab === "terbaru"
              ? "border-b-2 border-blue-500 font-semibold text-blue-500 uppercase"
              : "bg-gray-200 uppercase"
          }`}
          onClick={() => setActiveTab("terbaru")}
        >
          Terbaru
        </button>
        <button
          className={`py-2 px-4 mx-2 ${
            activeTab === "terpopuler"
              ? "border-b-2 border-blue-500 font-semibold text-blue-500 uppercase"
              : "bg-gray-200 uppercase"
          }`}
          onClick={() => setActiveTab("terpopuler")}
        >
          Terpopuler
        </button>
      </div>
      <div className="mt-4">
        {activeTab === "terbaru"
          ? renderNewsList(latestNews)
          : renderNewsList(popularNews)}
      </div>
    </div>
  );
};

export default NewsTabs;
