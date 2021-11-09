import styled from "styled-components";

export default function SponsorSlider() {
  const slides = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
  ].map((src, index) => (
    <Slide>
      <img key={index} height="100" width="250" src={src} alt="" />
    </Slide>
  ));

  return (
    <Slider className="slider">
      <SlideTrack>{slides}</SlideTrack>
    </Slider>
  );
}

const SlideTrack = styled.div`
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
`;

const Slider = styled.div`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 90vw;
  ::before,
  ::after {
    background: linear-gradient(
      to right,
      white 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
    top: 0;
  }

  ::after {
    right: 0;
    transform: rotateZ(180deg);
  }
  ::before {
    left: 0;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
`;

const Slide = styled.div`
  height: 100px;
  width: 250px;
`;
