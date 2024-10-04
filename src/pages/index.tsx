import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Home = dynamic(() => import("./home"), {
  suspense: true,
});
const Loader = dynamic(() => import("@/components/global/loader"), {
  suspense: true,
});
const Spinner = dynamic(() => import("@/components/global/spinner"), {
  suspense: false,
});

export default function WebsiteWrapper() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [minimumLoadingTime, setMinimumLoadingTime] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);

      setMinimumLoadingTime(isMobileDevice ? 1500 : 4500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleDOMContentLoaded = () => {
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
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleDOMContentLoaded);
    };
  }, [minimumLoadingTime]);

  return (
    <>{isLoading ? <>{isMobile ? <Spinner /> : <Loader />}</> : <Home />}</>
  );
}
