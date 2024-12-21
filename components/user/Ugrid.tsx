"use client";
import { gridItems } from "@/data";
import { UserGrid, UserGridItem } from "./UserGrid";

const Ugrid = () => {
  return (
    <section id="about">
      <UserGrid className="w-full pt-10 pb-2">
        {gridItems.map((item, i) => (
          <UserGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </UserGrid>
    </section>
  );
};

export default Ugrid;