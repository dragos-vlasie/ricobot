import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useDevice } from "../utils/get-device";

const images = [
  {
    thumbnail: "/1-thumbnail.png",
    background: "/1-background.png",
    alt: "Image description",
    foreground: "1-foreground-cutout.png",
  },
  {
    thumbnail: "/2-thumbnail.png",
    background: "/2-background.png",
    alt: "Image description",
  },
  {
    thumbnail: "/3-thumbnail.png",
    background: "/3-background.png",
    alt: "Image description",
  },
  {
    thumbnail: "/4-thumbnail.png",
    background: "/4-background.png",
    alt: "Image description",
  },
  {
    thumbnail: "/5-thumbnail.png",
    background: "/5-background.png",
    alt: "Image description",
  },
  {
    thumbnail: "/6-thumbnail.png",
    background: "/6-background.png",
    alt: "Image description",
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);


  const navigateToSlide = (index: number) => {
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index); 
  };

  const device = useDevice();
  const isMobile = device === "mobile";
  const isDesktopLarge = device === "desktop-large";

  const pagination = !isMobile && {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      console.log(images[index].thumbnail);
      return `<button class="${className} hidden md:block double-border-box "> <img src="${images[index].thumbnail}" class="w-full h-full rounded-xl  cursor-pointer object-cover" /> </button>`;
    },
  };

  return (
    <div className="bg-white">
      <div className="relative">
        <Swiper
          ref={swiperRef}
          onSlideChange={(swiper: any) => setActiveIndex(swiper.activeIndex)}
          style={
            {
              "--swiper-pagination-bullet-border-radius": "12px",
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-bottom": isDesktopLarge ? "8rem" : "3rem",
              "--swiper-pagination-bullet-opacity": 1,
              "--swiper-pagination-bullet-inactive-opacity": 1,
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-width": isMobile ? "100px" : "100px", 
              "--swiper-pagination-bullet-size": isMobile ? "140px" : "100px", 
            } as React.CSSProperties
          }
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper absolute md:relative"
        >
          {images.map((image, index) => (
            <SwiperSlide className="relative" key={index}>
              <div className="relative w-full h-full gradient-overlay">
                <img src={image.background} alt={image.alt} className="w-full h-full object-cover " />
              </div>

              {image.foreground && (
                <div className="container foreground-image px-4 absolute bottom-0 right-0 left-0 my-0 mx-auto flex justify-end ">
                  <img
                    className="right-[15%] w-auto h-full bottom-0 absolute md:relative md:right-0 mr-0 md:mr-[10%]"
                    src={image.foreground}
                    alt={image.alt}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div 
      className="md:container pb-24 relative md:pb-0 h-fit px-8 md:px-4 md:absolute right-0 left-0 my-0 mx-auto top-28 md:top-32 2xl:top-52 text-left  text-white">
        <span className="uppercase relative z-[11] font-raleway leading-tight block text-heading-small md:text-heading-large font-black mb-28 md:mb-16">
          More from <br /> Rico the dog
        </span>

        <span className="uppercase block relative z-10 text-xs lg:text-subheading-large text-subheading-small font-extrabold mb-2 md:mb-0 border-white border-2 w-fit py-2 px-3 rounded-full font-raleway">
          Rico is back!
        </span>

        <h2 className="uppercase leading-tight relative z-10 md:text-title-large text-title-small font-black font-raleway mb-2 md:mb-4">
          Ricobot
        </h2>

        <p className="relative z-10 text-paragraph-small lg:text-paragraph-large font-raleway font-medium mb-8">
          Charget in to a brand new supercharged adventure with RICO across <br /> 50 exciting and diverse worlds, available on
          PS5!
        </p>

        <button className="relative z-10 uppercase font-raleway px-3 py-3 bg-white text-black text-cta-small md:text-cta-large font-black rounded-full">
          Learn More
        </button>

        <div className="grid md:hidden mx-auto relative z-10 sm:grid-cols-5 grid-cols-3 gap-5 mt-12">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToSlide(index)}
              className={`${activeIndex === index ? "border scale-110 rounded-md p-[2px] md:min-w-36 md:min-h-36" : ""}`}
            >
              <img src={`${images[index].thumbnail}`} alt={images[index].alt} className="w-full h-full rounded-md  cursor-pointer object-cover" />
            </button>
          ))}
        </div>
        <div className="bg-black z-0 w-full h-full top-0 absolute right-0"></div>
      </div>
    </div>
  );
}
