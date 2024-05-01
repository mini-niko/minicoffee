import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Navigation, Pagination } from "swiper/modules"
import imageOne from "../../../images/Slide/slideOne.webp"
import imageTwo from "../../../images/Slide/slideTwo.webp"
import imageThree from "../../../images/Slide/slideThree.webp"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import style from "./Slide.module.css"

function Slide() {
  const slides = [ imageTwo, imageOne, imageThree ]
  const slideTheme = {
    "--swiper-pagination-color": "var(--chocolate-1)",
    "--swiper-navigation-color": "var(--chocolate-1)"
  }
  
  return (
    <div className={style.slide}>
        <Swiper
          modules={[ Autoplay, Navigation, Pagination ]} 
          loop 
          navigation={true}
          pagination={true}
          style={slideTheme}
          autoplay={{
            delay: 3000
          }}>
        {slides.map(slide => (
          <SwiperSlide>
            <img src={slide} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slide