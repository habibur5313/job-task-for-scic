import React, { useContext,} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AuthContext } from "../../Provider/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" ">
      {user && (
        <h1 className="text-3xl mb-10 font-semibold animate__animated animate__pulse animate__infinite	infinite text-purple-700 text-center">
          Hello {user.displayName}, Welcome To
          <Typewriter
            words={[" Home", " Website"]}
            loop={30}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      )}
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/j9SNyPkY/image-25.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/jPjnzMfD/image-24.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] rounded-xl"
            src="https://i.ibb.co.com/kVCDyVyT/image-23.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;