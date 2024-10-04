import Image from "next/image";
import images from "@/assets";

const Hero: React.FC = () => {
  const heroContent = {
    title: "MAX Hair Clinic",
    tagline: ["Hair", "Defines", "You"],
    content: [
      "Max Hair Clinic incorporated in 2004 is self-defined brand name in the modern world of Hair transplant in India cascading excellence in delivery, we continue our operations in a class apart from OPD facilities environment for more than 18 years of experience with our visitors from all over the world.",
      "Max Hair Clinic incorporated in 2004 is self-defined brand name in the modern world of Hair transplant in India cascading excellence in delivery",
    ],
    button: "To Know More",
    bgImg: images.home.hero_bg,
  };

  const HeroContent = () => {
    const Title = () => {
      return (
        <div
          data-scroll
          data-scroll-speed="3"
          className="w-full h-[55%] xl:h-3/5 2xl:h-[55%] flex flex-col justify-center items-start gap-3 pt-12 xl:pt-16 2xl:pt-32"
        >
          <h1 className="text-[8vw] sm:text-[5.5vw] lg:text-[3.5vw] xl:text-[3vw] 2xl:text-[2.5vw] leading-normal pl-2">
            {heroContent.title}
          </h1>

          <h2 className="flex flex-col mb-0">
            {heroContent.tagline.map((word, index) => (
              <span
                key={index}
                className="text-[24vw] sm:text-[20vw] lg:text-[12vw] xl:text-[14vw] 2xl:text-[11vw] leading-[0.9] 2xl:leading-none font-semibold mb-0"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      );
    };

    const Description = () => {
      return (
        <div
          data-scroll
          data-scroll-speed="3"
          className="w-full h-[45%] xl:h-2/5 2xl:h-[45%] flex justify-start items-start lg:justify-end"
        >
          <div className="w-full lg:w-3/5 2xl:w- flex flex-col lg:items-end gap-4 lg:gap-6">
            {heroContent.content.map((text, index) => (
              <p
                key={index}
                className="text-[5vw] sm:text-[4.125vw] lg:text-[2.5vw] xl:text-[2.25vw] 2xl:text-[2vw] leading-snug"
              >
                {text}
              </p>
            ))}
          </div>

          {/* <Button></Button> */}
        </div>
      );
    };

    return (
      <div
        data-scroll-container
        className="w-full h-[130vh] lg:h-[180vh] flex flex-col justify-evenly 2xl:justify-center items-start 2xl:gap-10 absolute z-10 text-[var(--Primary)] px-5 lg:px-20 xl:px-32 2xl:px-48 py-20"
      >
        <Title />

        <Description />
      </div>
    );
  };

  const HeroBgImg = () => {
    return (
      <div className="w-full h-[130vh] lg:h-[180vh]">
        <Image
          src={heroContent.bgImg}
          alt="Hero_BgImage"
          className="w-full h-full"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    );
  };

  return (
    <div id="Hero" className="w-full relative z-0">
      <HeroContent />

      <HeroBgImg />
    </div>
  );
};

export default Hero;
