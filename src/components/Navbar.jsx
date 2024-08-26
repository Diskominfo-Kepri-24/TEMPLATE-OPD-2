import { useState, useEffect } from "react";

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
              <a>
                <img
                  src="/logo-navbar.png"
                  alt="Logo"
                  className="md:h-[60px] h-auto w-auto"
                />
              </a>
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
                    <a>Beranda</a>
                  </li>
                  <li>
                    <details>
                      <summary>Pemerintahan</summary>
                      <ul className="p-2">
                        <li>
                          <a>Sejarah</a>
                        </li>
                        <li>
                          <a>Visi dan Misi</a>
                        </li>
                        <li>
                          <a>Perangkat Daerah</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a>Layanan Publik</a>
                  </li>
                  <li>
                    <details>
                      <summary>Publikasi</summary>
                      <ul className="p-2">
                        <li>
                          <a>Berita</a>
                        </li>
                        <li>
                          <a>Pengumuman</a>
                        </li>
                        <li>
                          <a>Agenda</a>
                        </li>
                        <li>
                          <a>Statistik</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Dokumen & Peraturan</summary>
                      <ul className="p-2">
                        <li>
                          <a>Perda APBD 2024</a>
                        </li>
                        <li>
                          <a>Perda APBD 2023</a>
                        </li>
                        <li>
                          <a>APBD Kepri 2023</a>
                        </li>
                        <li>
                          <a>Opini BPK RI 2023</a>
                        </li>
                        <li>
                          <a>Laporan BPKD</a>
                        </li>
                        <li>
                          <a>Produk Hukum</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Galeri</summary>
                      <ul className="p-2">
                        <li>
                          <a>Foto & Video</a>
                        </li>
                        <li>
                          <a>Aset MultiMedia</a>
                        </li>
                        <li>
                          <a>AI Kepri</a>
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
                  <a>Beranda</a>
                </li>
                <li>
                  <details>
                    <summary>Pemerintahan</summary>
                    <ul className="p-2">
                      <li>
                        <a>Sejarah</a>
                      </li>
                      <li>
                        <a>Visi dan Misi</a>
                      </li>
                      <li>
                        <a>Perangkat Daerah</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Layanan Publik</a>
                </li>
                <li>
                  <details>
                    <summary>Publikasi</summary>
                    <ul className="p-2">
                      <li>
                        <a>Berita</a>
                      </li>
                      <li>
                        <a>Pengumuman</a>
                      </li>
                      <li>
                        <a>Agenda</a>
                      </li>
                      <li>
                        <a>Statistik</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Dokumen & Peraturan</summary>
                    <ul className="p-2">
                      <li>
                        <a>Perda APBD 2024</a>
                      </li>
                      <li>
                        <a>Perda APBD 2023</a>
                      </li>
                      <li>
                        <a>APBD Kepri 2023</a>
                      </li>
                      <li>
                        <a>Opini BPK RI 2023</a>
                      </li>
                      <li>
                        <a>Laporan BPKD</a>
                      </li>
                      <li>
                        <a>Produk Hukum</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>Galeri</summary>
                    <ul className="p-2">
                      <li>
                        <a>Foto & Video</a>
                      </li>
                      <li>
                        <a>Aset MultiMedia</a>
                      </li>
                      <li>
                        <a>AI Kepri</a>
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
