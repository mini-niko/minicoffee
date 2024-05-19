import React from 'react'
import style from "./Catalog.module.css"

import imgOne from "../../../images/catalog/photoOne.webp"
import imgTwo from "../../../images/catalog/photoTwo.webp"
import imgThree from "../../../images/catalog/photoThree.webp"
import imgFour from "../../../images/catalog/photoFour.webp"
import imgFive from "../../../images/catalog/photoFive.webp"
import imgSix from "../../../images/catalog/photoSix.webp"

const items = [
  {
    "name": "Capuccino",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lorem, ut volutpat mi. Phasellus sed vehicula urna, non. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": imgOne
  },
  {
    "name": "Café Latte",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lorem, ut volutpat mi. Phasellus sed vehicula urna, non.",
    "image": imgTwo
  },
  {
    "name": "Café Gelado",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lorem, ut volutpat mi. Phasellus sed vehicula urna, non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": imgThree
  },
  {
    "name": "Café Expresso",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lorem, ut volutpat mi. Phasellus sed vehicula urna, non. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": imgFour
  },
  {
    "name": "Frapuccino",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lorem, ut volutpat mi. Phasellus sed vehicula urna, non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    "image": imgFive
  },
  {
    "name": "Machiatto",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sodales lorem, ut volutpat mi. Phasellus sed vehicula urna, non. Lorem ipsum dolor sit amet.",
    "image": imgSix
  }
]


function Catalog() {

  return (
    <div className={style.catalog}>
      <div className={style.catalogTitle}>
        <h1>Catálogo</h1>
        <hr/>
        <h2>Quer encontrar o café perfeito para você?<br/>Dê uma olhada no nosso catálogo</h2>
      </div>
        <div className={style.cards}>
          {
            items.map((item) => {
              return (
                <div className={style.card}>
                  <img src={item.image} alt="" />
                  <div className={style.cardText}>
                    <h4>{item.name}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Catalog