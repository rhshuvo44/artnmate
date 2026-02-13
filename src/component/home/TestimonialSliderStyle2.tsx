"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import type SlickSlider from "react-slick";
import Div from "../ui/Div";
import Spacing from "../ui/Spacing";
import Testimonial from "./Testimonial";
const Slider = dynamic<any>(() => import("react-slick"), { ssr: false });
interface SlickArrowProps extends React.HTMLAttributes<HTMLDivElement> {
  currentSlide?: number;
  slideCount?: number;
}

const SlickArrowLeft = ({
  currentSlide,
  style,
  onClick,
}: SlickArrowProps) => {
  return (
    <div
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      style={style}
      onClick={onClick}
      aria-hidden="true"
      aria-disabled={currentSlide === 0}
    >
      {/* <Icon icon="bi:arrow-left" /> */}
    </div>
  );
};

const SlickArrowRight = ({
  currentSlide,
  slideCount,
  style,
  onClick,
}: SlickArrowProps) => {
  return (
    <div
      className={
        "slick-next slick-arrow" +
        (currentSlide === (slideCount ?? 0) - 1 ? " slick-disabled" : "")
      }
      style={style}
      onClick={onClick}
      aria-hidden="true"
      aria-disabled={currentSlide === (slideCount ?? 0) - 1}
    >
      {/* <Icon icon="bi:arrow-right" /> */}
    </div>
  );
};
const testimonialData = [
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText:
      "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
    avatarName: "Ahon Monsery",
    avatarDesignation: "CEO AT TECH",
    ratings: 4,
  },
  {
    testimonialThumb: "/images/testimonial_2.jpeg",
    testimonialText:
      "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
    avatarName: "Ahon Monsery",
    avatarDesignation: "CEO AT TECH",
    ratings: 5,
  },
  {
    testimonialThumb: "/images/testimonial_3.jpeg",
    testimonialText:
      "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
    avatarName: "Ahon Monsery",
    avatarDesignation: "CEO AT TECH",
    ratings: 4.5,
  },
  {
    testimonialThumb: "/images/testimonial_1.jpeg",
    testimonialText:
      "I wish I would have thought of it first. Creative agency is the most tech valuable business resource we have ever purchased. Dude your stuff  is the bomb! eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt to the explicabo.",
    avatarName: "Ahon Monsery",
    avatarDesignation: "CEO AT TECH",
    ratings: 3.5,
  },
];

export default function TestimonialSliderStyle2() {
  const [nav1, setNav1] = useState<SlickSlider | null>(null);
  const [nav2, setNav2] = useState<SlickSlider | null>(null);
  return (
    <>
      <Div className="cs-shape_wrap_3 cs-parallax">
        <Div
          className="cs-bg"
          style={{ backgroundImage: `url(images/testimonial_bg.jpeg)` }}
        >
          <Spacing lg="130" md="80" />
          <Div className="cs-shape_3 cs-to_up">
            <Image
              src="/images/shape_1.svg"
              alt="Shape"
              width={200}
              height={200}
            />
          </Div>
          <Div className="container">
            <Div className="cs-testimonial_slider_2">
              <Div className="cs-testimonial_slider_left">
                <Slider
                  asNavFor={nav1 ?? undefined}
                  ref={(slider: SlickSlider | null) => {
                    if (slider) setNav2(slider);
                  }}
                  slidesToShow={3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  centerMode={true}
                  centerPadding="0px"
                  arrows={false}
                >
                  {testimonialData.map((item, index) => (
                    <Div className="slider-nav_item" key={index}>
                      <Div className="cs-rotate_img">
                        <Div className="cs-rotate_img_in">
                          <Image
                            src={item.testimonialThumb}
                            alt="Thumb"
                            width={200}
                            height={200}
                          />
                        </Div>
                      </Div>
                    </Div>
                  ))}
                </Slider>
              </Div>
              <Slider
                asNavFor={nav2}
                ref={(slider1: SlickSlider | null) => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider">
              <Div className="cs-testimonial_slider_left"></Div>
              <Div className="cs-testimonial_slider_right"></Div>
            </Div>
          </Div>
          <Spacing lg="130" md="80" />
        </Div>
      </Div>
    </>
  );
}
