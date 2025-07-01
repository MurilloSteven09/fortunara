import React, { useState, useRef } from 'react'
import Llanta from './images/Llanta.png'
import Aventura from './images/021.jpg'
import './App.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { SiTiktok } from 'react-icons/si';

const cardsData = [
  { id: 1, title: 'Bosque Privado', img: Aventura },
  { id: 2, title: 'Grupos Reducidos', img: Aventura },
  { id: 3, title: 'Experiencia Exclusiva', img: Aventura },
  { id: 4, title: 'Prioridad: Seguridad', img: Aventura },
  { id: 5, title: 'Piscina Termal', img: Aventura },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const dragging = useRef(false)
  const lastX = useRef(0)
  const movedDistance = useRef(0)

  const handleMouseDown = (e) => {
    dragging.current = true
    lastX.current = e.clientX
    movedDistance.current = 0
  }

  const handleMouseUp = () => {
    dragging.current = false
    movedDistance.current = 0
  }

  const handleMouseLeave = () => {
    dragging.current = false
    movedDistance.current = 0
  }

  const handleMouseMove = (e) => {
    if (!dragging.current) return

    const deltaX = e.clientX - lastX.current
    lastX.current = e.clientX
    movedDistance.current += deltaX

    setRotation((prev) => prev + deltaX * 0.5)

    // Solo cambiar activeIndex si el desplazamiento acumulado supera 40px
    if (movedDistance.current > 40) {
      setActiveIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1))
      movedDistance.current = 0
    } else if (movedDistance.current < -40) {
      setActiveIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1))
      movedDistance.current = 0
    }
  }

  // Cálculo para índices lateral izquierdo y derecho con wrap-around
  const leftIndex = (activeIndex - 1 + cardsData.length) % cardsData.length
  const rightIndex = (activeIndex + 1) % cardsData.length

  return (
    <div className="app">
      <header className="header">
  <div className="header-left">
    <h1>SUPER QUADS</h1>
    <nav className="nav">
      <a href="#">Tour</a>
      <a href="#">Galería de Aventuras</a>
      <a href="#">Acerca de</a>
    </nav>
  </div>
  <div className="header-right">
    <div className="social-icons">
      
      <a href="#" class="icon-link"><WhatsAppIcon/></a>
      <a href="#" class="icon-link"><SiTiktok size={22}/></a>
      <a href="#" class="icon-link"><InstagramIcon/></a>
    </div>
    <button className="btn-reservar">RESERVAR <ArrowCircleRightIcon style={{ fontSize: '1.8rem' }} /></button>
  </div>
</header>

      <section className="slider">

        <div className="cards">
          <div className="card side left">
            <img src={cardsData[leftIndex].img} alt={cardsData[leftIndex].title} />
            <p>{cardsData[leftIndex].title}</p>
          </div>

          <div className="card active center">
            <img src={cardsData[activeIndex].img} alt={cardsData[activeIndex].title} />
            <p>{cardsData[activeIndex].title}</p>
          </div>

          <div className="card side right">
            <img src={cardsData[rightIndex].img} alt={cardsData[rightIndex].title} />
            <p>{cardsData[rightIndex].title}</p>
          </div>

          <div className="information">
            <h3>Recorrido dentro de nuestro bosque privado{cardsData[activeIndex].id}</h3>
            <h4>SUPER QUADS</h4>
          </div>
        </div>

        <div className="llanta-container">
          <img
            src={Llanta}
            alt="Llanta"
            className="llanta"
            style={{ transform: `rotate(${rotation}deg)` }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            draggable={false}
          />
        </div>
      </section>

      <div className="galeria">
        <div className="galeria-contenido">
          {/* Columna izquierda */}
          <div className="galeria-left">
            <div className="galeria-header">
              <h2>GALERÍA DE AVENTURAS</h2>
              <button className="btn-galeria">
                Ver galería <ArrowCircleRightIcon style={{ fontSize: '1.8rem' }} />
              </button>
            </div>
            <div className="galeria-cards">
              <img src={Aventura} alt="Galería" className="galeria-img" />
              <img src={Aventura} alt="Galería" className="galeria-img" />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="galeria-right">
            <img src={Aventura} alt="Galería" className="galeria-img grande" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App