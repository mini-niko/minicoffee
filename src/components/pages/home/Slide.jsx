import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Navigation, Pagination } from "swiper/modules"

import imgOne from "../../../images/slide/slideOne.webp"
import imgTwo from "../../../images/slide/slideTwo.webp"
import imgThree from "../../../images/slide/slideThree.webp"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import style from "./Slide.module.css"

function Slide() {
  const slides = [ 
    imgOne,
    imgTwo,
    imgThree
  ]

  const slideTheme = {
    "--swiper-pagination-color": "var(--chocolate-1)",
    "--swiper-navigation-color": "var(--chocolate-1)"
  }
  
  return (
    <div >
        <Swiper
          className={style.slide}
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
            <img 
              src={slide}
              alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slide