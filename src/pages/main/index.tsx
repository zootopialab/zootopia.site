import React, { useEffect, useState } from "react";
import HeaderLayout from "../../layout/HeaderLayout";
import useMap from "../../hooks/useMap";
import KindFood from "../../components/main/KindFood";

const Main = () => {
  //지도
  useMap();

  return (
    <>
      <div className="w-full h-[300px]" id="map"></div>

      <div className="my-10">
        <p className="text-sm font-bold text-gray-800">[판교 추천 List]</p>
        <KindFood />
      </div>

      <div>
        <p>쥬토 member들이 추천하는 맛집 List</p>
      </div>
    </>
  );
};

export default Main;

Main.getLayout = function getLayout(page: React.ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};
