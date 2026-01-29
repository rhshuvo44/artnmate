"use client";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import Div from "../ui/Div";
import Spacing from "../ui/Spacing";
import Testimonial from "./Testimonial";

const Slider = dynamic<any>(() => import("react-slick"), { ssr: false });

interface ArrowProps {
  currentSlide: number;
  slideCount: number;
  [key: string]: any;
}

const SlickArrowLeft = ({ currentSlide, ...props }: ArrowProps) => (
  <div
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
  >
    <Icon icon="bi:arrow-left" />
  </div>
);

const SlickArrowRight = ({
  currentSlide,
  slideCount,
  ...props
}: ArrowProps) => (
  <div
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
  >
    <Icon icon="bi:arrow-right" />
  </div>
);

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

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
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
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={(slider2:any) => setNav2(slider2)}
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
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={(slider1: any) => setNav1(slider1)}
                prevArrow={
                  <SlickArrowLeft
                    currentSlide={0}
                    slideCount={testimonialData.length}
                  />
                }
                nextArrow={
                  <SlickArrowRight
                    currentSlide={0}
                    slideCount={testimonialData.length}
                  />
                }
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
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
