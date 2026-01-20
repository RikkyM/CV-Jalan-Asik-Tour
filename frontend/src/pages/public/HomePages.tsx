import {
  BadgeDollarSign,
  Bus,
  ClipboardCheck,
  PlaneIcon,
  Timer,
  Train,
  UserCheck,
} from "lucide-react";
import HeroImage from "@/assets/img/hero-image.webp";
// import Img1 from "@/assets/img/img1.webp";
// import Img2 from "@/assets/img/img2.webp";
// import Hotel from "@/assets/img/hotel.webp";

const HomePages = () => {
  return (
    <div className="mx-auto min-h-dvh">
      <section className="mx-auto flex max-w-7xl">
        <div className="flex flex-1 flex-col p-2">
          <div className="squircle relative z-0 flex-1 overflow-hidden shadow">
            <img
              src={HeroImage}
              alt="hero"
              className="h-full w-full object-cover object-right"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="font-pj absolute inset-0 grid bg-black/10 px-10 py-10 font-bold text-white sm:py-15 md:py-27">
              <div>
                <p className="text-lg font-medium sm:text-4xl">
                  Traveling Jadi Lebih Asik
                </p>
                <h2 className="text-3xl font-extrabold sm:text-8xl">
                  Jalan Asik Tour & Travel
                </h2>
                <p className="text-shadow text-xs font-thin sm:mt-4 sm:text-2xl">
                  Wujudkan Impian Liburan Anda
                </p>
              </div>
            </div>
          </div>
          {/* <div className="font-pj h-full max-h-32 py-5">
            <form className="grid h-full w-full grid-cols-3 gap-3 rounded bg-white px-2 lg:grid-cols-4 lg:gap-7">
              <div className="flex flex-1 flex-col justify-center">
                <h2 className="flex items-center justify-between font-bold">
                  <span className="text-sm lg:text-base">Destinasi</span>
                  <ChevronDown className="size-5" />
                </h2>
                <p className="text-xs font-medium text-gray-500 lg:text-sm">
                  Yogyakarta, Indonesia
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <h2 className="flex items-center justify-between font-bold">
                  <span className="text-sm lg:text-base">Tanggal</span>
                  <ChevronDown className="size-5" />
                </h2>
                <p className="text-xs font-medium text-gray-500 lg:text-sm">
                  Januari 20, 2026
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <h2 className="flex items-center justify-between font-bold">
                  <span className="text-sm lg:text-base">Harga</span>
                  <ChevronDown className="size-5" />
                </h2>
                <p className="text-xs font-medium text-gray-500 lg:text-sm">
                  Rp 100.000 - Rp 500.000
                </p>
              </div>
              <div className="col-span-3 lg:col-span-1 lg:p-5">
                <button
                  type="button"
                  className="font-pj h-full w-full cursor-pointer rounded bg-blue-500 p-1.5 font-bold text-white transition-colors duration-200 ease-[cubic-bezier(0.79,0.14,0.15,0.86)] hover:bg-blue-600"
                >
                  Cari
                </button>
              </div>
            </form>
          </div> */}
        </div>
        <div className="scrollbar-hide relative m-2 hidden w-full max-w-90 snap-y snap-proximity snap-start scroll-pt-3 space-y-3 overflow-auto scroll-smooth rounded-3xl outline-none lg:block">
          <div className="squircle group relative h-full max-h-52 snap-start overflow-hidden bg-blue-500">
            {/* <img
              src={Img1}
              alt="image"
              className="h-full w-full object-cover object-center transition-all duration-200 hover:brightness-80"
            /> */}
            <div className="absolute bottom-0 px-5 font-medium text-white opacity-0 transition-all duration-300 group-hover:bottom-3 group-hover:opacity-100">
              Pantai
            </div>
          </div>
          <div className="squircle group relative h-full max-h-52 snap-start overflow-hidden bg-blue-500">
            {/* <img
              src={Hotel}
              alt="image"
              className="h-full w-full object-cover object-center transition-all duration-200 hover:brightness-80"
            /> */}
            <div className="absolute bottom-0 px-5 font-medium text-white opacity-0 transition-all duration-300 group-hover:bottom-3 group-hover:opacity-100">
              Penginapan
            </div>
          </div>
          <div className="squircle group relative h-full max-h-52 snap-start overflow-hidden bg-blue-500">
            {/* <img
              src={Img2}
              alt="image"
              className="h-full w-full object-cover object-center transition-all duration-200 hover:brightness-80"
            /> */}
            <div className="absolute bottom-0 px-5 font-medium text-white opacity-0 transition-all duration-300 group-hover:bottom-3 group-hover:opacity-100">
              Gunung
            </div>
          </div>
        </div>
      </section>
      <section className="font-pj mx-auto w-full max-w-7xl space-y-5 px-10 py-16 lg:py-24">
        <h2 className="relative mx-auto w-max text-center text-lg font-extrabold after:absolute after:right-0 after:bottom-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-150 after:content-[''] hover:after:right-auto hover:after:left-0 hover:after:w-full hover:after:duration-200 lg:text-2xl">
          Layanan Perjalanan
        </h2>
        <div className="mx-auto grid gap-5 md:grid-cols-3">
          <div className="space-y-2 rounded lg:p-5">
            <div className="flex flex-col items-center justify-center gap-3 text-lg md:items-start md:justify-start lg:text-3xl">
              <PlaneIcon className="size-10" />
              <h2>Tiket Pesawat</h2>
            </div>
            <p className="text-center text-sm md:text-start">
              Pesan tiket pesawat domestik dan internasional dengan harga
              terbaik. Kami menyediakan berbagai pilihan maskapai terpercaya
              dengan jadwal penerbangan yang fleksibel sesuai kebutuhan
              perjalanan Anda. Dapatkan kemudahan dalam membandingkan harga,
              memilih kursi favorit, dan proses booking yang cepat dan aman.
              {/* Pesawat domestik dan internasional */}
            </p>
          </div>
          <div className="space-y-2 rounded lg:p-5">
            <div className="flex flex-col items-center justify-center gap-3 text-lg md:items-start md:justify-start lg:text-3xl">
              <Train className="size-10" />
              <h2>Tiket Kereta Api</h2>
            </div>
            <p className="text-center text-sm md:text-start">
              Layanan pemesanan tiket kereta api untuk semua kelas dan rute
              tersedia. Nikmati perjalanan nyaman dengan berbagai pilihan kereta
              mulai dari ekonomi hingga eksekutif. Sistem booking online kami
              memudahkan Anda memilih jadwal keberangkatan, gerbong, dan tempat
              duduk sesuai preferensi dengan konfirmasi instan.
            </p>
          </div>
          <div className="space-y-2 rounded lg:p-5">
            <div className="flex flex-col items-center justify-center gap-3 text-lg md:items-start md:justify-start lg:text-3xl">
              <Bus className="size-10" />
              <h2>Tiket Bus</h2>
            </div>
            <p className="text-center text-sm md:text-start">
              Pesan tiket bus untuk perjalanan antar kota dan antar provinsi
              dengan mudah. Tersedia berbagai operator bus terpercaya dengan
              fasilitas lengkap dan harga kompetitif. Pilih jadwal keberangkatan
              yang sesuai, bandingkan harga dari berbagai penyedia, dan dapatkan
              kursi terbaik untuk perjalanan Anda yang nyaman dan aman.
            </p>
          </div>
        </div>
      </section>
      <section className="font-pj h-max touch-pan-y bg-[#FF9C5A] px-4 text-white shadow-lg lg:px-10">
        <div className="relative mx-auto flex h-full max-w-7xl flex-col p-2 lg:flex-row lg:gap-10">
          <div className="flex-1 bg-red-500">
            <h2 className="sticky top-30 mt-10 block text-right text-xl font-bold after:absolute after:right-0 after:-bottom-3 after:h-1 after:w-0 after:bg-white after:transition-all after:duration-300 after:content-[''] hover:after:right-auto hover:after:left-0 hover:after:w-full lg:my-27 lg:text-3xl">
              Nilai Perusahaan
            </h2>
          </div>
          <div className="w-full flex-1 divide-y-2 divide-gray-300 font-semibold text-white *:transition-all *:duration-300 lg:py-20">
            {[
              {
                title: "Integritas",
                description:
                  "Menjunjung tinggi kejujuran, tanggung jawab, sertia konsistensi dalam setiap tindakan dan keputusan yang diambil.",
              },
              {
                title: "Profesionalisme",
                description:
                  "Bekerja sesuai standar yang berlaku dengan menjunjung etika, disiplin, dan sikap yang bertanggung jawab dalam memberikan layanan.",
              },
              {
                title: "Komitmen Kualitas",
                description:
                  "Menjaga dan meningkatkan mutu layanan secara berkesinambungan guna memastikan hasil yang optimal dan terpercaya.",
              },
              {
                title: "Pelayanan",
                description:
                  "Mengutamakan kepuasan pelanggan dengan memahami kebutuhan mereka serta memberikan solusi yang tepat dan responsif.",
              },
            ].map((data, index) => (
              <div
                key={data.title ?? index}
                className="relative flex h-max w-full"
              >
                <label
                  htmlFor={data.title}
                  className="flex w-full cursor-pointer flex-col pt-8"
                >
                  <input
                    type="checkbox"
                    id={data.title}
                    className="peer hidden"
                  />
                  <div className="flex w-full justify-between text-xl transition-colors duration-300 hover:text-gray-300 lg:text-2xl">
                    <span>{data.title}</span> <span>0{index + 1}</span>
                  </div>
                  <div className="mt-4 mb-4 h-0 max-h-0 overflow-hidden font-normal transition-all duration-300 duration-500 peer-checked:h-full peer-checked:max-h-50 lg:text-lg">
                    {data.description}
                  </div>
                </label>
              </div>
              // <div key={data.title ?? index} className="flex justify-between">

              // </div>
            ))}
          </div>
        </div>
      </section>
      <section className="font-pj mx-auto max-w-7xl px-5 py-10 lg:py-20">
        <h2 className="text-center font-bold lg:text-2xl">
          Keunggulan Layanan
        </h2>
        <div className="grid gap-5 p-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Proses pemesanan yang tertib dan transparan",
              icon: <ClipboardCheck className="size-10" />,
            },
            {
              title: "Ketepatan waktu pelaksanaan layanan",
              icon: <Timer className="size-10" />,
            },
            {
              title: "Harga kompetitif dan jelas",
              icon: <BadgeDollarSign className="size-10" />,
            },
            {
              title: "Pelayanan yang responsif dan profesional",
              icon: <UserCheck className="size-10" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 border border-gray-300 p-5 transition-all duration-200 ease-[cubic-bezier(0.65,0.05,0.36,1)] hover:shadow-[5px_5px_0_rgba(0,0,0,1)]"
            >
              {item.icon}
              <div className="text-center text-pretty">{item.title}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePages;
