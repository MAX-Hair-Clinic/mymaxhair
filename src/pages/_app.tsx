import { Loader } from "@/components";
import "@/styles/globals.css";
import "@/styles/style.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const minimumLoadingTime = 500;
      const loadTime = Date.now() - startTime;

      if (loadTime < minimumLoadingTime) {
        setTimeout(() => setIsLoading(false), minimumLoadingTime - loadTime);
      } else {
        setIsLoading(false);
      }
    };

    const startTime = Date.now();

    if (document.readyState === "complete") {
      handleDOMContentLoaded();
    } else {
      window.addEventListener("load", handleDOMContentLoaded);
      return () => {
        window.removeEventListener("load", handleDOMContentLoaded);
      };
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
