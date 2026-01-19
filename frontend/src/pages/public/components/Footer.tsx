const Footer = () => {
  return (
    <footer className="font-pj w-full divide-y bg-blue-500 p-3 *:py-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-center text-pretty text-white md:grid-cols-2 md:gap-13 lg:grid-cols-3 lg:text-left">
        <div className="space-y-3 md:col-span-2 lg:col-span-1">
          <h2 className="font-bold lg:text-2xl">Jalan Asik Tour & Travel</h2>
          <p className="text-xs font-medium lg:text-sm">
            Mitra Profesional Layanan Perjalanan dan Pendukung Kegiatan.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold lg:text-2xl">Layanan</h2>
          <ul className="space-y-1 text-xs font-medium *:mx-auto *:lg:mx-0 *:w-max *:cursor-pointer lg:text-sm">
            <li className="after:content[''] relative after:absolute after:right-0 after:-bottom-px after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:right-auto hover:after:left-0 hover:after:w-full">
              Tiket Pesawat
            </li>
            <li className="after:content[''] relative after:absolute after:right-0 after:-bottom-px after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:right-auto hover:after:left-0 hover:after:w-full">
              Tiket Kereta
            </li>
            <li className="after:content[''] relative after:absolute after:right-0 after:-bottom-px after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:right-auto hover:after:left-0 hover:after:w-full">
              Tiket Bus
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold lg:text-2xl">Hubungi Kami</h2>
          <ul className="space-y-1 text-xs font-medium lg:text-sm">
            <li>
              <a
                className="after:content[''] relative after:absolute after:right-0 after:-bottom-px after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:right-auto hover:after:left-0 hover:after:w-full"
                href="tel:08220583696"
              >
                08220583696
              </a>
            </li>
            <li>
              <a
                className="after:content[''] relative after:absolute after:right-0 after:-bottom-px after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:right-auto hover:after:left-0 hover:after:w-full"
                href="mailto:cvjalanasiktourdantravel@gmail.com"
              >
                cvjalanasiktourdantravel@gmail.com
              </a>
            </li>
            <li>
              <p
                // href="https://www.google.com/maps/search/?api=1&query=Jalan+Dempo+Dalam+Ilir+Timur+I+Palembang"
                // target="_blank"
                // rel="noopener noreferrer"
                className="hover:underline"
              >
                Jalan Dempo Dalam, Kecamatan Ilir Timur I, Kota Palembang
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs lg:text-sm font-medium text-white">
        Copyright © {new Date().getFullYear()} Jalan Asik Tour & Travel
      </div>
    </footer>
  );
};

export default Footer;
