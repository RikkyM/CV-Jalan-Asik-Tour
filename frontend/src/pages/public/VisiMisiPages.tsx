const VisiMisiPages = () => {
  return (
    <div className="mx-auto">
      <section className="font-pj mx-auto h-max max-w-7xl touch-pan-y flex-col space-y-10 px-10 py-10 md:flex-row  md:px-20 md:py-18 lg:gap-20 lg:px-20 text-justify text-pretty">
        <div className="flex w-full">
          <div className="flex-1 space-y-4 ">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-center">Visi</h2>
            <p className="text-sm md:text-base">
              Menjadi perusahaan jasa perjalanan dan layanan pendukung kegiatan
              yang profesional, terpercaya, dan berkelanjutan, dengan
              mengutamakan kualitas pelayanan serta kepuasan pelanggan sebagai
              prioritas utama dalam setiap layanan yang diberikan.
            </p>
          </div>
          <div className="w-full max-w-120 hidden lg:block"></div>
        </div>
        <div className="flex w-full">
          <div className="w-full max-w-120 hidden lg:block"></div>
          <div className="flex-1 space-y-4 ">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-medium text-center">Misi</h2>
            <p className="text-sm md:text-base">
              Sebagai bentuk komitmen dalam mewujudkan visi tersebut, kami
              menjalankan misi perusahaan melalui langkah-langkah berikut:
            </p>
            <ul className="space-y-2 list-disc text-sm md:text-base">
              <li>
                Menyediakan layanan perjalanan yang aman, nyaman, dan tepat
                waktu guna memberikan pengalaman perjalanan yang menyenangkan
                bagi pelanggan.
              </li>
              <li>
                Memberikan kemudahan dalam proses pemesanan melalui sistem
                administrasi yang tertib, jelas, dan transparan.
              </li>
              <li>
                Menyediakan layanan pendukung kegiatan dengan standar kualitas
                yang konsisten dan dapat diandalkan.
              </li>
              <li>
                Menjaga kepercayaan pelanggan melalui pelayanan yang
                profesional, bertanggung jawab, dan berorientasi pada kepuasan.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisiMisiPages;
