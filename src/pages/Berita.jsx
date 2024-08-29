import { Link } from "react-router-dom";

export default function Berita() {
  const beritaUtama = {
    image:
      "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan path gambar Anda
    title:
      "Perputaran Ekonomi di West Java Festival 2024 Capai Angka Fantastis!",
    category: "Ekonomi",
    date: "Rabu, 28 Agustus 2024",
    author: "Tim Rilis Humas Jabar",
  };

  const beritaList = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Siskeudes Link: Langkah Menuju Transaksi Non-Tunai di Desa-Desa Garut",
      category: "Ekonomi",
      time: "13 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pemkab Garut Luncurkan Program SILABU, Dorong Potensi Bambu",
      category: "Ekonomi",
      time: "15 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Disdagin Raih Penghargaan Sebagai Pendorong Promosi UMKM dan Produk Lokal",
      category: "Ekonomi",
      time: "16 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:
        "Rakornas Pengendalian Inflasi Daerah Tahun 2024, Strategi Stabilkan Harga",
      category: "Ekonomi",
      time: "18 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pemda Kota Bandung dan LPP Ariyanti Gelar Pelatihan Tata Busana",
      category: "Ekonomi",
      time: "20 jam yang lalu",
    },
  ];

  const beritaEkonomi = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pengembangan Produk UMKM, Solusi Ekonomi Berkelanjutan",
      category: "Ekonomi",
      time: "12 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Inovasi Pertanian untuk Meningkatkan Kesejahteraan Petani Lokal",
      category: "Ekonomi",
      time: "14 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Potensi Ekspor Produk Lokal ke Pasar Internasional Meningkat",
      category: "Ekonomi",
      time: "17 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kebijakan Fiskal yang Efektif dalam Mengatasi Inflasi",
      category: "Ekonomi",
      time: "19 jam yang lalu",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Kerjasama Antar Daerah untuk Meningkatkan Kemandirian Ekonomi",
      category: "Ekonomi",
      time: "21 jam yang lalu",
    },
  ];

  return (
    <>
      <div className="bg-slate-50 pb-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-bold text-primary-color text-3xl">
              Publikasi Artikel / Berita Terbaru
            </h1>

            {/* Berita */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Kolom pertama */}
              <div className="lg:col-span-2">
                {/* Berita paling atas */}
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <img
                    src={beritaUtama.image}
                    alt="Berita Utama"
                    className="w-full h-80 object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <span className="text-sm uppercase">
                      Topik Hangat di {beritaUtama.category}
                    </span>
                    <h2 className="text-2xl font-bold">{beritaUtama.title}</h2>
                    <p className="text-sm mt-2">
                      {beritaUtama.date} | Penulis: {beritaUtama.author}
                    </p>
                    <Link to={`/berita/1`}>
                      <button className="bg-primary-button text-primary-text mt-4 py-2 px-4 rounded">
                        Baca Selengkapnya
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Berita setelah paling atas */}
                <div className="mt-6 space-y-10">
                  {beritaList.map((berita, index) => (
                    <div
                      key={index}
                      className="flex  justify-center items-center rounded-lg overflow-hidden"
                    >
                      <img
                        src={berita.image}
                        alt="Berita"
                        className="w-1/4 h-full  rounded-lg object-cover"
                      />
                      <div className="p-4 flex-1">
                        <h3 className="text-lg font-semibold">
                          {berita.title}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {berita.category} | {berita.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kolom kedua */}
              <div className="space-y-10">
                {/* Berita berdasarkan kategori Ekonomi */}
                <div>
                  <h3 className="font-semibold text-xl mb-4">
                    Berita Terbaru di Ekonomi
                  </h3>
                  {beritaEkonomi.map((berita, index) => (
                    <div
                      key={index}
                      className="flex rounded-lg justify-center items-center overflow-hidden mb-4"
                    >
                      <img
                        src={berita.image}
                        alt="Berita"
                        className="w-1/4 h-full rounded-lg object-cover"
                      />
                      <div className="px-4 flex-1">
                        <h3 className="text-sm font-semibold">
                          {berita.title}
                        </h3>
                        <p className="text-gray-500 text-xs">
                          {berita.category} | {berita.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Berita berdasarkan kategori  Kesehatan */}
                <div>
                  <h3 className="font-semibold text-xl mb-4">
                    Berita Terbaru di Kesehatan
                  </h3>
                  {beritaEkonomi.map((berita, index) => (
                    <div
                      key={index}
                      className="flex rounded-lg justify-center items-center overflow-hidden mb-4"
                    >
                      <img
                        src={berita.image}
                        alt="Berita"
                        className="w-1/4 h-full rounded-lg object-cover"
                      />
                      <div className="px-4 flex-1">
                        <h3 className="text-sm font-semibold">
                          {berita.title}
                        </h3>
                        <p className="text-gray-500 text-xs">
                          {berita.category} | {berita.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <nav aria-label="Page navigation">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    Previous
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
