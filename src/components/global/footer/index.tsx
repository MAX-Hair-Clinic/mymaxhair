import images from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Footer: React.FC = () => {
  const icons = [
    {
      link: "https://www.facebook.com/profile.php?id=61552402914366",
      src: images.icons.light.social.facebook,
      alt: "Facebook",
    },
    {
      link: "https://www.instagram.com/maxhairclinicofficial/",
      src: images.icons.light.social.instagram,
      alt: "Instagram",
    },
    {
      link: "https://www.youtube.com/@MaxHairClinicGlobal",
      src: images.icons.light.social.youtube,
      alt: "YouTube",
    },
  ];

  const quickLinks = ["Home", "About MAX", "Transformations", "Our Blogs"];

  const categories = [
    "Our Services",
    "Surgical Treatments",
    "Non-Surgical Treatments",
    "Non-Invasive Treatments",
  ];

  const legalLinks = [
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
    "Cookie Policy",
  ];

  const contactLinks = [
    {
      title: "BNG",
      link: "https://g.co/kgs/TL2bFXV",
    },
    {
      title: "CHN",
      link: "https://g.co/kgs/ZEFq77p",
    },
    {
      title: "CBE",
      link: "",
    },
    {
      title: "HYD",
      link: "",
    },
  ];

  let currentYear = new Date().getFullYear();

  const formatHref = (title: string, parentHref: string = "") => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    return parentHref
      ? `/${parentHref}/${formattedTitle}`
      : `/${formattedTitle}`;
  };

  const MarqueeSlider = () => {
    return (
      <div className="pt-16 lg:pt-10">
        <Marquee speed={90} className="overflow-visible pointer-events-none">
          <h2 className="text-[var(--Primary)] text-7xl sm:text-8xl 2xl:text-9xl !leading-snug font-bold">
            MAX Hair Clinic - Hair Defines You | Renowned Hair Regrowth
            Solution&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
        </Marquee>
      </div>
    );
  };

  const MenuSection = () => {
    const FooterSection: React.FC<{ title: string; links: string[] }> = ({
      title,
      links,
    }) => (
      <div className="w-full text-[var(--Primary)] px-5">
        <h4 className="text-3xl font-semibold mb-5">{title}</h4>
        <ul className="w-full flex flex-col pl-5">
          {links.map((link) => (
            <li key={link} className="w-max">
              <Link href={formatHref(link)} className="">
                <p className="capitalize text-2xl max-lg:mb-0">{link}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div className="px-5 sm:px-10 2xl:px-20">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FooterSection title="Quick Links" links={quickLinks} />
          <FooterSection title="Categories" links={categories} />
          <FooterSection title="Legal" links={legalLinks} />

          <div className="w-full text-[var(--Primary)] px-5">
            <h4 className="text-3xl font-semibold mb-5">Contact</h4>
            <ul className="w-full flex flex-col text-[var(--Primary)] pl-5">
              <li className="flex gap-2">
                {contactLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="mb-0"
                    target="_blank"
                  >
                    <p className="capitalize text-2xl mb-0">
                      {item.title} {index < contactLinks.length - 1 && " |"}
                    </p>
                  </Link>
                ))}
              </li>

              <li className="">
                <Link href="tel:18002026112" className="">
                  <p className="text-2xl mb-0">1800 202 6112 (toll-free)</p>
                </Link>
              </li>

              <li className="">
                <Link href="mailto:info@mymaxhair.com" className="">
                  <p className="text-2xl mb-0">info@mymaxhair.com</p>
                </Link>
              </li>

              <li className="w-full flex gap-5">
                {icons.map((icon, index) => (
                  <Link
                    key={index}
                    href={icon.link}
                    className="flex mb-0"
                    target="_blank"
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      className="w-10 mx-auto"
                    />
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const CopyrightsSection = () => {
    return (
      <div className="w-full flex justify-center items-center text-[var(--Secondary)] bg-[var(--Primary)] p-5">
        <p className="sm:text-lg lg:text-xl 2xl:text-2xl text-center mb-0">
          &#169; Copyright {currentYear}. MAX Hair Clinic Private Limited. All
          Rights Reserved.
        </p>
      </div>
    );
  };

  const BgImg = () => {
    return (
      <div
        id="Footer_BgImg"
        className="w-full h-[360vw] sm:h-[110vw] lg:h-[55vw] xl:h-[50vw] 2xl:h-[35vw] relative z-0"
      >
        <Image
          src={images.others.footer_bg}
          alt="Footer_BgImg"
          className="w-full h-full object-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
    );
  };

  return (
    <div className="">
      <div className="w-full h-20 bg-[var(--Primary)] rounded-full -mb-10 relative z-10"></div>

      <footer id="Footer" className="relative z-0">
        <div className="w-full h-[360vw] sm:h-[110vw] lg:h-[55vw] xl:h-[50vw] 2xl:h-[35vw] absolute top-0 left-0 flex flex-col justify-between gap-5 lg:gap-10 2xl:gap-5 z-10">
          <MarqueeSlider />

          <MenuSection />

          <CopyrightsSection />
        </div>

        <BgImg />
      </footer>
    </div>
  );
};

export default Footer;
