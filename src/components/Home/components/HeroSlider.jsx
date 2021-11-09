import React from "react";
import appleClassic from "../../../assets/drop-samples/apple_classic.png";
import blueSamurai from "../../../assets/drop-samples/blue_samurai.png";
import gmkLaser from "../../../assets/drop-samples/gmk_laser.png";
import mt3Soots from "../../../assets/drop-samples/mt3_soots.png";
import redSamurai from "../../../assets/drop-samples/red_samurai.png";
import useWindowSize from "../../../contexts-hooks/useWindowSize";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: appleClassic },
  { url: blueSamurai },
  { url: redSamurai },
  { url: gmkLaser },
  { url: mt3Soots },
];

export default function HeroSlider() {
  const { width } = useWindowSize();

  return (
    <SimpleImageSlider
      width={width}
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay={true}
      loop={true}
    />
  );
}
