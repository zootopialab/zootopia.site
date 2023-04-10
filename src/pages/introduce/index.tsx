import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { PhotoFood } from "../../asset/image/main";
import Header from "../../components/header/Header";

const Introduce = () => {
  const router = useRouter();

  return (
    <>
      <div className="fixed  w-[100vw] h-screen">
        <Image
          className="absolute inset-0 opacity-40 -z-10 "
          src={PhotoFood}
          alt="img"
        />

        <div className="z-20">
          <Header />
          <div className="justify-center mt-40 text-center">
            <p className="mb-8 text-4xl font-bold">This is JMY Homepage</p>
            <p className="text-lg">
              You can get food recommendations on this site and share them
              together.
            </p>
            <p className="mb-5 text-lg">
              If you are interested in more about this site, please click the
              button.
            </p>
            <Button
              className="text-black bg-white"
              onClick={() => router.push("/main")}
            >
              Click me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
