import React, { useState } from "react";
import Image from "next/image";
import { Korean1, Korean2, Korean3 } from "../../asset/image/korean";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useSpring, a } from "@react-spring/web";

const Sponsor = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <>
      <div className="space-y-4">
        <div className="grid justify-center w-full space-x-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="my-5" onClick={() => set((state) => !state)}>
            <a.div
              className={`w-[400px] h-[400px] rounded-3xl ${styles.back}`}
              style={{ opacity: opacity.to((o) => 1 - o), transform }}
            />
            <a.div
              className="w-[400px] h-[400px] rounded-3xl"
              style={{
                opacity,
                transform,
                rotateX: "180deg",
              }}
            />
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
  );
};

export default Sponsor;
