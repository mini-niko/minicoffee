import React from 'react'
import image from "../../../images/Slide.png"
import style from "./Home.module.css"

function Slide() {
  return (
    <div className={style.slide}>
        <img src={image} alt="" />   
    </div>
  )
}

export default Slide