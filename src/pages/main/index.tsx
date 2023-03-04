import React from "react";
import HeaderLayout from "../../layout/HeaderLayout";

const Main = () => {
  return (
    <>
      <p>ddd</p>
    </>
  );
};

export default Main;

Main.getLayout = function getLayout(page: React.ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};
