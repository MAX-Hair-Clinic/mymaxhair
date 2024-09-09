import "@/styles/globals.css";
import "@/styles/style.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
