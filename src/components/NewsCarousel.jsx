import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaClock, FaUser } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const newsData = [
  {
    title: "PEMDAKAB BOGOR IMBAU PENGGUNA JALAN GUNAKAN JALUR ALTERNATIF",
    category: "Sosial",
    image:
      "https://images.unsplash.com/photo-1724513786070-e1d446f94f03?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Diskominfo Kabupaten Bogor",
    date: "6 jam yang lalu",
    summary: "Deskripsi singkat berita pertama...",
  },
  {
    title:
      "ASDKAJSDLASKD JLAKSJDLASDJKQOWI EUOQWIEUQOWIEJLWQKJDL AKSJDLASKDJASLDJASL",
    category: "Sosial",
    image:
      "https://images.unsplash.com/photo-1707061853290-746300f034e5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Diskominfo Kabupaten Bogor",
    date: "6 jam yang lalu",
    summary: "Deskripsi singkat berita pertama...",
  },
  // Other news items...
];

const NewsCarousel = () => {
  return (
    <div className="w-full h-[500px] max-h-[500px] bg-white shadow-xl rounded-lg overflow-hidden">
      <Carousel
        responsive={responsive}
        swipeable
        draggable
        showDots
        ssr
        infinite
        keyBoardControl
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        className="h-full"
        dotListClass="custom-dot-list-style"
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        autoPlay
        autoPlaySpeed={3000}
      >
        {newsData.map((news, index) => (
          <div
            key={index}
            className="relative h-full flex flex-col justify-end"
          >
            {/* Image Section */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />

            {/* Overlay Section */}
            <div className="absolute inset-x-0 bottom-10 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-center transition duration-300 ease-in-out hover:bg-opacity-80 ">
              <div className="backdrop-blur-lg bg-black/30 p-2">
                {/* Category */}
                <span className="text-sm text-white px-2 py-1 rounded-md mb-2 inline-block">
                  {news.category.toUpperCase()}
                </span>
                {/* Title with Blur Effect */}
                <h3 className="text-xl font-bold text-white leading-tight p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                  {news.title.length > 60
                    ? `${news.title.substring(0, 60)}...`
                    : news.title}
                </h3>
                {/* Meta Information with Blur Effect */}
                <div className="flex items-center text-white text-xs mt-2 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                  <FaClock className="mr-1" />
                  <span>{news.date}</span>
                  <span className="mx-2">|</span>
                  <FaUser className="mr-1" />
                  <span>{news.author}</span>
                </div>
                {/* Read More Button */}
                <button className="mt-2 text-sm bg-primary-color text-primary-text hover:bg-second-color  px-4 py-2 rounded-lg font-semibold shadow-lg transition duration-200 ease-in-out transform hover:scale-105">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
