"use client";
// import Slider from "react-slick";

import dynamic from "next/dynamic";
import Div from "../ui/Div";
import Portfolio from "./Portfolio";
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
export default function PortfolioSlider({
  data,
}: {
  data: {
    title: string;
    subtitle: string;
    href: string;
    src: string;
  }[];
}) {
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
      {data.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  );
}
