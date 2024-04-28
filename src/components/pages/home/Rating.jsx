import React from 'react'
import imageOne from "../../../images/photoOne.png"
import imageTwo from "../../../images/photoTwo.png"
import imageThree from "../../../images/photoThree.png"

function Rating() {
  return (
    <div>
        <div>
            <img src={imageOne} alt=""></img>
            <h4>Pessoa 1</h4>
            <p>“Ótimo ambiente, bom atendimento e produtos excelentes.”</p>
        </div>
        <div>
            <img src={imageTwo} alt="" />
            <h4>Pessoa 2</h4>
            <p>“Café premium de qualidade. Recomendo.”</p>
        </div>
        <div>
            <img src={imageThree} alt="" />
            <h4>Pessoa 3</h4>
            <p>“Perfeito para quem ama café e conforto. 5 estrelas.”</p>
        </div>
    </div>
  )
}

export default Rating