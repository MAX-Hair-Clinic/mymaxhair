import images from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Header11: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const scrollRef = useRef<any>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    const element = document.getElementById("__next");
    if (element) {
      element.style.overflow = isMenuOpen ? "auto" : "hidden";
    } else {
      console.error("Element with ID '__next' was not found in the DOM.");
    }
  };

  useEffect(() => {
    setSticky(true);
  }, []);

  const Logo_Section = () => (
    <div id="Logo_Section">
      <Link href="/" className="cursor-pointer">
        <Image
          src={images.logo.Gold_Combi}
          alt="Header_Logo"
          className="w-48 sm:w-60"
        />
      </Link>
    </div>
  );

  const Menu_Section = () => (
    <div
      className={`lg:flex gap-20 ${
        isSticky ? "text-[var(--Secondary)]" : "text-[var(--Primary)]"
      }`}
    >
      <div className="hidden lg:block">
        <button
          onClick={() => {
            alert("this is the Form Popup for Request Callback");
          }}
          className="text-xl xl:text-2xl"
        >
          Request Callback?
        </button>
      </div>

      <div className="cursor-pointer">
        <button
          onClick={toggleMenu}
          className="flex justify-center items-center gap-4 mb-0"
        >
          <div className="mt-2 -mb-2">
            <span
              className={`block border-t-2 w-10 sm:w-12 lg:w-10 max-lg:mb-2 ${
                isSticky
                  ? "border-[var(--Secondary)]"
                  : "border-[var(--Primary)]"
              }`}
            ></span>
            <span
              className={`block border-t-2 w-7 sm:w-7 lg:w-6 ${
                isSticky
                  ? "border-[var(--Secondary)]"
                  : "border-[var(--Primary)]"
              }`}
            ></span>
          </div>

          <p className="text-2xl lg:text-xl 2xl:text-2xl mb-0 font-medium tracking-wider">
            Menu
          </p>
        </button>
      </div>
    </div>
  );

  const formatHref = (title: string, parentHref: string = "") => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");
    return parentHref
      ? `/${parentHref}/${formattedTitle}`
      : `/${formattedTitle}`;
  };

  const SideBar = () => {
    const menuItems = [
      { title: "Home" },
      {
        title: "About MAX",
        subMenu: [{ title: "Clinical Tour" }],
      },
      {
        title: "Our Services",
        subMenu: [
          { title: "Surgical Treatments" },
          { title: "Non-Surgical Treatments" },
          { title: "Non-Invasive Treatments" },
        ],
      },
      { title: "Transformations" },
      { title: "Contact Us" },
      { title: "Our Blogs" },
    ];

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

    const legal = [
      { title: "Privacy Policy" },
      { title: "Terms & Conditions" },
      { title: "Cookie Policy" },
    ];

    return (
      <div className="w-full relative z-10">
        <div
          className={`w-screen h-screen fixed top-0 left-0 z-0 ${
            isMenuOpen ? "block" : "hidden"
          } `}
          onClick={toggleMenu}
        />
        <aside
          id="Sidebar"
          className={`fixed z-10 top-0 right-0 w-screen lg:w-3/5 h-screen text-[var(--Primary)] bg-[var(--Secondary)] transform transition-transform duration-[2s] ease-in-out p-5 lg:p-8 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex justify-end items-center">
            <button
              onClick={toggleMenu}
              className="text-[var(--Primary)] text-2xl"
            >
              <CloseIcon className="max-xl:!w-[1.5em] max-xl:!h-[1.5em] !w-[2em] !h-[2em]" />
            </button>
          </div>

          <div className="w-full h-[calc(100vh-80px)] flex flex-col lg:flex-row justify-between lg:py-5 xl:py-10 lg:px-5 max-xl:!pr-0 2xl:p-10">
            <div className="w-full lg:w-3/5 max-lg:py-10 max-lg:px-5">
              <nav className="flex flex-col justify-center items-start">
                <ul className="w-full flex flex-col 2xl:gap-2">
                  {menuItems.map((item, index) => (
                    <li key={index} className="mb-5 lg:mb-0 xl:mb-5">
                      <Link
                        href={formatHref(item.title)}
                        className="text-3xl xl:text-4xl 2xl:text-5xl leading-normal font-semibold hover:text-[var(--Color3)]"
                      >
                        {item.title}
                      </Link>

                      {item.subMenu && (
                        <ul className="w-full pl-5 mt-2 2xl:mt-4">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="">
                              <Link
                                href={formatHref(
                                  subItem.title,
                                  formatHref(item.title).substring(1)
                                )}
                                className="text-2xl xl:text-3xl 2xl:text-4xl leading-normal font-medium hover:text-[var(--Color3)]"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="w-full lg:w-2/5 lg:flex flex-col justify-between items-start max-lg:py-10 max-lg:px-5">
              <div className="hidden lg:block text-center">
                <h3 className="uppercase lg:text-3xl xl:text-4xl 2xl:text-6xl leading-tight font-bold mb-0">
                  Book Your Appointment
                </h3>
                <h4 className="uppercase lg:text-xl xl:text-2xl 2xl:text-4xl leading-normal 2xl:font-semibold">
                  <Link
                    href={"/book-appointment"}
                    className="underline lg:text-xl xl:text-2xl 2xl:text-4xl leading-normal"
                  >
                    HERE
                  </Link>{" "}
                  <i className="lg:text-xl xl:text-2xl 2xl:text-3xl">Or</i> Call
                  us <i className="lg:text-xl xl:text-2xl 2xl:text-3xl">on</i>
                </h4>
                <div className="w-full flex justify-center items-center gap-2 pt-2">
                  <Image
                    src={images.icons.light.phone}
                    alt="Phone Icon"
                    className="lg:w-[2em] lg:h-[2em] 2xl:w-[3em] 2xl:h-[3em]"
                  />
                  <Link
                    href={"tel:18002026112"}
                    className="uppercase lg:text-xl xl:text-2xl 2xl:text-5xl leading-normal font-black"
                  >
                    1800 202 6112
                  </Link>
                </div>
              </div>

              <div className="w-full flex flex-col justify-center items-start gap-10 2xl:gap-20 2xl:pb-10">
                <div className="w-full hidden lg:flex flex-col justify-center items-end gap-3 lg:pr-5">
                  <h4 className="lg:text-xl 2xl:text-4xl font-bold max-xl:mb-0 xl:mb-5">
                    Legal
                  </h4>

                  <ul className="w-full flex flex-col justify-center items-end">
                    {legal.map((item, index) => (
                      <li key={index} className="mb-5 lg:mb-0 xl:mb-3">
                        <Link
                          href={formatHref(item.title)}
                          className="text-xl xl:text-2xl 2xl:text-3xl leading-normal font-semibold hover:text-[var(-- Color3)]"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full flex lg:flex-col 2xl:flex-row justify-center items-center lg:gap-3">
                  <h4 className="w-2/5 2xl:w-2/5 lg:text-xl 2xl:text-2xl mb-0 font-bold text-center">
                    Social Links
                  </h4>

                  <div className="w-3/5 2xl:w-3/5 grid grid-cols-3">
                    {icons.map((icon, index) => (
                      <Link key={index} href={icon.link} className="flex mb-0">
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          className="w-10 mx-auto"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  };

  return (
    <header
      ref={scrollRef}
      id="Header"
      className={`fixed top-0 left-0 w-full z-50 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="w-full flex justify-between items-center p-3 lg:px-5 2xl:px-10">
        <Logo_Section />
        <Menu_Section />
      </div>
      <SideBar />
    </header>
  );
};

export default Header11;
