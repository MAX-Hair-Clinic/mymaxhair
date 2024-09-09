import { Footer, Header, SmoothScroll } from "@/components";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const PageLayout: React.FC<LayoutProps> = ({
  children,
  showHeader = false,
  showFooter = false,
}) => {
  return (
    <>
      {showHeader && <Header />}

      <SmoothScroll>
        {children}
        {showFooter && <Footer />}
      </SmoothScroll>
    </>
  );
};

export default PageLayout;
