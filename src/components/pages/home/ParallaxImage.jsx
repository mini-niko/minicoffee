import React from 'react'
import image from "../../../images/parallax.png"
import style from "./Home.module.css"

function ParallaxImage() {
  return (
    <div className={style.parallax}>
        <img src={image} alt="" />
    </div>
  )
}

export default ParallaxImage