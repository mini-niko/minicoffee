import { useRef } from 'react'
import style from "./ParallaxImage.module.css"
import img from "../../../images/parallax.webp"
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxImage() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])

    return (
        <div ref={ref} className={style.parallax}>
            <motion.img 
                src={img} 
                alt=''
                style={{
                    y: imgY
                }}
                />
        </div>
    )
}

export default ParallaxImage