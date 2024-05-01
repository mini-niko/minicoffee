import { Link } from 'react-router-dom'

import aboutUsImage from "../../../images/aboutUsImage.webp"
import imagePersonOne from "../../../images/photoOne.webp"
import imagePersonTwo from "../../../images/photoTwo.webp"
import imagePersonThree from "../../../images/photoThree.webp"

import ParallaxImage from './ParallaxImage'
import Slide from './Slide'
import style from "./Home.module.css"

function Home() {
  return (
    <>
      <div className={style.hero}>
          <h1>O melhor café da sua vida</h1>
          <h2>Quer experimentar? É só clicar no botão abaixo</h2>
          <Link to="/catalog">Catálogo</Link>
      </div>

      <div className={style.aboutUs}>
        <img src={aboutUsImage} alt="Pacote de café fechado ao lado de grãos de café em uma mesa" />
        <div>
          <h3>Investimos em qualidade</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer  sollicitudin augue purus, id vestibulum libero lobortis nec. Praesent  eleifend convallis massa nec faucibus. Nulla posuere eleifend risus, sed  vestibulum mi volutpat eu. Pellentesque pulvinar lobortis enim at  posuere. Nulla vehicula, est sit amet dapibus placerat, massa nibh  commodo ante, non volutpat leo tortor quis nunc. Fusce in ex at metus  dictum faucibus vitae vitae urna. Maecenas sit amet efficitur sapien,  eget finibus arcu. Pellentesque consequat.</p>  
        </div>
      </div>

      <ParallaxImage />
      
      <div className={style.rating}>
        <h3>Avaliações</h3> 
        <div className={style.ratingContent}>
          <div>
              <img src={imagePersonOne} alt=""></img>
              <h4>Pessoa 1</h4>
              <p>“Ótimo ambiente, bom atendimento e produtos excelentes.”</p>
          </div>
          <div>
              <img src={imagePersonTwo} alt="" />
              <h4>Pessoa 2</h4>
              <p>“Café premium de qualidade. Recomendo.”</p>
          </div>
          <div>
              <img src={imagePersonThree} alt="" />
              <h4>Pessoa 3</h4>
              <p>“Perfeito para quem ama café e conforto. 5 estrelas.”</p>
          </div>
        </div>
      </div>

      <Slide />
    </>
  )
}

export default Home