import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Link></Link>
      <div
        className={`fixed top-2 left-0 right-0 font-semibold z-50 flex justify-center transition-all duration-300 `}
      >
        <div
          className={`transition-all py-2 duration-300 ${
            isScrolled ? "rounded-lg bg-white shadow-lg" : ""
          } inline-block`}
        >
          <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
            <div className={`navbar-start`}>
              <div className={`${isScrolled ? "" : "rounded-lg bg-white"}`}>
                <Link to={`/`}>
                  <img
                    src="/logo-navbar.png"
                    alt="Logo"
                    className="md:h-[60px] h-auto w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="navbar-end flex items-center lg:hidden">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={`/`}> Beranda</Link>
                  </li>
                  <li>
                    <details>
                      <summary>Pemerintahan</summary>
                      <ul className="p-2">
                        <li>
                          <Link to={`/sejarah`}>Sejarah</Link>
                        </li>
                        <li>
                          <Link to={`/visi-misi`}>Visi & Misi</Link>
                        </li>
                        <li>
                          <details>
                            <summary>Perangkat Daerah</summary>
                            <ul className="p-2">
                              <li>
                                <Link to={`/tim-percepatan-pembangunan`}>
                                  Tim Percepatan Pembangunan
                                </Link>
                              </li>
                              <li>
                                <Link to={`/kepala-opd`}>Kepala OPD</Link>
                              </li>
                              <li>
                                <Link to={`/ketua-dprd`}>Ketua DPRD</Link>
                              </li>
                              <li>
                                <Link to={`/gubernur`}>Gubernur</Link>
                              </li>
                              <li>
                                <Link to={`/wakil-gubernur`}>
                                  Wakil Gubernur
                                </Link>
                              </li>
                              <li>
                                <Link to={`/sekretariat-daerah`}>
                                  Sekretariat Daerah
                                </Link>
                              </li>
                              <li>
                                <Link to={`/asisten-sekretariat-daerah`}>
                                  Asisten Sekretariat Daerah
                                </Link>
                              </li>
                              <li>
                                <Link to={`/staff-ahli`}>Staff Ahli</Link>
                              </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <Link to={`/layanan-publik`}> Layanan Publik</Link>
                  </li>
                  <li>
                    <details>
                      <summary>Publikasi</summary>
                      <ul className="p-2">
                        <li>
                          <Link to={`/berita`}>Berita</Link>
                        </li>
                        <li>
                          <Link to={`/pengumuman`}>Pengumuman</Link>
                        </li>
                        <li>
                          <Link to={`/agenda`}>Agenda</Link>
                        </li>
                        <li>
                          <Link to={`/statistik`}>Statistik</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Dokumen & Peraturan</summary>
                      <ul className="p-2">
                        <li>
                          <Link to={`/perda-apbd-2024`}> Perda APBD 2024</Link>
                        </li>
                        <li>
                          <Link to={`/perda-apbd-2023`}> Perda APBD 2023</Link>
                        </li>
                        <li>
                          <Link to={`/apbd-kepri-2023`}> APBD Kepri 2023</Link>
                        </li>
                        <li>
                          <Link to={`/opini-bpk-ri-2023`}>
                            Opini BPK RI 2023
                          </Link>
                        </li>
                        <li>
                          <Link to={`/laporan-bpkd`}>Laporan BPKD</Link>
                        </li>
                        <li>
                          <Link to={`/produk-hukum`}>Produk Hukum</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Galeri</summary>
                      <ul className="p-2">
                        <li>
                          <Link to={`/foto-video`}>Foto & Video</Link>
                        </li>
                        <li>
                          <Link to={`/aset-multimedia`}>Aset MultiMedia</Link>
                        </li>
                        <li>
                          <Link to={`/ai-kepri`}>AI Kepri</Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to={`/`}> Beranda</Link>
                </li>
                <li>
                  <details>
                    <summary>Pemerintahan</summary>
                    <ul className="p-2">
                      <li>
                        <Link to={`/sejarah`}>Sejarah</Link>
                      </li>
                      <li>
                        <Link to={`/visi-misi`}>Visi & Misi</Link>
                      </li>
                      <li>
                        <details>
                          <summary>Perangkat Daerah</summary>
                          <ul className="p-2">
                            <li>
                              <Link to={`/tim-percepatan-pembangunan`}>
                                Tim Percepatan Pembangunan
                              </Link>
                            </li>
                            <li>
                              <Link to={`/kepala-opd`}>Kepala OPD</Link>
                            </li>
                            <li>
                              <Link to={`/ketua-dprd`}>Ketua DPRD</Link>
                            </li>
                            <li>
                              <Link to={`/gubernur`}>Gubernur</Link>
                            </li>
                            <li>
                              <Link to={`/wakil-gubernur`}>Wakil Gubernur</Link>
                            </li>
                            <li>
                              <Link to={`/sekretariat-daerah`}>
                                Sekretariat Daerah
                              </Link>
                            </li>
                            <li>
                              <Link to={`/asisten-sekretariat-daerah`}>
                                Asisten Sekretariat Daerah
                              </Link>
                            </li>
                            <li>
                              <Link to={`/staff-ahli`}>Staff Ahli</Link>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link to={`/layanan-publik`}> Layanan Publik</Link>
                </li>
                <li>
                  <details>
                    <summary>Publikasi</summary>
                    <ul className="p-2">
                      <li>
                        <Link to={`/berita`}>Berita</Link>
                      </li>
                      <li>
                        <Link to={`/pengumuman`}>Pengumuman</Link>
                      </li>
                      <li>
                        <Link to={`/agenda`}>Agenda</Link>
                      </li>
                      <li>
                        <Link to={`/statistik`}>Statistik</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Dokumen & Peraturan</summary>
                    <ul className="p-2">
                      <li>
                        <Link to={`/perda-apbd-2024`}> Perda APBD 2024</Link>
                      </li>
                      <li>
                        <Link to={`/perda-apbd-2023`}> Perda APBD 2023</Link>
                      </li>
                      <li>
                        <Link to={`/apbd-kepri-2023`}> APBD Kepri 2023</Link>
                      </li>
                      <li>
                        <Link to={`/opini-bpk-ri-2023`}>Opini BPK RI 2023</Link>
                      </li>
                      <li>
                        <Link to={`/laporan-bpkd`}>Laporan BPKD</Link>
                      </li>
                      <li>
                        <Link to={`/produk-hukum`}>Produk Hukum</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Galeri</summary>
                    <ul className="p-2">
                      <li>
                        <Link to={`/foto-video`}>Foto & Video</Link>
                      </li>
                      <li>
                        <Link to={`/aset-multimedia`}>Aset MultiMedia</Link>
                      </li>
                      <li>
                        <Link to={`/ai-kepri`}>AI Kepri</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
