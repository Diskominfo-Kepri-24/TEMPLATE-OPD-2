import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-color">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Diskominfo"
                title="Diskominfo"
                className="inline-flex items-center bg-white rounded-lg"
              >
                <img src={"/logo-navbar.png"} alt="logo" width={250} />
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm font-semibold text-white">
                  Alamat : Pusat Pemerintahan Provinsi Kepulauan Riau Istana
                  Kota Piring Gedung Sultan Mahmud Riayat Syah Gedung B2 Lantai
                  III Pulau Dompak Tanjung Pinang
                </p>
                <p className="mt-4 text-sm font-semibold text-white">
                  Email : kominfo@kepriprov.go.id
                </p>
                <p className="mt-4 text-sm font-semibold text-white">
                  No.Telp : (0771-4575023) Fax : (0771)4575123
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-white">
                Sosial Media
              </p>
              <div>
                <a
                  href="/"
                  className=" flex text-white transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-third-text"
                >
                  <FaFacebook className="h-5" />
                  <span className="ml-2 font-semibold text-white hover:text-third-text">
                    Facebook
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="/"
                  className=" flex text-white transition-colors duration-300  hover:text-third-text hover:text-deep-purple-accent-400"
                >
                  <FaInstagram className="h-5" />
                  <span className="ml-2 font-semibold text-white hover:text-third-text">
                    Instagram
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="/"
                  className="flex text-white transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-third-text"
                >
                  <FaTiktok className="h-5 " />
                  <span className="ml-2 font-semibold text-white hover:text-third-text">
                    Tiktok
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="/"
                  className="flex text-white transition-colors duration-300 hover:text-deep-purple-accent-400 hover:text-third-text"
                >
                  <FaYoutube className="h-5" />
                  <span className="ml-2 font-semibold text-white hover:text-third-text">
                    Youtube
                  </span>
                </a>
              </div>
            </div>
            <div>
              <span className="text-sm font-bold tracking-wide text-primary-text">
                Statistik Kunjungan
              </span>
              <div className="mt-4 space-y-2 ">
                <div className="flex justify-between text-sm items-center text-primary-text">
                  <p className="font-semibold">Sedang Online</p>
                  <div className="flex-grow border-t border-dashed text-primary-text mx-2"></div>
                  <p>1</p>
                </div>
                <div className="flex justify-between text-sm items-center text-primary-text">
                  <p className="font-semibold">Hari Ini</p>
                  <div className="flex-grow border-t border-dashed text-primary-text mx-2"></div>
                  <p>35</p>
                </div>
                <div className="flex justify-between text-sm items-center text-primary-text">
                  <p className="font-semibold">Kemarin</p>
                  <div className="flex-grow border-t border-dashed text-primary-text  mx-2"></div>
                  <p>30</p>
                </div>
                <div className="flex justify-between text-sm items-center text-primary-text">
                  <p className="font-semibold">Bulan Ini</p>
                  <div className="flex-grow border-t border-dashed text-primary-text mx-2"></div>
                  <p>895</p>
                </div>
                <div className="flex justify-between text-sm items-center text-primary-text">
                  <p className="font-semibold">Bulan Kemarin</p>
                  <div className="flex-grow border-t border-dashed text-primary-text mx-2"></div>
                  <p>431</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t  border-white lg:flex-row">
            <p className="text-sm font-semibold text-primary-text">
              Copyright © 2024 Template OPD  By Muhamad Nur Syami &
              Mahadi Dwi Nugraha
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
