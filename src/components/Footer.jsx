import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'
import style from "./Footer.module.css"

function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.contact}>
            <h4>Entre em contato</h4>
            <p><FaPhone /> (012) 34567-8901</p>
            <p><FaEnvelope /> example@email.com</p>
            <p><FaSquareWhatsapp /> (012) 34567-8901</p>
        </div>
        <div className={style.socialMedia}>
            <h4>Siga nas nossas Redes Sociais</h4>
            <div>
              <p><FaSquareInstagram /> @minicoffee_ofc</p>
              <p><FaFacebook /> MiniCoffee Cafeteria</p>
              <p><FaLinkedin /> MiniCoffee Cafeteria</p>
            </div>
        </div>
        <div className={style.adress}>
            <h4>Endereço</h4>
            <p>Avenida Brasil, Centro<br />Número 000<br />Xanxerê, SC</p>
        </div>
    </div>
  )
}

export default Footer