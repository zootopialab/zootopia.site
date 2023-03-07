import "../styles/globals.css";
import { JWTUI } from "../components/useDialog/useDialog";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { RecoilRoot } from "recoil";
import Script from "next/script";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <Script
        strategy="beforeInteractive"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=id9esd8xgw"
      />
      <JWTUI>{getLayout(<Component {...pageProps} />)}</JWTUI>
    </RecoilRoot>
  );
}
