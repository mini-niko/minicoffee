import React from 'react'
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'

function Footer() {
  return (
    <div>
        <div>
            <h4>Entre em contato</h4>
            <p><FaPhone /> (012) 34567-8901</p>
            <p><FaEnvelope /> example@email.com</p>
            <p><FaSquareWhatsapp /> example@email.com</p>
        </div>
        <div>
            <h4>Siga nas nossas Redes Sociais</h4>
            <p><FaFacebook /> MiniCoffee Cafeteria</p>
            <p><FaSquareInstagram /> @minicoffee_ofc</p>
            <p><FaLinkedin /> MiniCoffee Cafeteria</p>
        </div>
        <div>
            <h4>Endereço</h4>
            <p>Avenida Brasil, Centro<br />Número 000<br />Xanxerê, SC</p>
        </div>
    </div>
  )
}

export default Footer