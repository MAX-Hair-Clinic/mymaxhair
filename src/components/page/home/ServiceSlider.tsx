import images from "@/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ServiceSlider: React.FC = () => {
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
    <div id="ServiceSlider" className="w-full bg-white border-b-black border-2">
      <Marquee
        speed={80}
        direction="right"
        className="overflow-hidden"
        style={{ overflowY: "hidden" }}
      >
        <div className="flex gap-5 lg:gap-10 xl:gap-16 2xl:gap-10 overflow-hidden">
          {serviceData.map((image, index) => (
            <div key={index} className="lg:-mx-8">
              <Image
                src={image}
                alt={`ServiceLogo${index}`}
                className="w-full sm:w-4/5 lg:w-3/5 sm:mx-auto"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ServiceSlider;
