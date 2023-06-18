import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Together1 } from "../../asset/image/main";

const MyClass = () => {
  return (
    <>
      <div className="space-y-4">
        <div className="grid justify-center w-full space-x-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="my-5">
            <Link href="https://naver.me/5gir8XjF" target={"_blank"}>
              <Image
                src={Together1}
                alt="주토피아"
                className="w-[400px] h-[400px] rounded-3xl"
              />
              <p className="mt-2 ml-4 text-lg font-bold text-gray-800">
                주토피아
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClass;
