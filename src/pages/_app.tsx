import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";

// css
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

// component
import Layout from "@src/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <ToastContainer
          position="top-center"
          autoClose={1000}
          theme="dark"
          closeOnClick
          hideProgressBar
          limit={3}
        />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
