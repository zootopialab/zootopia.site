import "../styles/globals.css";
import { JWTUI } from "../components/useDialog/useDialog";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <JWTUI>{getLayout(<Component {...pageProps} />)}</JWTUI>
    </>
  );
}
