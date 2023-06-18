import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Together1 } from "../../asset/image/main";

const Introduce = () => {
  const router = useRouter();

  return (
    <>
      <div className="fixed w-[100vw] h-screen">
        <div className="grid w-full h-full grid-cols-2 grid-rows-2">
          {/* 문구 */}
          <div className="justify-center z-5 mt-[90px] items-center">
            <div className="justify-center text-center mt-[20px]">
              <div className="flex items-center justify-center ">
                <p className="mb-8 mr-2 text-4xl font-bold ">Jiran Together</p>
                <Image
                  className="mb-8 rounded-full cursor-pointer"
                  src="https://tistory3.daumcdn.net/tistory/571103/attach/c87f780fad0443338143eda499b54d37"
                  width={30}
                  height={30}
                  alt="Jiran"
                />
              </div>

              <div className="text-lg mb-14">
                <p>
                  <span className="font-semibold text-primary">
                    지란지교 동아리
                  </span>
                  는 운동, 보드게임, 개발, 맛집탐방, 원클래스 등 다양한 분야에서
                  활동하며,
                </p>
                <p>
                  친목 뿐만 아니라 흥미로운 취미생활도 함께 즐길 수 있는
                  공간입니다.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    지란지교 동아리
                  </span>
                  함께 하세요, 즐거움이 가득한 동아리에서 여러분을 기다립니다!
                </p>
              </div>

              <Button
                className="text-black bg-white"
                onClick={() => router.push("/main")}
              >
                Click me
              </Button>
            </div>
          </div>
          <div>
            <Image
              className="inset-0 -z-10 opacity-40"
              src={Together1}
              alt="img"
            />

            <Image
              className="inset-0 -z-10 opacity-40"
              src={Together1}
              alt="img"
            />
          </div>

          <div>
            <Image
              className="absolute inset-0 -z-10 opacity-40"
              src={Together1}
              alt="img"
            />
            <Image
              className="inset-0 -z-10 opacity-40"
              src={Together1}
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
