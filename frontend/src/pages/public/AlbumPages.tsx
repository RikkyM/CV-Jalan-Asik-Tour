import Image1 from "@/assets/img/1.webp";
import Image2 from "@/assets/img/2.webp";
import Image3 from "@/assets/img/3.webp";
import Image4 from "@/assets/img/4.webp";

const AlbumPages = () => {
  return (
    <div className="mx-auto">
      <section className="mx-auto h-max max-w-7xl touch-pan-y px-10 py-20 space-y-5">
        <h2 className="text-center text-3xl font-medium">Album Kegiatan</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {[
            {
              image: Image1,
            },
            {
              image: Image2,
            },
            {
              image: Image3,
            },
            {
              image: Image4,
            },
          ].map((data, index) => (
            <img key={index} src={data.image} alt={`Gambar ${index + 1}`} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AlbumPages;
