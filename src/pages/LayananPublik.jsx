export default function LayananPublik() {
  const layananList = [
    {
      category: "Layanan PPID Pemerintah Provinsi Kepulauan Riau",
      services: [
        {
          title: "Permohonan Informasi",
          description:
            "Ajukan permohonan informasi secara online dengan mudah.",
          icon: "logo.png",
        },
        {
          title: "Daftar Informasi Publik",
          description:
            "Lihat daftar instansi atau PPID Pelaksana di Provinsi Kepulauan Riau.",
          icon: "/logo.png",
        },
        {
          title: "Daftar PPID Pelaksana",
          description: "Cek daftar informasi sebelum mengajukan permintaan.",
          icon: "/logo.png",
        },
      ],
    },
    {
      category: "Layanan Administrasi Pemerintahan Elektronik",
      services: [
        {
          title: "SIMANJA Kepri",
          description:
            "Sistem Informasi Manajemen Kinerja Pemerintah Provinsi.",
          icon: "/bintan.png",
        },
        {
          title: "SIAP Kepri",
          description:
            "Sistem Informasi Aktivitas Presensi Pemerintah Provinsi.",
          icon: "/bintan.png",
        },
        {
          title: "SIAAPE Kepri",
          description:
            "Administrasi Pemerintahan Elektronik Provinsi Kepulauan Riau.",
          icon: "/bintan.png",
        },
        {
          title: "SIJABAT Kepri",
          description: "Sistem Informasi Jabatan di Pemerintahan Provinsi.",
          icon: "/bintan.png",
        },
        {
          title: "Si-Desi Kepri",
          description:
            "Sistem Informasi Helpdesk Pemerintah Provinsi Kepulauan Riau.",
          icon: "/bintan.png",
        },
        {
          title: "TTE Kepri",
          description:
            "Tanda Tangan Elektronik untuk ASN di Provinsi Kepulauan Riau.",
          icon: "/bintan.png",
        },
      ],
    },
    {
      category: "Pelayanan Masyarakat Berbasis Elektronik",
      services: [
        {
          title: "LPSE Kepri",
          description:
            "Layanan Pengadaan Secara Elektronik Provinsi Kepulauan Riau.",
          icon: "/tanjungpinang.png",
        },
        {
          title: "SiRUP Versi 4",
          description: "Sistem Informasi Umum Pengadaan.",
          icon: "/tanjungpinang.png",
        },
        {
          title: "Toko Daring LKPP",
          description: "Kemudahan akses layanan secara daring.",
          icon: "/tanjungpinang.png",
        },
        {
          title: "Gema Ekraf Kepri",
          description: "Kemudahan akses informasi layanan publik.",
          icon: "/tanjungpinang.png",
        },
        {
          title: "SIP MTQ Kepri",
          description: "Layanan daring untuk masyarakat Kepri.",
          icon: "/tanjungpinang.png",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-slate-50 pb-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-bold text-primary-color text-3xl">
              Daftar Layanan Publik
            </h1>

            {/* Layanan PPID Pemerintah Provinsi Kepulauan Riau*/}
            <div className="mt-10">
              {layananList.map((category, index) => (
                <div key={index} className={`mb-16 `}>
                  <h1 className="text-primary-color text-lg font-semibold pb-20">
                    {category.category}
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="relative flex flex-col items-center text-center p-6 rounded-full  bg-white "
                      >
                        <div className="absolute -top-10 w-20 h-20 bg-second-button rounded-full flex items-center justify-center ">
                          <img
                            src={service.icon}
                            alt={`${service.title} icon`}
                            className="w-12 h-12"
                          />
                        </div>
                        <div className="mt-12">
                          <h3 className="text-lg font-bold text-all-first">
                            {service.title}
                          </h3>
                          <p className="text-sm text-all-second mt-2">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative flex justify-center items-center mt-16">
              {/* Ornamen Dekoratif */}
              <div className="absolute w-40 h-40 bg-gradient-to-br from-primary-color to-second-color rounded-full opacity-30 transform -translate-x-20 -translate-y-20 blur-xl"></div>
              <div className="absolute w-64 h-64 bg-gradient-to-tr from-second-color to-primary-text rounded-full opacity-30 transform translate-x-24 translate-y-24 blur-2xl"></div>

              {/* Transparent Card */}
              <div className="relative w-full max-w-3xl p-10 bg-gradient-to-br from-all-third via-white to-white bg-opacity-90 text-center rounded-2xl shadow-2xl backdrop-blur-lg border border-primary-color transition-all transform hover:scale-105 hover:bg-opacity-100 hover:shadow-3xl">
                <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-color to-second-color drop-shadow-md">
                  Ada Masalah dengan Layanan?
                </h2>
                <p className="text-xl text-all-second mb-10 font-medium">
                  Sampaikan keluhan dan pengaduan Anda dengan mudah, cepat, dan
                  responsif melalui platform resmi kami.
                </p>
                <a
                  href="https://kepri.lapor.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary-text bg-gradient-to-r from-primary-color to-second-color rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all transform duration-300"
                >
                  <span className="relative flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary-text"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405C18.313 14.883 18 13.968 18 13V7a6 6 0 10-12 0v6c0 .968-.313 1.883-.595 2.595L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
                      />
                    </svg>
                    LAPOR SEKARANG
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
