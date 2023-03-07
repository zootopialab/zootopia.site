import Image from "next/image";
import React, { useState } from "react";
import Tab from "../tab/index";
import { Korean1, Korean2, Korean3 } from "../../asset/image/korean";
import Link from "next/link";
import { Japan1, Japan2 } from "../../asset/image/japan";

const KindFood = () => {
  const tabList = ["한식", "일식", "중식", "양식"];
  const [tab, setTab] = useState(tabList[0]);

  return (
    <>
      <Tab item={tabList} selected={tab} handleSelect={setTab} />
      {tab === "한식" ? (
        <>
          <div className="space-y-4">
            <div className="grid justify-center w-full space-x-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <div className="my-5">
                <Link href="https://naver.me/Go5D9ncR" target={"_blank"}>
                  <Image
                    src={Korean1}
                    alt="한식"
                    className="w-[400px] h-[400px] rounded-3xl"
                  />
                  <p className="text-lg text-gray-800">
                    고씨네메밀공방 분당본점
                  </p>
                </Link>
              </div>
              <div className="my-5">
                <Link href="https://naver.me/5gir8XjF" target={"_blank"}>
                  <Image
                    src={Korean2}
                    alt="한식"
                    className="w-[400px] h-[400px] rounded-3xl"
                  />
                  <p className="text-lg text-gray-800">이야기둘</p>
                </Link>
              </div>
              <div className="my-5">
                <Link href="https://naver.me/5uxcO9DC" target={"_blank"}>
                  <Image
                    src={Korean3}
                    alt="한식"
                    className="w-[400px] h-[400px] rounded-3xl"
                  />
                  <p className="text-lg text-gray-800">사위식당 서현점</p>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : tab === "일식" ? (
        <>
          <div className="grid justify-center w-full space-x-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="my-5">
              <Link href="https://naver.me/xL1ERxQO" target={"_blank"}>
                <Image
                  src={Japan1}
                  alt="한식"
                  className="w-[400px] h-[400px] rounded-3xl"
                />
                <p className="text-lg text-gray-800">긴자 판교점</p>
              </Link>
            </div>
            <div className="my-5">
              <Link href="https://naver.me/G4rLy1ou" target={"_blank"}>
                <Image
                  src={Japan2}
                  alt="한식"
                  className="w-[400px] h-[400px] rounded-3xl"
                />
                <p className="text-lg text-gray-800">
                  후리토 식당 아브뉴프랑 판교점
                </p>
              </Link>
            </div>
          </div>
        </>
      ) : tab === "중식" ? (
        <>
          <p>준비중입니다.</p>
        </>
      ) : (
        <>
          <p>준비중입니다.</p>
        </>
      )}
    </>
  );
};

export default KindFood;
