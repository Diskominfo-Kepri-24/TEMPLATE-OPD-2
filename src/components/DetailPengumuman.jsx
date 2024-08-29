import { AiOutlineCalendar } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
export default function DetailPengumuman() {
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
  ];

  return (
    <>
      <div className="bg-slate-50 pb-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-bold text-primary-color max-w-screen-lg text-3xl">
              Statistik Angkutan Udara dan Angkutan Laut Provinsi Kepulauan Riau
              2023
            </h1>
            <p className="flex items-center mt-2">
              <AiOutlineCalendar className="w-5 h-5 mr-2 text-primary-color" />
              Kamis, 29 Agustus 2024
            </p>

            {/* Tambahkan icon penulis */}
            <p className="flex items-center mt-1">
              <FaPencilAlt className="w-4 h-4 mr-2 text-primary-color" />
              Dari : Biro Informasi
            </p>
            {/* Isi Berita*/}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Kolom pertama */}
              <div className="lg:col-span-2">
                {/* Section Isi berita */}
                <div className="mt-6 space-y-10">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1722077701586-a81474ac7289?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Gambar Berita"
                    className="w-full h-96 rounded-lg object-cover"
                  />
                  <p className="text-justify font-bold text-md">
                    Dari : Biro BKD Kepri
                  </p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent interdum mauris at libero congue, nec cursus nulla
                    vehicula. Cras id orci nec leo posuere blandit a in risus.
                    Maecenas vitae nisi lacus. Ut at libero elit. Suspendisse
                    vel metus non erat posuere viverra. Curabitur vehicula
                    lectus et lorem condimentum, ut commodo odio scelerisque.
                    Sed ac consequat arcu. Fusce eget nulla id turpis elementum
                    consequat. Integer et tortor eu erat vehicula malesuada.
                  </p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent interdum mauris at libero congue, nec cursus nulla
                    vehicula. Cras id orci nec leo posuere blandit a in risus.
                    Maecenas vitae nisi lacus. Ut at libero elit. Suspendisse
                    vel metus non erat posuere viverra. Curabitur vehicula
                    lectus et lorem condimentum, ut commodo odio scelerisque.
                    Sed ac consequat arcu. Fusce eget nulla id turpis elementum
                    consequat. Integer et tortor eu erat vehicula malesuada.
                  </p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent interdum mauris at libero congue, nec cursus nulla
                    vehicula. Cras id orci nec leo posuere blandit a in risus.
                    Maecenas vitae nisi lacus. Ut at libero elit. Suspendisse
                    vel metus non erat posuere viverra. Curabitur vehicula
                    lectus et lorem condimentum, ut commodo odio scelerisque.
                    Sed ac consequat arcu. Fusce eget nulla id turpis elementum
                    consequat. Integer et tortor eu erat vehicula malesuada.
                  </p>
                  <p>Editor: humas jabar</p>
                </div>
              </div>

              {/* Kolom kedua */}
              <div className="space-y-10">
                {/* Pengumuman Terbaru */}
                <div>
                  <h3 className="font-semibold text-xl mb-4">
                    Pengumuman Terbaru
                  </h3>
                  {cards.map((pengumuman, index) => (
                    <div
                      key={index}
                      className="flex rounded-lg justify-center items-center overflow-hidden mb-4"
                    >
                      <img
                        src={pengumuman.imgSrc}
                        alt="Pengumuman"
                        className="w-1/4 h-full rounded-lg object-cover"
                      />
                      <div className="px-4 flex-1">
                        <h3 className="text-sm font-semibold">
                          {pengumuman.title}
                        </h3>
                        <p className="text-gray-500 text-xs">
                          {pengumuman.agency} | {pengumuman.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
