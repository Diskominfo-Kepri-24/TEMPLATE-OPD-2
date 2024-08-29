export default function Sejarah() {
  return (
    <>
      <div className="bg-slate-50 pb-10 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="font-bold text-primary-color text-3xl">
              Tentang Kepulauan Riau
            </h1>
            <p className="text-all-first text-xs mt-4 font-medium">
              Ketahui segalanya tentang Kepulauan Riau mulai dari pemerintahan,
              program, hingga kondisi terkini.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row px-8 py-10  shadow bg-white rounded-lg">
            {/* Sidebar - Left Column */}
            <div className="w-full lg:w-1/4 mb-8 lg:mb-0 border p-4 rounded-lg">
              <h2 className="font-bold text-lg mb-4">Tentang Kepri</h2>
              <ul className="space-y-2">
                <li className="ml-4">
                  <a
                    href="#profil"
                    className="text-primary-color hover:underline"
                  >
                    Profil Singkat
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#nama"
                    className="text-primary-color hover:underline"
                  >
                    Nama
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#sejarah"
                    className="text-primary-color hover:underline"
                  >
                    Sejarah
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#batas-wilayah"
                    className="text-primary-color hover:underline"
                  >
                    Batas wilayah
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#geografi"
                    className="text-primary-color hover:underline"
                  >
                    Geografi
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#sumber-daya-alam"
                    className="text-primary-color hover:underline"
                  >
                    Sumber daya alam
                  </a>
                </li>
              </ul>

              <h2 className="font-bold text-lg mt-8 mb-4">Pemerintahan</h2>
              <ul className="space-y-2">
                <li className="ml-4">
                  <a
                    href="#gubernur"
                    className="text-primary-color hover:underline"
                  >
                    Gubernur
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#perwakilan"
                    className="text-primary-color hover:underline"
                  >
                    Perwakilan
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="#kabupaten-dan-kota"
                    className="text-primary-color hover:underline"
                  >
                    Kabupaten dan kota
                  </a>
                </li>
              </ul>
            </div>

            {/* Main Content - Right Column */}
            <div className="w-full lg:w-3/4 lg:pl-10">
              <section id="profil" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-6">
                  Profil Singkat Provinsi Kepulauan Riau
                </h1>
                <h1 className="text-center text-md font-medium text-all-first mb-10">
                  Terbentang dari Selat Malaka hingga ke Laut Natuna, Provinsi
                  Kepulauan Riau termasuk wilayah strategis karena berbatasan
                  dengan Singapura, Vietnam, Malaysia, dan Kamboja. Daerah ini
                  juga kaya akan potensi sumber daya alam di bidang minyak dan
                  gas, serta maritim.
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Kepulauan Riau (disingkat Kepri) adalah sebuah provinsi yang
                  ada di Indonesia. Provinsi Kepulauan Riau berbatasan dengan
                  Vietnam dan Kamboja di sebelah Utara; Malaysia dan provinsi
                  Kalimantan Barat di sebelah Timur; provinsi Kepulauan Bangka
                  Belitung dan Jambi di Selatan; negara Singapura, Malaysia dan
                  provinsi Riau di sebelah Barat. Provinsi ini termasuk provinsi
                  kepulauan di Indonesia. Tahun 2020, penduduk Kepulauan Riau
                  berjumlah 2.064.564 jiwa, dengan kepadatan 252 jiwa/km2, dan
                  58% penduduknya berada di kota Batam.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Secara keseluruhan wilayah Kepulauan Riau terdiri dari 5
                  kabupaten, dan 2 kota, 52 kecamatan serta 299 kelurahan/desa
                  dengan jumlah 2.408 pulau besar, dan kecil yang 30% belum
                  bernama, dan berpenduduk. Adapun luas wilayahnya sebesar
                  8.201,72 km², sekitar 96% merupakan lautan, dan hanya sekitar
                  4% daratan.
                </p>
              </section>

              <section id="nama" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Nama
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Asal usul nama Kepulauan Riau berasal dari nama Riau. Riau
                  diduga berasal kata &quot;riuh&quot; yang berarti ramai. Hal
                  ini dikarenakan daerah Kepulauan Riau dahulunya merupakan
                  pusat perdagangan dan keramaian. Lalu nama ini berkembang
                  dengan digunakannya nama Riau pada nama Kesultanan Lingga.
                  Pada masa kolonial, kata Riau dituliskan &quot;Riouw&quot;,
                  sesuai dengan ejaan bahasa Belanda.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Setelah proklamasi kemerdekaan, wilayah Riau (Kepulauan Riau
                  saat ini) disatukan dengan wilayah Kesultanan Siak di daratan
                  Sumatra. Dahulunya, hal ini dilakukan karena gerakan Ganyang
                  Malaysia sehingga mempermudah hubungan dari wilayah kepulauan
                  ke daratan Sumatra.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Namun, seiring berjalannya waktu, nama Riau digunakan oleh
                  wilayah Kesultanan Siak di daratan Sumatra, sementara
                  Kepulauan Riau memekarkan diri. Kata kepulauan ditambahkan
                  didepan kata Riau karna wilayah yang sebagian besar lautan
                  atau berbentuk kepulauan.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Asal usul nama Riau juga menuai polemik di antara budayawan
                  Riau dan Kepulauan Riau. Kedua kubu ini menilai bahwa nama
                  Riau berasal dari provinsinya masing-masing dengan versi
                  sejarah yang berbeda.
                </p>
              </section>

              <section id="sejarah" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Sejarah
                </h1>
                <h1 className="font-bold text-xl text-all-first mb-4">
                  Sejarah sebelum pembentukan provinsi
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Masa sejarah di Kepulauan Riau dimulai dengan ditemukannya
                  Prasasti Pasir Panjang di Kabupaten Karimun yang terdapat
                  semboyan pemujaan melalui tapak kaki Buddha. Hal ini diduga
                  berhubungan dengan Kerajaan Melayu di Sumatra. Buddha
                  diperkiran masuk melalui pedagang dari Tiongkok dan India.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Masa Islam di Kepulauan Riau berkembang dengan berdirinya
                  Kesultanan Riau-Lingga. Kesultanan ini berasaskan Melayu Islam
                  dan Islam sendiri dikenal setelah dibawa oleh pedagang dari
                  Gujarat, India, dan Arab.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Masa Kolonial sangat berpengaruh dalam sejarah Kepulauan Riau.
                  Julukan Hawaii Van Lingga yang diberikan kepada pulau Penuba,
                  penggunaan uang tersendiri bagi Kepulauan Riau, dan
                  terbentuknya Karesidenan Riouw menjadi bukti pengaruh kuat
                  para kolonial di Kepulauan Riau. Pada tahun 1922, Afdeeling
                  Tanjung Pinang membawahi empat onder-afdeeling yang terdiri
                  dari
                </p>
                <p className="text-all-second text-justify mb-5 mx-10">
                  <ul className="list-decimal">
                    <li>Onder-Afdeeling Tanjung Pinang,</li>
                    <li>Onder-Afdeeling Karimun,</li>
                    <li>Onder-Afdeeling Lingga, dan,</li>
                    <li>
                      Onder-Afdeeling Pulau Tujuh yang dibagi ke dalam dua
                      ressort, yakni ressort Kepulauan Anambas dan ressort
                      Kepulauan Natuna.
                    </li>
                  </ul>
                </p>
                <p className="text-all-second text-justify mb-5">
                  Adapun Afdeeling Indragiri yang terdiri dari Kuantan,
                  Indragirische Bovenlanden dan Indragirische Benedenlanden,
                  yang pada awal mulanya merupakan satu kesatuan dengan
                  Kepulauan Riau, pada akhirnya, sesudah tahun
                  1950-an,dimasukkan ke dalam Riau.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Setelah masa kemerdekaan, Kepulauan Riau bergabung dengan
                  wilayah Kesultanan Siak di daratan Sumatra sehingga membentuk
                  provinsi Riau. Dahulunya, Kepulauan Riau juga menggunakan mata
                  uang tersendiri bernama Uang Kepulauan Riau (KR). Namun secara
                  perlahan, penggunaan mata uang ini dihentikan dan digantikan
                  dengan mata uang Rupiah.
                </p>
                <p className="text-all-second text-justify mb-5">
                  Setelah lama bergabung dengan Riau, Kepulauan Riau akhirnya
                  memutuskan untuk memisahkan diri dengan membentuk Badan
                  Perjuangan Pembentukan Provinsi Kepulauan Riau (BP3KR).
                  Perjuangan BP3KR akhirnya membuahkan hasil dengan pemekaran
                  provinsi Kepulauan Riau dari Riau pada tanggal 24 September
                  2002.
                </p>
                <h1 className="font-bold text-xl text-all-first mb-4">
                  Sejarah setelah pembentukan provinsi
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Kepulauan Riau merupakan provinsi baru hasil pemekaran dari
                  provinsi Riau. Provinsi Kepulauan Riau terbentuk berdasarkan
                  Undang-undang Nomor 25 tahun 2002 merupakan provinsi ke-32 di
                  Indonesia yang mencakup Kota Tanjungpinang, Kota Batam,
                  Kabupaten Bintan, Kabupaten Karimun, Kabupaten Natuna,
                  Kabupaten Kepulauan Anambas dan Kabupaten Lingga.
                </p>
              </section>
              <section id="batas-wilayah" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Batas wilayah
                </h1>
                <h1 className="font-bold text-xl text-all-first mb-4">
                  Sejarah sebelum pembentukan provinsi
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Adapun batas wilayah provinsi Kepulauan Riau, yakni:
                </p>
                <p className="text-all-second text-justify mb-5 mx-10">
                  <ul className="list-decimal">
                    <li>
                      Utara : Laut Natuna Utara, Laut Natuna, Kamboja, Vietnam
                    </li>
                    <li>
                      Timur : Pulau Kalimantan, Kalimantan Barat, Malaysia
                      Timur, Selat Karimata
                    </li>
                    <li>Selatan : Selat Berhala, Kepulauan Bangka Belitung</li>
                    <li>
                      Barat : Pulau Sumatra, Riau, Jambi, Malaysia Barat,
                      Singapura
                    </li>
                  </ul>
                </p>
              </section>
              <section id="geografi" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Batas wilayah
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Secara geografis provinsi Kepulauan Riau berbatasan dengan
                  negara tetangga, yaitu Singapura, Malaysia, dan Vietnam yang
                  memiliki luas wilayah 251.810,71 km² dengan 96 persennya
                  adalah perairan dengan 1.350 pulau besar, dan kecil telah
                  menunjukkan kemajuan dalam penyelenggaraan kegiatan
                  pemerintahan, pembangunan, dan kemasyarakatan. Ibu kota
                  provinsi Kepulauan Riau berkedudukan di Tanjungpinang.
                  Provinsi ini terletak pada jalur lalu lintas transportasi
                  laut, dan udara yang strategis, dan terpadat pada tingkat
                  internasional serta pada bibir pasar dunia yang memiliki
                  peluang pasar. Titik tertinggi di Kepulauan Riau adalah Gunung
                  Daik (1.165 mdpl) yang terdapat di pulau Lingga.
                </p>
              </section>
              <section id="sumber-daya-alam" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Sumber daya alam
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Kepri memiliki potensi sumber daya alam mineral, dan energi
                  yang relatif cukup besar, dan bervariasi baik berupa bahan
                  galian A (strategis) seperti minyak bumi, dan gas alam, bahan
                  galian B (vital) seperti timah, bauksit, dan pasir besi,
                  maupun bahan galian golongan C seperti granit, pasir, dan
                  kuarsa.
                </p>
              </section>

              <section id="gubernur" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Gubernur
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Gubernur bertanggungjawab atas wilayah provinsi Kepulauan
                  Riau. Saat ini, gubernur atau kepala daerah yang menjabat di
                  provinsi Kepulauan Riau ialah Ansar Ahmad, dengan wakil
                  gubernur Marlin Agustina. Mereka menang pada Pemilihan umum
                  Gubernur Kepulauan Riau 2020. Ansar merupakan gubernur
                  Kepulauan Riau ke-5, sejak provinsi ini dibentuk. Ansar dan
                  Marlin dilantik oleh presiden Republik Indonesia, Joko Widodo
                  di Istana Negara Jakarta pada 25 Februari 2021, untuk masa
                  jabatan 2021-2024.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2">Foto</th>
                        <th className="border px-4 py-2">Gubernur</th>
                        <th className="border px-4 py-2">Mulai Jabatan</th>
                        <th className="border px-4 py-2">Akhir Jabatan</th>
                        <th className="border px-4 py-2">Periode</th>
                        <th className="border px-4 py-2">Foto</th>
                        <th className="border px-4 py-2">Wakil Gubernur</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          <img
                            src="/ansar.jpg"
                            alt="Foto Gubernur"
                            className="w-24 h-auto"
                          />
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          Ansar Ahmad
                        </td>
                        <td className="border px-4 py-2">25 Februari 2021</td>
                        <td className="border px-4 py-2">Petahana</td>
                        <td className="border px-4 py-2">
                          <p>1 Periode</p>
                          <p>2021 - 2024</p>
                        </td>
                        <td className="border px-4 py-2">
                          <img
                            src="/marlin.jpg"
                            alt="Foto Wakil Gubernur"
                            className="w-24 h-auto"
                          />
                        </td>
                        <td className="border px-4 py-2 font-semibold">
                          Marlin Agustina
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="perwakilan" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Perwakilan
                </h1>
                <p className="text-all-second text-justify mb-5">
                  DPRD Kepulauan Riau beranggotakan 45 orang yang dipilih
                  melalui pemilihan umum setiap lima tahun sekali. Pimpinan DPRD
                  Kepulauan Riau terdiri dari 1 Ketua dan 3 Wakil Ketua yang
                  berasal dari partai politik pemilik jumlah kursi dan suara
                  terbanyak. Anggota DPRD Kepulauan Riau yang sedang menjabat
                  saat ini adalah hasil Pemilu 2019 yang dilantik pada 9
                  September 2019 oleh Wakil Ketua Pengadilan Tinggi Pekanbaru,
                  Moch. Eka Kartika, di Ruang Sidang Utama Gedung DPRD Provinsi
                  Kepulauan Riau. Komposisi anggota DPRD Kepulauan Riau periode
                  2019-2024 terdiri dari 10 partai politik dimana PDI Perjuangan
                  dan Partai Golkar adalah partai politik pemilik kursi
                  terbanyak yaitu masing-masing 8 kursi, kemudian disusul oleh
                  Partai Keadilan Sejahtera dan Partai NasDem yang masing-masing
                  meraih 6 kursi.
                </p>
              </section>
              <section id="kabupaten-dan-kota" className="mb-8">
                <h1 className="font-bold text-2xl text-primary-color mb-4">
                  Kabupaten dan Kota
                </h1>
                <p className="text-all-second text-justify mb-5">
                  Provinsi Kepulauan Riau merupakan salah satu provinsi di Pulau
                  Sumatra. Provinsi Kepulauan Riau terdiri atas 5 kabupaten dan
                  2 kota. Berikut adalah daftar kabupaten dan kota di provinsi
                  Kepulauan Riau.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2">No.</th>
                        <th className="border px-4 py-2">Kabupaten/Kota</th>
                        <th className="border px-4 py-2">Pusat Pemerintahan</th>
                        <th className="border px-4 py-2">Bupati/Wali Kota</th>
                        <th className="border px-4 py-2">Lambang</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">Kabupaten Bintan</td>
                        <td className="border px-4 py-2">Bandar Seri Bentan</td>
                        <td className="border px-4 py-2">Roby Kurniawan</td>
                        <td className="border px-4 py-2">
                          <img
                            src="/bintan.png"
                            alt="Lambang Bintan"
                            className="w-16 h-auto"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">Kabupaten Karimun</td>
                        <td className="border px-4 py-2">
                          Tanjung Balai Karimun
                        </td>
                        <td className="border px-4 py-2">Aunur Rafiq</td>
                        <td className="border px-4 py-2">
                          <img
                            src="/karimun.png"
                            alt="Lambang Karimun"
                            className="w-16 h-auto"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">3</td>
                        <td className="border px-4 py-2">
                          Kabupaten Kepulauan Anambas
                        </td>
                        <td className="border px-4 py-2">Tarempa</td>
                        <td className="border px-4 py-2">Abdul Haris</td>
                        <td className="border px-4 py-2">
                          <img
                            src="/anambas.jpg"
                            alt="Lambang Anambas"
                            className="w-16 h-auto"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">Kabupaten Lingga</td>
                        <td className="border px-4 py-2">Daik</td>
                        <td className="border px-4 py-2">M. Nizar</td>
                        <td className="border px-4 py-2">
                          <img
                            src="/lingga.png"
                            alt="Lambang Lingga"
                            className="w-16 h-auto"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">Kabupaten Natuna</td>
                        <td className="border px-4 py-2">Ranai</td>
                        <td className="border px-4 py-2">Wan Siswandi</td>
                        <td className="border px-4 py-2">
                          <img
                            src="/natuna.png"
                            alt="Lambang Lingga"
                            className="w-16 h-auto"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">6</td>
                        <td className="border px-4 py-2">Kabupaten Batam</td>
                        <td className="border px-4 py-2">-</td>
                        <td className="border px-4 py-2">Muhammad Rudi</td>
                        <td className="border px-4 py-2">
                          <img
                            src="/batam.png"
                            alt="Lambang Lingga"
                            className="w-16 h-auto"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">7</td>
                        <td className="border px-4 py-2">
                          Kabupaten Tanjungpinang
                        </td>
                        <td className="border px-4 py-2">-</td>
                        <td className="border px-4 py-2">Hasan, S.Sos</td>
                        <td className="border px-4 py-2">
                          <img
                            src="/tanjungpinang.png"
                            alt="Lambang Lingga"
                            className="w-16 h-auto"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
