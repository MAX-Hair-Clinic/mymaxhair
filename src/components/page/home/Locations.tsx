import images from "@/assets";
import MarkUnreadChatAltRoundedIcon from "@mui/icons-material/MarkUnreadChatAltRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import TurnRightRoundedIcon from "@mui/icons-material/TurnRightRounded";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Locations: React.FC = () => {
  const locationsData = [
    {
      title: "MAX Hair Clinic - Chennai",
      review: "4.5 (334)",
      reviewLink: "https://mui.com/",
      address:
        "10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy Nagar, Nungambakkam, Chennai - 600034",
      images: [
        images.home.locations.bangalore,
        images.home.locations.bangalore,
      ],
      phone: "88832 88822",
      chatLink: "https://mui.com/",
      directionLink: "https://mui.com/",
    },
    {
      title: "MAX Hair Clinic - Chennai",
      review: "4.5 (333)",
      reviewLink: "https://mui.com/",
      address:
        "10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy Nagar, Nungambakkam, Chennai - 600034",
      images: [
        images.home.locations.bangalore,
        images.home.locations.bangalore,
      ],
      phone: "88832 88822",
      chatLink: "https://mui.com/",
      directionLink: "https://mui.com/",
    },
    {
      title: "MAX Hair Clinic - Chennai",
      review: "4.5 (334)",
      reviewLink: "https://mui.com/",
      address:
        "10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy Nagar, Nungambakkam, Chennai - 600034",
      images: [
        images.home.locations.bangalore,
        images.home.locations.bangalore,
      ],
      phone: "88832 88822",
      chatLink: "https://mui.com/",
      directionLink: "https://mui.com/",
    },
    {
      title: "MAX Hair Clinic - Chennai",
      review: "4.5 (334)",
      reviewLink: "https://mui.com/",
      address:
        "10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy Nagar, Nungambakkam, Chennai - 600034",
      images: [
        images.home.locations.bangalore,
        images.home.locations.bangalore,
      ],
      phone: "88832 88822",
      chatLink: "https://mui.com/",
      directionLink: "https://mui.com/",
    },
    {
      title: "MAX Hair Clinic - Chennai",
      review: "4.5 (334)",
      reviewLink: "https://mui.com/",
      address:
        "10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy Nagar, Nungambakkam, Chennai - 600034",
      images: [
        images.home.locations.bangalore,
        images.home.locations.bangalore,
      ],
      phone: "88832 88822",
      chatLink: "https://mui.com/",
      directionLink: "https://mui.com/",
    },
    {
      title: "MAX Hair Clinic - Chennai",
      review: "4.5 (334)",
      reviewLink: "https://mui.com/",
      address:
        "10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy Nagar, Nungambakkam, Chennai - 600034",
      images: [
        images.home.locations.bangalore,
        images.home.locations.bangalore,
      ],
      phone: "88832 88822",
      chatLink: "https://mui.com/",
      directionLink: "https://mui.com/",
    },
  ];

  return (
    <div id="Home_Locations" className="w-full flex flex-col gap-10">
      <div className="w-full p-[6vw] pb-[3vw] lg:p-[4vw] lg:pb-[2vw] xl:p-[6vw] xl:pb-[3vw]">
        <h2 className="font-semibold">Just Steps Away from You</h2>
      </div>

      <div className="w-full select-none">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          className="!px-5"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {locationsData.map((item, index) => (
            <SwiperSlide key={index} className="cursor-">
              <div className="w-full shadow-gray-500 shadow-2xl rounded-3xl overflow-hidden mb-20">
                <div className="">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop
                    pagination={{ clickable: true }}
                  >
                    {item.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <Image
                          src={image}
                          alt={item.title}
                          className="rounded-t-3xl"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="p-4 sm:pb-6">
                  <div className="flex flex-col gap-1.5 sm:gap-3">
                    <Link
                      href={item.reviewLink}
                      className="w-max bg-black text-white flex items-center gap-1 px-2.5 py-1.5 rounded-xl"
                    >
                      <StarRateRoundedIcon className="" />

                      <p className="text-base mb-0">{item.review}</p>
                    </Link>

                    <div className="mb-1 select-none">
                      <div className="">
                        <h3 className="sm:text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold">
                          {item.title}
                        </h3>
                      </div>

                      <div className="">
                        <p className="text-base sm:text-sm xl:text-base 2xl:text-lg mb-0">
                          <b className="">Address:</b> {item.address}
                        </p>
                      </div>

                      <div className="">
                        <p className="text-base sm:text-sm xl:text-base 2xl:text-lg mb-0">
                          <b className="">Phone:</b> +91 {item.phone}
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex flex-wrap gap-3 sm:gap-2 lg:gap-1 xl:gap-3">
                      <Link
                        href={`tel:${item.phone.replace(/\s+/g, "")}`}
                        className="w-max bg-black text-white flex items-center gap-1 px-2.5 py-1.5 rounded-xl"
                      >
                        <PhoneRoundedIcon className="" />
                        <p className="text-base lg:text-sm xl:text-base 2xl:text-lg mb-0">
                          Call
                        </p>
                      </Link>

                      <Link
                        href={item.chatLink}
                        className="w-max bg-black text-white flex items-center gap-1 px-2.5 py-1.5 rounded-xl"
                      >
                        <MarkUnreadChatAltRoundedIcon className="" />
                        <p className="text-base lg:text-sm xl:text-base 2xl:text-lg mb-0">
                          Chat
                        </p>
                      </Link>

                      <Link
                        href={item.directionLink}
                        className="w-max bg-black text-white flex items-center gap-1 px-2.5 py-1.5 rounded-xl"
                      >
                        <TurnRightRoundedIcon className="" />
                        <p className="text-base lg:text-sm xl:text-base 2xl:text-lg mb-0">
                          Directions
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Locations;
