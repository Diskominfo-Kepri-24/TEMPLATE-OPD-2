import { Link } from "react-router-dom";

export default function Pengumuman() {
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
      title: "Pengumuman Penting Mengenai Jadwal Ujian",
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
      title: "Pengumuman Kelulusan Siswa Tahun Ajaran 2024",
      date: "2024-08-23",
      agency: "Biro Umum",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pengumuman Kegiatan Masa Orientasi Siswa Baru",
      date: "2024-08-23",
      agency: "Biro Hukum",
      size: "9.14 MB",
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pengumuman Kegiatan Kemerdekaan 17 Agustus tahun 1945",
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

  return (
    <>
      <div className="bg-slate-50 pb-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-bold text-primary-color text-3xl">
              Publikasi Pengumuman Resmi
            </h1>

            <div className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                  <>
                    <Link to={`/pengumuman/1`}>
                      <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full"
                      >
                        <img
                          src={card.imgSrc}
                          alt={card.title}
                          className="w-full h-32 object-cover" // Menurunkan tinggi gambar untuk mengurangi tinggi card
                        />
                        <div className="p-4 flex-1">
                          <h3 className="text-lg font-semibold mb-2 break-words">
                            {card.title}
                          </h3>
                        </div>
                        <div className="flex justify-between m-4 mt-auto">
                          <p className="all-second text-sm mb-2">
                            {card.agency}
                          </p>
                          <p className="all-third text-xs">
                            {timeAgo(card.date)} | {card.size}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </>
                ))}
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
