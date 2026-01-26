import { NavLink } from "react-router-dom";
import Image from "@/assets/img/hotel.webp";
import { memo } from "react";

const ProdukMenu = ({ closeDropdown }: { closeDropdown: () => void }) => {
  return (
    <section className="font-pj flex w-full">
      <div className="relative my-10 flex flex-1 flex-col px-7">
        <div className="flex gap-10">
          <div className="min-w-62">
            <h3 className="mb-2">Produk</h3>
            {[
              { to: "/pesawat", label: "Pesawat" },
              { to: "/kereta", label: "Kereta" },
              { to: "/bus", label: "Bus" },
              { to: "/kapal-laut", label: "Kapal Laut" },
              { to: "/paket-wisata", label: "Paket Wisata" },
            ].map((data, index) => (
              <NavLink
                key={index}
                to={data.to}
                onClick={() => closeDropdown()}
                className="group relative mb-2 flex w-full cursor-pointer items-center gap-1.5 text-2xl font-semibold"
              >
                <span className="transition-all group-hover:translate-x-4">
                  {data.label}
                </span>
                <span className="absolute right-0 -bottom-1 h-0.5 w-0 bg-black transition-[width] duration-300 group-hover:right-auto group-hover:left-0 group-hover:w-full"></span>
                <span className="absolute left-0 size-2 scale-0 rounded-full bg-black transition-all group-hover:scale-100 group-hover:delay-100 group-hover:duration-300"></span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-5">
        <img
          src={Image}
          alt="gambar"
          loading="eager"
          className="h-full max-w-90"
        />
      </div>
    </section>
  );
};

export default memo(ProdukMenu);
