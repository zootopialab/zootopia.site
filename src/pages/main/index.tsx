import React from "react";
import HeaderLayout from "../../layout/HeaderLayout";
import MyClass from "../../components/main/MyClass";
import AllClass from "../../components/main/AllClass";

const Main = () => {
  return (
    <>
      <div className="mt-4 space-y-4">
        <div className="px-10">
          <p className="text-2xl font-bold">내 모임</p>
          <MyClass />
        </div>

        <div className="px-10">
          <p className="text-2xl font-bold">전체 모임</p>
          <AllClass />
        </div>
      </div>
    </>
  );
};

export default Main;

Main.getLayout = function getLayout(page: React.ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};
