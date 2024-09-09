import { useEffect, useState } from "react";

const quotes = [
  "Thicken, Enrich, Maximize, MAX_Hair_Clinic",
  "MAX_Hair_Clinic Your_Secret to Fuller_Hair",
  "Restore Density, Restore Confidence",
  "Rediscover Your Hair’s Potential",
  "Crafting Confidence, One_Follicle at_a_Time",
];

const morphTime = 1;
const cooldownTime = 0.25;

const Loader: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [texts, setTexts] = useState<string[]>([]);
  const [morph, setMorph] = useState(0);
  const [cooldown, setCooldown] = useState(cooldownTime);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setTexts(randomQuote.split(" "));
  }, []);

  useEffect(() => {
    let frameId: number;

    const tick = () => {
      const dt = 1 / 60;
      if (cooldown > 0) {
        setCooldown((prevCooldown) => prevCooldown - dt);
      } else {
        if (morph < morphTime) {
          setMorph((prevMorph) => prevMorph + dt);
        } else {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setCooldown(cooldownTime);
          setMorph(0);
        }
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [morph, cooldown, texts.length]);

  const fraction = morph / morphTime;
  const inverseFraction = 1 - fraction;

  return (
    <div>
      <div
        id="MorphText"
        className="absolute m-auto w-screen h-max top-0 bottom-0"
      >
        <span
          className="absolute w-full inline-block text-center font-bold text-5xl lg:text-8xl"
          style={{
            filter: `blur(${Math.min(8 / inverseFraction - 8, 100)}px)`,
            opacity: `${Math.pow(inverseFraction, 0.4) * 100}%`,
          }}
        >
          {texts[textIndex]}
        </span>
        <span
          className="absolute w-full inline-block text-center font-bold text-5xl lg:text-8xl"
          style={{
            filter: `blur(${Math.min(8 / fraction - 8, 100)}px)`,
            opacity: `${Math.pow(fraction, 0.4) * 100}%`,
          }}
        >
          {texts[(textIndex + 1) % texts.length]}
        </span>
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Loader;
