export default function PerangkatDaerah() {
  const opdList = [
    {
      title: "BADAN PERENCANAAN, PENELITIAN DAN PENGEMBANGAN",
      icon: "/assets/lingga.png",
    },
    { title: "BADAN KEUANGAN DAN ASET DAERAH", icon: "/assets/lingga.png" },
    {
      title: "BADAN KEPEGAWAIAN DAERAH DAN KORPRI PROVINSI KEPULAUAN RIAU",
      icon: "/assets/lingga.png",
    },
    {
      title: "BADAN PENGEMBANGAN SUMBER DAYA MANUSIA",
      icon: "/assets/lingga.png",
    },
    { title: "BADAN PENDAPATAN DAERAH", icon: "/assets/lingga.png" },
    { title: "BADAN KESATUAN BANGSA DAN POLITIK", icon: "/assets/lingga.png" },
    { title: "BADAN PENGELOLA PERBATASAN DAERAH", icon: "/assets/lingga.png" },
    {
      title: "BADAN PENANGGULANGAN BENCANA DAERAH",
      icon: "/assets/lingga.png",
    },
    { title: "BADAN PENGHUBUNG DAERAH", icon: "/assets/lingga.png" },
    { title: "DINAS PENDIDIKAN", icon: "/assets/lingga.png" },
    { title: "DINAS KESEHATAN", icon: "/assets/lingga.png" },
    {
      title: "DINAS PEKERJAAN UMUM, PENATAAN RUANG DAN PERTANAHAN",
      icon: "/assets/lingga.png",
    },
    {
      title: "DINAS PERUMAHAN DAN KAWASAN PERMUKIMAN",
      icon: "/assets/lingga.png",
    },
    { title: "DINAS SOSIAL", icon: "/assets/lingga.png" },
    {
      title: "DINAS PELAYANAN MODAL DAN PELAYANAN TERPADU SATU PINTU",
      icon: "/assets/lingga.png",
    },
    {
      title: "DINAS LINGKUNGAN HIDUP DAN KEHUTANAN",
      icon: "/assets/lingga.png",
    },
    {
      title: "Plt. DINAS PEMBERDAYAAN MASYARAKAT DAN DESA, KEPENDUDUKAN...",
      icon: "/assets/lingga.png",
    },
    {
      title: "DINAS PANGAN, PERTANIAN DAN KESEHATAN HEWAN",
      icon: "/assets/lingga.png",
    },
    {
      title: "DINAS TENAGA KERJA DAN TRANSMIGRASI",
      icon: "/assets/lingga.png",
    },
    { title: "DINAS PERPUSTAKAAN DAN KEARSIPAN", icon: "/assets/lingga.png" },
    { title: "SEKRETARIAT DPRD", icon: "/assets/lingga.png" },
    {
      title: "DINAS PEMBERDAYAAN PEREMPUAN PERLINDUNGAN ANAK, PENGENDALIAN...",
      icon: "/assets/lingga.png",
    },
    { title: "DINAS PERHUBUNGAN", icon: "/assets/lingga.png" },
    { title: "DINAS KELAUTAN DAN PERIKANAN", icon: "/assets/lingga.png" },
    { title: "DINAS PARIWISATA", icon: "/assets/lingga.png" },
    { title: "DINAS KEBUDAYAAN", icon: "/assets/lingga.png" },
    {
      title: "DINAS PERINDUSTRIAN DAN PERDAGANGAN",
      icon: "/assets/lingga.png",
    },
    {
      title: "DINAS ENERGI DAN SUMBERDAYA MINERAL",
      icon: "/assets/lingga.png",
    },
    { title: "DINAS KEPEMUDAAN DAN OLAHRAGA", icon: "/assets/lingga.png" },
    { title: "DINAS KOMUNIKASI DAN INFORMATIKA", icon: "/assets/lingga.png" },
    {
      title: "SATUAN POLISI PAMONG PRAJA DAN PENANGGULANGAN KEBAKARAN",
      icon: "/assets/lingga.png",
    },
    { title: "INSPEKTORAT", icon: "/assets/lingga.png" },
    {
      title: "BIRO PEMERINTAHAN DAN OTONOMI DAERAH SETDA",
      icon: "/assets/lingga.png",
    },
    { title: "BIRO PEREKONOMIAN DAN PEMBANGUNAN", icon: "/assets/lingga.png" },
    { title: "BIRO KESEJAHTERAAN RAKYAT SETDA", icon: "/assets/lingga.png" },
    { title: "BIRO ORGANISASI SEKRETARIAT DAERAH", icon: "/assets/lingga.png" },
    { title: "BIRO HUKUM SETDA", icon: "/assets/lingga.png" },
    { title: "BIRO UMUM SEKRETARIAT DAERAH", icon: "/assets/lingga.png" },
    { title: "BIRO ADMINISTRASI PIMPINAN SETDA", icon: "/assets/lingga.png" },
    {
      title: "BIRO PENGADAAN BARANG DAN JASA SEKRETARIAT DAERAH",
      icon: "/assets/lingga.png",
    },
    {
      title: "RSUP RAJA AHMAD TABIB PROVINSI KEPULAUAN RIAU",
      icon: "/assets/lingga.png",
    },
    { title: "RSUD ENGKU HAJI DAUD", icon: "/assets/lingga.png" },
    {
      title: "KOMISI INFORMASI PROVINSI KEPULAUAN RIAU",
      icon: "/assets/lingga.png",
    },
    {
      title: "KOMISI PENYIARAN DAERAH PROVINSI KEPULAUAN RIAU",
      icon: "/assets/lingga.png",
    },
  ];
  return (
    <>
      <div className="bg-slate-50 pb-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-bold text-primary-color text-3xl">
              Daftar Perangkat Daerah
            </h1>

            {/* Kabupaten/Kota */}
            <div className="mt-10">
              <h1 className="text-all-first text-md font-semibold">
                Kabupaten/Kota
              </h1>

              {/* Card grid 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {/* Card 1 */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 ">
                  <img
                    src="/tanjungpinang.png"
                    alt="Kota Tanjung Pinang"
                    className="w-10 h-12"
                  />
                  <span className="font-semibold text-lg">
                    Kota Tanjung Pinang
                  </span>
                </div>

                {/* Card 2 */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 ">
                  <img
                    src="/batam.png"
                    alt="Kota Batam"
                    className="w-10 h-12"
                  />
                  <span className="font-semibold text-lg">Kota Batam</span>
                </div>

                {/* Card 3 */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 ">
                  <img
                    src="/karimun.png"
                    alt="Kabupaten Karimun"
                    className="w-12 h-12"
                  />
                  <span className="font-semibold text-lg">
                    Kabupaten Karimun
                  </span>
                </div>

                {/* Card 4 */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 ">
                  <img
                    src="/lingga.png"
                    alt="Kabupaten Lingga"
                    className="w-10 h-12"
                  />
                  <span className="font-semibold text-lg">
                    Kabupaten Lingga
                  </span>
                </div>

                {/* Card 5 */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 ">
                  <img
                    src="/natuna.png"
                    alt="Kabupaten Natuna"
                    className="w-10 h-12"
                  />
                  <span className="font-semibold text-lg">
                    Kabupaten Natuna
                  </span>
                </div>

                {/* Card 6 */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 ">
                  <img
                    src="/anambas.jpg"
                    alt="Kabupaten Kepulauan Anambas"
                    className="w-10 h-12"
                  />
                  <span className="font-semibold text-lg">
                    Kabupaten Kepulauan Anambas
                  </span>
                </div>

                {/* Card 7 */}
                <div className="border rounded-lg p-4 flex items-center space-x-4 ">
                  <img
                    src="/bintan.png"
                    alt="Kabupaten Bintan"
                    className="w-10 h-12"
                  />
                  <span className="font-semibold text-lg">
                    Kabupaten Bintan
                  </span>
                </div>
              </div>
            </div>
            {/* OPD Provinsi Kepulauan Riau */}
            <div className="mt-10">
              <h1 className="text-all-first text-md font-semibold">
                OPD Provinsi Kepulauan Riau
              </h1>

              {/* Card grid 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {opdList.map((opd, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 flex items-center space-x-4 "
                  >
                    <img
                      src={opd.icon}
                      alt={`${opd.title}`}
                      className="w-10 h-12"
                    />
                    <span className="font-semibold text-lg">{opd.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
