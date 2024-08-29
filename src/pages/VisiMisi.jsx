export default function VisiMisi() {
  return (
    <>
      <div className="bg-slate-50 pb-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-bold text-primary-color text-3xl">
              Visi dan Misi
            </h1>
            <p className="text-all-first text-xs mt-4 font-medium">
              Visi misi dari Pemerintah Provinsi Kepulauan Riau
            </p>
            {/* VISI*/}
            <div className="mt-10">
              <h1 className="text-all-first text-md  font-semibold">VISI : </h1>
              <p className="text-all-first text-sm mt-4 font-medium">
                &quot;Terwujudnya Kepulauan Riau yang Makmur, Berdaya Saing, dan
                Berbudaya&quot;
              </p>
              <p className="text-all-first text-sm mt-4 font-medium">
                <ul className="list-disc">
                  <li className="ml-6 mb-2 text-justify">
                    Makmur artinya kehidupan masyarakat Kepulauan Riau yang
                    lebih layak, dan sejahtera.
                  </li>
                  <li className=" ml-6 mb-2 text-justify">
                    Berdaya Saing artinya Terwujudnya masyarakat yang sehat,
                    birokrasi pemerintahan dan dunia usaha yang lebih mampu
                    bersaing dan unggul di tingkat regional dan internasional
                  </li>
                  <li className=" ml-6 mb-2 text-justify">
                    Berbudaya artinya Terwujudnya penyelenggaraan pemerintahan,
                    kegiatan pembangunan dan aktivitas masyarakat Kepulauan Riau
                    yang lebih berpegang pada nilai-nilai agama, budaya Melayu,
                    dan budaya Nasional
                  </li>
                </ul>
              </p>
            </div>
            {/* MISI */}
            <div className="mt-10">
              <h1 className="text-all-first text-md  font-semibold">MISI : </h1>

              <p className="text-all-first text-sm mt-4 font-medium">
                <ul className="list-decimal">
                  <li className="ml-6 mb-2 text-justify">
                    Percepatan Peningkatan Pertumbuhan Ekonomi Berbasis Maritim,
                    Berwawasan Lingkungan dan Keunggulan Wilayah Untuk
                    Peningkatan Kemakmuran Masyarakat.
                  </li>
                  <li className=" ml-6 mb-2 text-justify">
                    Melaksanakan Tata Kelola Pemerintahan yang Bersih, Terbuka
                    dan Berorientasi Pelayanan.
                  </li>
                  <li className=" ml-6 mb-2 text-justify">
                    Mewujudkan Kualitas Sumber Daya Manusia yang Berkualitas,
                    Sehat dan Berdaya Saing dengan Berbasiskan Iman dan Taqwa.
                  </li>
                  <li className=" ml-6 mb-2 text-justify">
                    Mengembangkan dan Melestarikan Budaya Melayu dan Nasional
                    Dalam Mendukung Pembangunan Berkelanjutan.
                  </li>
                  <li className=" ml-6 mb-2 text-justify">
                    Mempercepat Konektivitas Antar Pulau dan Pembangunan
                    Infrastruktur Kawasan.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
