import { useState, useEffect, useRef } from "react";

const cards = [
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kota Tanjungpinang",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kabupaten Anambas",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kabupaten Karimun",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kabupaten Lingga",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kota Batam",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kabupaten Natuna",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kabupaten Batu",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kabupaten 6",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kabupaten Buaya",
  },
];

export default function WisataBudataHomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const startX = useRef(0);
  const endX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= cards.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 3 : prevIndex - 3
    );
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      nextSlide();
    }

    if (startX.current - endX.current < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Wisata & Budaya
        </h1>
        <h2 className="text-sm md:text-md text-center text-gray-600 mb-8">
          Ayo berkunjung ke Kepri! Banyak cagar budaya, kuliner, dan objek
          menarik lainnya.
        </h2>
        <div
          className="relative w-full overflow-hidden"
          ref={slideRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 gap-x-4"
            style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 flex flex-col items-center justify-center relative group overflow-hidden"
              >
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-40 md:h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-opacity duration-500"></div>
                <div className="absolute bottom-1/2 right-2 transform translate-y-1/2 bg-primary-color text-primary-text px-2 py-1  text-sm font-semibold">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
