import React from 'react'
import Logo from '../../assets/img/brulogo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
    <nav className="Menu">
    <a href="/">
    <img className="Logo" src={Logo} alt="Logo da BruFlix" />
    </a>
    <Button className="ButtonLink" href="/">Novo vídeo</Button>
    </nav>
    )
    }
export default Menu