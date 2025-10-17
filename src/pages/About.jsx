import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const principles = [
  {
    title: 'Estrategia primero',
    detail:
      'Cada proyecto inicia con una auditoría y roadmap. Diseñamos soluciones medibles que apoyan objetivos comerciales concretos.',
  },
  {
    title: 'Experiencias memorables',
    detail:
      'Sumamos storytelling, UI y performance para entregar sitios que convierten y construyen confianza desde el primer scroll.',
  },
  {
    title: 'Acompañamiento continuo',
    detail:
      'Más allá del lanzamiento, seguimos optimizando con analítica, experimentación y soporte dedicado para tu equipo.',
  },
]

const capabilities = [
  {
    category: 'Consultoría y descubrimiento',
    points: ['Workshops de alineación', 'Investigación competitiva', 'Definición de KPIs y buyer persona'],
  },
  {
    category: 'Diseño y desarrollo',
    points: ['Identidad visual aplicada', 'React + integraciones personalizadas', 'Automatización de flujos clave'],
  },
  {
    category: 'Optimización y soporte',
    points: ['Implementación de analítica', 'Testing continuo y mejoras SEO', 'Capacitaciones al equipo interno'],
  },
]

function AboutPage() {
  const [particlesReady, setParticlesReady] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsNavOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const particleOptions = useMemo(
    () => ({
      background: {
        color: 'transparent',
      },
      fullScreen: {
        enable: false,
      },
      detectRetina: true,
      particles: {
        number: {
          value: 28,
          density: {
            enable: true,
            area: 720,
          },
        },
        color: {
          value: ['#bbf7d0', '#22c55e', '#16a34a'],
        },
        links: {
          enable: true,
          color: '#bbf7d0',
          distance: 150,
          opacity: 0.32,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: 'none',
          outModes: {
            default: 'bounce',
          },
        },
        opacity: {
          value: 0.55,
        },
        size: {
          value: { min: 1, max: 3.4 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          repulse: {
            distance: 110,
          },
          push: {
            quantity: 2,
          },
        },
      },
    }),
    [],
  )

  return (
    <div className="about-page">
      <header className="about-hero">
        <div className="about-particles" aria-hidden="true">
          {particlesReady && <Particles id="about-particles" options={particleOptions} />}
        </div>
        <nav className="projects-nav">
          <Link className="brand" to="/" onClick={() => setIsNavOpen(false)}>
            Code.clic
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label={isNavOpen ? 'Cerrar navegación' : 'Abrir navegación'}
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="visually-hidden">Menú</span>
            <span aria-hidden="true" className="nav-toggle-icon">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div className={`nav-links ${isNavOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setIsNavOpen(false)}>
              Inicio
            </Link>
            <Link to="/proyectos" onClick={() => setIsNavOpen(false)}>
              Proyectos
            </Link>
            <a href="#principios" onClick={() => setIsNavOpen(false)}>
              Enfoque
            </a>
            <a href="#equipo" onClick={() => setIsNavOpen(false)}>
              Equipo
            </a>
            <a href="#contacto" onClick={() => setIsNavOpen(false)}>
              Contacto
            </a>
          </div>
          <Link className="nav-cta" to="/proyectos" onClick={() => setIsNavOpen(false)}>
            Ver proyectos
          </Link>
        </nav>

        <div className="about-hero-content">
          <p className="hero-eyebrow">Sobre Code.clic</p>
          <h1>Somos un equipo creativo y estratégico que impulsa negocios a través de experiencias web medibles.</h1>
          <p className="hero-subtitle">
            Llevamos más de 7 años construyendo sitios que combinan diseño a medida, performance y procesos de venta
            efectivos para marcas que necesitan crecer con foco en resultados.
          </p>
        </div>
      </header>

      <main>
        <section className="section" id="principios">
          <div className="section-heading">
            <h2 className="section-title">Nuestra manera de trabajar</h2>
            <p className="section-subtitle">
              Cada proyecto es una colaboración real. Trabajamos junto a tus equipos para alinear producto, marketing y
              ventas en una misma historia.
            </p>
          </div>
          <div className="about-grid">
            {principles.map((item) => (
              <article className="about-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="equipo">
          <div className="section-heading">
            <h2 className="section-title">Capacidades clave</h2>
            <p className="section-subtitle">
              Un equipo multidisciplinario liderado por estrategas digitales, desarrolladores front-end y content designers.
            </p>
          </div>
          <div className="about-capabilities">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.category}>
                <h3>{capability.category}</h3>
                <ul>
                  {capability.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-contact" id="contacto">
          <div className="about-contact-card">
            <div>
              <h2>Conversemos sobre tu siguiente objetivo</h2>
              <p>
                Agenda una reunión exploratoria o escríbenos directo por el canal que prefieras. Respondemos en menos de 24
                horas hábiles.
              </p>
            </div>
            <div className="about-contact-actions">
              <a className="contact-pill" href="mailto:uknowme.code.clic@gmail.com">
                <FontAwesomeIcon aria-hidden="true" icon={faEnvelope} />
                <span>uknowme.code.clic@gmail.com</span>
              </a>
              <a
                className="contact-pill"
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon aria-hidden="true" className="icon-whatsapp" icon={faWhatsapp} />
                <span>WhatsApp empresarial</span>
              </a>
              <a
                className="contact-pill"
                href="https://www.instagram.com/code.clic"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon aria-hidden="true" className="icon-instagram" icon={faInstagram} />
                <span>@codeclic en Instagram</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-simple">
        <span>© {new Date().getFullYear()} Code.clic. Historias digitales que convierten.</span>
        <div className="footer-links">
          <div className="footer-nav">
            <Link to="/">Inicio</Link>
            <Link to="/proyectos">Proyectos</Link>
            <a href="#principios">Enfoque</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer-socials">
            <a
              className="footer-social"
              href="https://wa.me/5215512345678"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Code.clic"
            >
              <FontAwesomeIcon className="footer-icon icon-whatsapp" icon={faWhatsapp} />
            </a>
            <a
              className="footer-social"
              href="https://www.instagram.com/code.clic"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Code.clic"
            >
              <FontAwesomeIcon className="footer-icon icon-instagram" icon={faInstagram} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage
