export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Background Image */}
        <img
          src="/bg-kepri.jpg"
          alt="Kepri"
          className="w-full h-screen object-cover"
        />

        {/* Dark and Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-0"></div>

        {/* Main Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            Selamat Datang di Portal Kepulauan Riau
          </h1>
        </div>

        {/* Wave SVG */}
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
    </>
  );
}
