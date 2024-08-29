import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function PublikasiSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Array of card data
  const cards = [
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Statistik Angkutan Udara dan Angkutan Laut Provinsi Kepulauan Riau 2023",
      date: "2024-08-29",
      size: "5.31 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "IUOPOIPIOPIOPIPOPIOPIOPIOPIOIOPIOPIOPIO",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Tanaman Perkebunan Provinsi Kepulauan Riau",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Hasil Pencacahan Lengkap Sensus Pertanian 2023 - Tahap II: Usaha Pertanian Perorangan (UTP) Tanaman Perkebunan Provinsi Kepulauan Riau",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "QWEQWEWQEQWEQWEQWEQWEQEQWE",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ASKDJASLKDJKASLDJLASJDKASJDASDASD",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "MNCNVKCNVKVCJNBKJCVBKNVCBJVCNB",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "XNCBVNXCBVXNCVXCVXCVXCVXCVXCV",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "QWEQWEWQEQWEQWEQWEQWEQEQWE",
      date: "2024-08-23",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "ASKDJASLKDJKASLDJLASJDKASJDASDASD",
      date: "2024-08-23",
      size: "9.14 MB",
    },
  ];

  // Handle window resize
  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCardsPerSlide(3); // Desktop
    } else if (width >= 768) {
      setCardsPerSlide(2); // Tablet
    } else {
      setCardsPerSlide(1); // Mobile
    }
  };

  useEffect(() => {
    // Set initial cards per slide
    handleResize();
    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the total number of slides
  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-slate-50 pb-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold  all-first  text-center mb-4">
          Publikasi Statistik
        </h1>
        <h2 className="text-sm md:text-md text-center  all-first  text-gray-600 mb-8">
          Terbitan Publikasi Statistik di Provinsi Kepulauan Riau
        </h2>
        {/* TERBITAN KHUSUS */}
        <div className="mb-10">
          <div className="bg-white p-4 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
            {/* Image */}
            <img
              src="https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // ganti dengan path gambar
              alt="Statistik Sektoral"
              className="w-full md:w-1/3 h-48 md:h-auto object-cover mb-4 md:mb-0"
            />
            {/* Judul dan Deskripsi */}
            <div className="w-full md:w-2/3 p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2  all-first ">
                Statistik Sektoral Provinsi Kepulauan Riau Tahun 2023
              </h3>
              <p className="mb-4  all-second ">
                Oleh: Dinas Komunikasi dan Informatika Kepri
              </p>
              <p className="text-gray-500 text-sm mb-4 ">
                Buku ini berisikan tentang data indikator kinerja yang bersumber
                dari Organisasi Perangkat Daerah yang ada di Lingkungan
                Pemerintahan Provinsi Kepulauan Riau dan beberapa Instansi
                Vertikal, dimana data tersebut telah dianalisis dan diolah dalam
                bentuk tabel / grafik / diagram / peta yang bertujuan untuk
                memudahkan pembaca dalam memahami data. Data pada Buku Statistik
                Sektoral Provinsi Kepulauan Riau ini bersifat dinamis karena
                dapat berubah setiap kurun waktu baik persemester ataupun
                pertahun.
              </p>
              <button className="bg-primary-color text-primary-text hover:bg-second-color px-4 py-2 rounded-lg">
                Lihat Laporan Statistik Ini
              </button>
            </div>
          </div>
        </div>

        {/* Terbitan BPS Kepri */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold all-first">Terbitan BPS Kepri</h3>
            <div className="flex space-x-2">
              <button
                onClick={handlePrevSlide}
                className="bg-gray-200 p-2 rounded"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextSlide}
                className="bg-gray-200 p-2 rounded"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Card Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / cardsPerSlide)
                }%)`,
              }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="
          px-4 
          w-full 
          md:w-1/2  // 50% width for tablets
          lg:w-1/3  // 33.3333% width for desktops
          flex-shrink-0"
                >
                  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between h-full">
                    <div>
                      <img
                        src={card.imgSrc}
                        alt={card.title}
                        className="w-full h-32 object-cover mb-4"
                      />
                      <h4 className="font-bold text-sm mb-2 all-first break-words">
                        {card.title}
                      </h4>
                    </div>
                    <p className="all-third text-xs mt-auto">
                      Terbit: {card.date} • Size: {card.size}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
