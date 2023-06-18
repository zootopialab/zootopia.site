import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Together1 } from "../../asset/image/main";

const AllClass = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="grid justify-center w-full space-x-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <Card
            href={"https://naver.me/5gir8XjF"}
            src={Together1}
            alt={"주토피아"}
            title="주토피아"
          />

          <Card
            href={"https://naver.me/5gir8XjF"}
            src={Together1}
            alt={"주토피아"}
            title="주토피아"
          />

          <Card
            href={"https://naver.me/5gir8XjF"}
            src={Together1}
            alt={"주토피아"}
            title="주토피아"
          />

          <Card
            href={"https://naver.me/5gir8XjF"}
            src={Together1}
            alt={"주토피아"}
            title="주토피아"
          />
        </div>
      </div>
    </>
  );
};

export function Card({
  href,
  src,
  alt,
  title,
}: {
  href: string;
  src: StaticImageData;
  alt: string;
  title: string;
}) {
  return (
    <div className="my-5">
      <Link href={href} target={"_blank"}>
        <Image
          src={src}
          alt={alt}
          className="w-[400px] h-[400px] rounded-3xl"
        />
        <p className="mt-2 ml-4 text-lg font-bold text-gray-800">{title}</p>
      </Link>
    </div>
  );
}

export default AllClass;
