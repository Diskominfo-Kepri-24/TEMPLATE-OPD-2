import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Statistik Angkutan Udara dan Angkutan Laut Provinsi Kepulauan Riau 2023",
    date: "2024-08-29",
    agency: "Biro BKD Kepri",
    size: "5.31 MB",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "IUOPOIPIOPIOPIPOPIOPIOPIOPIOIOPIOPIOPIO",
    date: "2024-08-23",
    agency: "Biro Informasi",
    size: "9.14 MB",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title:
      "Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Tanaman Perkebunan Provinsi Kepulauan Riau",
    date: "2024-08-23",
    agency: "Biro Statistik",
    size: "9.14 MB",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "QWEQWEWQEQWEQWEQWEQWEQEQWE",
    date: "2024-08-23",
    agency: "Biro Umum",
    size: "9.14 MB",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ASKDJASLKDJKASLDJLASJDKASJDASDASD",
    date: "2024-08-23",
    agency: "Biro Hukum",
    size: "9.14 MB",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "MNCNVKCNVKVCJNBKJCVBKNVCBJVCNB",
    date: "2024-08-23",
    agency: "Biro Perencanaan",
    size: "9.14 MB",
  },
];

const timeAgo = (date) => {
  const now = new Date();
  const then = new Date(date);
  const diff = Math.floor((now - then) / (1000 * 60 * 60));
  if (diff < 1) return "Just now";
  if (diff < 24) return `${diff} hours ago`;
  return `${Math.floor(diff / 24)} days ago`;
};

export default function PengumumanHomePage() {
  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Pengumuman Resmi
        </h1>
        <h2 className="text-lg md:text-xl text-center text-gray-600 mb-8">
          Lihat Pengumuman Resmi Dari OPD Provinsi Kepulauan Riau
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 break-words">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {new Date(card.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-gray-600 text-sm mb-2">{card.agency}</p>
                <p className="text-gray-500 text-xs">
                  {timeAgo(card.date)} | {card.size}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            Lihat Pengumuman Lainya
          </button>
        </div>
      </div>
    </div>
  );
}
