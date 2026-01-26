import { NavLink } from "react-router-dom";
import Image from "@/assets/img/hero-image.webp";
import { memo } from "react";

const ProfileMenu = ({ closeDropdown }: { closeDropdown: () => void }) => {
  return (
    <section className="font-pj flex w-max">
      <div className="relative flex w-72 flex-1 flex-col px-7 py-10">
        <h3 className="mb-2">Profile</h3>
        {[
          { to: "/pengantar", label: "Pengantar" },
          { to: "/visi-misi", label: "Visi & Misi" },
        ].map((data, index) => (
          <NavLink
            key={data.label ?? index}
            to={data.to}
            onClick={() => closeDropdown()}
            className="group relative mb-2 flex w-full cursor-pointer items-center gap-1.5 text-2xl font-semibold"
          >
            <span className="transition-[padding] group-hover:pl-4">
              {data.label}
            </span>
            <span className="absolute right-0 -bottom-1 h-0.5 w-0 bg-black transition-[width] duration-300 group-hover:right-auto group-hover:left-0 group-hover:w-full"></span>
            <span className="absolute left-0 size-2 scale-0 rounded-full bg-black transition-all group-hover:scale-100 group-hover:delay-100 group-hover:duration-300"></span>
          </NavLink>
        ))}
      </div>
      <div className="h-full max-w-90 p-5">
        <img
          src={Image}
          alt="gambar"
          loading="eager"
          className="h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default memo(ProfileMenu);
