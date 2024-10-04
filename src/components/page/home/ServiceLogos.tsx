import images from "@/assets";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

const ServiceLogos: React.FC = () => {
  const serviceData = [
    images.logo.service.logo1,
    images.logo.service.logo2,
    images.logo.service.logo3,
    images.logo.service.logo4,
    images.logo.service.logo5,
    images.logo.service.logo6,
    images.logo.service.logo7,
    images.logo.service.logo8,
  ];

  return (
    <div
      id="Home_ServiceLogos"
      className="w-full bg-white border-b-black border-2 overflow-hidden"
    >
      <Marquee direction="right" speed={200}>
        <div className="w-[calc()] flex gap-5 lg:gap-10 xl:gap-16 2xl:gap-10">
          {serviceData.map((image, index) => (
            <Link key={index} href={""} className="flex-shrink-0 lg:-mx-8">
              <Image
                src={image}
                alt={`ServiceLogo${index}`}
                className="w-full sm:w-4/5 lg:w-3/5 sm:mx-auto"
              />
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ServiceLogos;
