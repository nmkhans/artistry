import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BannerBg from "../../assets/banner.png";
import BannerOne from "../../assets/art_one.png";
import BannerTwo from "../../assets/art_two.png";
import BannerThree from "../../assets/art_three.png";

const Banner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            style={{ background: `url(${BannerBg})` }}
            className="bg-center bg-no-repeat bg-cover pt-[120px] lg:pt-[200px] pb-[120px]"
          >
            <div className="container mx-auto px-5 lg:px-0">
              <div className="flex justify-between items-center gap-x-5 flex-col lg:flex-row">
                <div className="basis-1/2">
                  <h2 className="text-[25px] md:text-4xl lg:text-4xl font-bold mb-5">
                    <span className="text-primary">Discover</span>{" "}
                    Browse <br /> And Collect Ancient{" "}
                    <span className="text-primary">Artifacts</span>
                  </h2>
                  <p className="w-full md:w-3/5 lg:w-3/5 text-gray-600 mb-5">
                    Discover the legacy of art passed down through
                    generations. Every piece tells a story.
                  </p>
                  <div className="flex gap-x-2">
                    <Link
                      to="/all-artifacts"
                      className="btn btn-primary text-white rounded-3xl"
                    >
                      Explore Crafts
                    </Link>
                    <Link
                      to="/add-artifacts"
                      className="btn btn-primary btn-outline  rounded-3xl"
                    >
                      Add New
                    </Link>
                  </div>
                </div>
                <div className="w-1/2 mt-10 md:mt-0 lg:mt-0">
                  <img
                    className="w-[250px] mx-auto"
                    src={BannerOne}
                    alt="Banner image"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ background: `url(${BannerBg})` }}
            className="bg-center bg-no-repeat bg-cover pt-[120px] lg:pt-[200px] pb-[120px]"
          >
            <div className="container mx-auto px-5 lg:px-0">
              <div className="flex justify-between items-center gap-x-5 flex-col lg:flex-row">
                <div className="basis-1/2 ">
                  <h2 className="text-[25px] md:text-4xl lg:text-4xl font-bold mb-5">
                    <span className="text-primary">Celebrate</span>{" "}
                    <br /> Authentic Heritage Through{" "}
                    <span className="text-primary">Art</span>
                  </h2>
                  <p className="w-full md:w-3/5 lg:w-3/5 text-gray-600 mb-5">
                    Explore rare and handcrafted pieces that echo the
                    voices of tradition.
                  </p>
                  <div className="flex gap-x-2">
                    <Link
                      to="/all-artifacts"
                      className="btn btn-primary text-white rounded-3xl"
                    >
                      Explore Crafts
                    </Link>
                    <Link
                      to="/add-artifacts"
                      className="btn btn-primary btn-outline  rounded-3xl"
                    >
                      Add New
                    </Link>
                  </div>
                </div>
                <div className="w-1/2 h-[200px] md:h-[300px] lg:h-[300px] mt-10 md:mt-0 lg:mt-0">
                  <img
                    className="w-[250px] mx-auto"
                    src={BannerTwo}
                    alt="Banner image"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ background: `url(${BannerBg})` }}
            className="bg-center bg-no-repeat bg-cover pt-[120px] lg:pt-[200px] pb-[120px]"
          >
            <div className="container mx-auto px-5 lg:px-0">
              <div className="flex justify-between items-center gap-x-5 flex-col lg:flex-row">
                <div className="basis-1/2">
                  <h2 className="text-[25px] md:text-4xl lg:text-4xl font-bold mb-5">
                    <span className="text-primary">Experience</span>{" "}
                    <br /> the Living History of{" "}
                    <span className="text-primary">Artifacts</span>
                  </h2>
                  <p className="w-full md:w-3/5 lg:w-3/5 text-gray-600 mb-5">
                    Bring home treasures that blend cultural depth
                    with artistic expression.
                  </p>
                  <div className="flex gap-x-2">
                    <Link
                      to="/all-artifacts"
                      className="btn btn-primary text-white rounded-3xl"
                    >
                      Explore Crafts
                    </Link>
                    <Link
                      to="/add-artifacts"
                      className="btn btn-primary btn-outline  rounded-3xl"
                    >
                      Add New
                    </Link>
                  </div>
                </div>
                <div className="w-1/2 h-[180px] md:h-[300px] lg:h-[300px] mt-10 md:mt-0 lg:mt-0">
                  <img
                    className="w-[250px] mx-auto"
                    src={BannerThree}
                    alt="Banner image"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
