import PengantarImage from "@/assets/img/1.jpeg";

const PengantarPages = () => {
  return (
    <div className="mx-auto">
      <section className="mx-auto flex h-max max-w-7xl touch-pan-y flex-col space-y-5 px-10 py-20 md:flex-row md:gap-10 md:px-5 md:py-18 lg:gap-20 lg:px-20">
        <div className="w-full flex-1">
          <img
            src={PengantarImage}
            alt="image"
            className="md:max-w-auto sticky top-35 mx-auto w-full max-w-120 rounded-lg border border-gray-200 shadow md:min-w-40"
          />
        </div>
        <div className="font-pj h-full flex-1 space-y-4">
          <h3 className="text-center text-xl font-bold md:text-left md:text-3xl">
            Profil
          </h3>
          <div className="space-y-5 text-justify indent-5 text-sm text-pretty md:text-xl">
            <p>
              Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa. Sejak
              berdiri pada tahun 2020, Jalan Asik Tour dan Travel berkomitmen
              untuk memberikan layanan perjalanan dan pendukung kegiatan secara
              profesional, tertib dan bertanggung jawab.
            </p>
            <p>
              Kami menyadari bahwa layanan perjalanan dan penyelenggaraan
              kegiatan memerlukan perencanaan yang matang, ketepatan waktu,
              serta administrasi yang jelas. Oleh karena itu, Jalan Asik Tour
              dan Travel senantiasa mengedepankan standar pelayanan yang dapat
              diandalkan guna mendukung kelancaran setiap kegiatan pelanggan.
            </p>

            <p>
              Jalan Asik Tour dan Travel adalah perusahaan jasa yang menyediakan
              layanan tiket perjalanan (penerbangan, kereta, bus, dan kapal
              laut), serta pendukung kegiatan secara terpadu. Dengan pengalaman
              operasional sejak tahun 2020, kami berupaya menghadirkan layanan
              yang mengutamakan ketepatan jadwal, kejelasan informasi, serta
              kemudahan proses bagi pelanggan.
            </p>
            <p>
              Selain layanan perjalanan, kami juga menyediakan snack rapat dan
              catering untuk menunjang pelaksanaan pertemuan, rapat, dan
              kegiatan resmi lainnya, sehingga pelanggan memperoleh solusi
              layanan dalam satu pintu.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PengantarPages;
