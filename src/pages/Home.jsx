import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Diseños a medida',
    description:
      'Creamos experiencias digitales únicas que reflejan la esencia de tu marca y guían al usuario hacia la conversión.',
  },
  {
    title: 'Estrategia centrada en resultados',
    description:
      'Investigamos a tu competencia, definimos objetivos claros y estructuramos la navegación para maximizar el impacto.',
  },
  {
    title: 'Optimización integral',
    description:
      'Sitios veloces, adaptables y listos para posicionarse en Google desde el primer día.',
  },
]

const services = [
  {
    name: 'Landing Page Persuasiva',
    price: 'Desde $269.000 CLP',
    description:
      'Ideal para lanzamientos rápidos y campañas que necesitan captar leads con un mensaje claro y directo.',
    deliverables: [
      'Diseño personalizado de una sección de aterrizaje',
      'Integración con formularios y seguimiento de conversiones',
      'Lanzamiento optimizado para dispositivos móviles',
    ],
  },
  {
    name: 'Sitio Corporativo Profesional',
    price: 'Desde $621.000 CLP',
    description:
      'La presencia digital completa para empresas que buscan confianza, posicionamiento y una imagen sólida.',
    deliverables: [
      'Hasta 6 páginas estratégicas (Inicio, Servicios, Nosotros, Blog, Contacto...)',
      'Integración con chat en vivo, CRM o WhatsApp Business',
      'Panel autogestionable y capacitación express',
    ],
  },
  {
    name: 'Ecommerce Optimizado',
    price: 'Desde $891.000 CLP',
    description:
      'Lanza tu tienda en línea lista para vender con procesos seguros y experiencia de compra memorable.',
    deliverables: [
      'Catálogo administrable y pasarelas de pago seguras',
      'Automatización de correos post compra',
      'Reporting de ventas y desempeño en un solo panel',
    ],
  },
]

const process = [
  {
    step: 'Descubrimiento',
    detail: 'Analizamos objetivos, público y propuesta de valor en una sesión estratégica de 45 minutos.',
  },
  {
    step: 'Prototipo y diseño UI',
    detail: 'Armamos wireframes y definimos la identidad visual antes de escribir una sola línea de código.',
  },
  {
    step: 'Desarrollo y pruebas',
    detail: 'Construimos sobre React y realizamos controles de calidad en velocidad, accesibilidad y seguridad.',
  },
  {
    step: 'Lanzamiento y acompañamiento',
    detail: 'Publicamos tu sitio, configuramos analítica y te acompañamos en la optimización continua.',
  },
]

const testimonials = [
  {
    quote: 'Nuestro tráfico se duplicó y ahora recibimos leads diarios con un proceso que podemos medir cada semana.',
    author: 'María Gómez — Directora de Alianzas Comerciales',
  },
  {
    quote: 'El rediseño nos permitió cerrar negociaciones internacionales gracias a la credibilidad que transmite el sitio.',
    author: 'Carlos Rivera — CEO de NeoLogística',
  },
  {
    quote: 'Automatizamos reservas y pagos. En menos de un mes recuperamos la inversión inicial.',
    author: 'Laura Méndez — Fundadora de Fit&Co Studio',
  },
]

const stats = [
  { value: '95%', label: 'Clientes que nos recomiendan' },
  { value: '3x', label: 'Promedio de leads tras el lanzamiento' },
  { value: '14 días', label: 'Tiempo de entrega para proyectos ágiles' },
]

function HomePage() {
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
          value: 35,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: ['#bbf7d0', '#22c55e', '#15803d'],
        },
        links: {
          enable: true,
          color: '#bbf7d0',
          distance: 150,
          opacity: 0.35,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          outModes: {
            default: 'bounce',
          },
        },
        opacity: {
          value: 0.6,
        },
        size: {
          value: { min: 1, max: 3.5 },
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
            distance: 120,
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
    <div className="app">
      <header className="hero" id="inicio">
        <div className="hero-particles" aria-hidden="true">
          {particlesReady && <Particles id="codeclic-particles" options={particleOptions} />}
        </div>
        <nav className="hero-navbar">
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
            <a href="#servicios" onClick={() => setIsNavOpen(false)}>
              Servicios
            </a>
            <a href="#proceso" onClick={() => setIsNavOpen(false)}>
              Proceso
            </a>
            <a href="#testimonios" onClick={() => setIsNavOpen(false)}>
              Testimonios
            </a>
            <a href="#contacto" onClick={() => setIsNavOpen(false)}>
              Contacto
            </a>
            <Link to="/sobre-nosotros" onClick={() => setIsNavOpen(false)}>
              Sobre nosotros
            </Link>
            <Link to="/proyectos" onClick={() => setIsNavOpen(false)}>
              Proyectos
            </Link>
          </div>
          <a className="nav-cta" href="#contacto" onClick={() => setIsNavOpen(false)}>
            Agenda una llamada
          </a>
        </nav>

        <div className="hero-content">
          <p className="hero-eyebrow">Diseño y desarrollo web estratégico</p>
          <h1>Impulsa tu negocio con Code.clic: páginas web profesionales que convierten visitas en clientes.</h1>
          <p className="hero-subtitle">
            En Code.clic creamos sitios web en React con enfoque en resultados medibles, optimizados para buscadores y
            listos para escalar. Trabajamos junto a equipos de marketing y ventas para que cada sección tenga un
            propósito.
          </p>
          <div className="hero-cta-group">
            <a className="cta-primary" href="#contacto">
              Solicitar propuesta
            </a>
            <Link className="cta-secondary" to="/proyectos">
              Ver proyectos
            </Link>
            <Link className="cta-secondary" to="/sobre-nosotros">
              Conoce al equipo
            </Link>
          </div>
        </div>

        <div className="stats">
          {stats.map((item) => (
            <div className="stat-card" key={item.value}>
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main>
        <section className="section" id="diferenciales">
          <h2 className="section-title">¿Por qué elegir Code.clic?</h2>
          <p className="section-subtitle">
            Diseñamos páginas web enfocadas en el crecimiento sostenido de tu negocio, con procesos transparentes y un
            equipo que entiende tus objetivos.
          </p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-index">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

  <section className="section" id="servicios">
          <h2 className="section-title">Servicios Code.clic</h2>
          <p className="section-subtitle">
            Escoge el plan que mejor se adapte a tu etapa de crecimiento. Cada proyecto incluye investigación, diseño y
            acompañamiento posterior al lanzamiento.
          </p>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <header>
                  <h3>{service.name}</h3>
                  <span className="service-price">{service.price}</span>
                </header>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="proceso">
          <h2 className="section-title">Un proceso claro y colaborativo</h2>
          <div className="process-timeline">
            {process.map((stage, index) => (
              <div className="process-step" key={stage.step}>
                <div className="process-index">{index + 1}</div>
                <div>
                  <h3>{stage.step}</h3>
                  <p>{stage.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="testimonios">
          <h2 className="section-title">Resultados que hablan por sí solos</h2>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={item.author}>
                <blockquote>{item.quote}</blockquote>
                <figcaption>{item.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-card">
            <div>
              <h2>¿Listo para transformar tu presencia digital con Code.clic?</h2>
              <p>
                Responde este mensaje o agenda una llamada y en menos de 24 horas tendrás un roadmap con tiempos,
                inversión y resultados esperados.
              </p>
            </div>
            <a className="cta-primary" href="#contacto">
              Agenda una llamada
            </a>
          </div>
        </section>

        <section className="section" id="contacto">
          <div className="contact-card">
            <h2>Hablemos de tu proyecto con Code.clic</h2>
            <p>
              Escríbenos con los objetivos de tu negocio y en menos de un día hábil te contactaremos con una propuesta a
              medida.
            </p>
            <div className="contact-details">
              <a className="contact-link" href="mailto:uknowme.code.clic@gmail.com">
                <span className="contact-text">Uknowme.code.clic@gmail.com</span>
              </a>
              <a
                className="contact-link"
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon aria-hidden="true" className="contact-icon icon-whatsapp" icon={faWhatsapp} />
                <span className="contact-text">WhatsApp: +52 1 55 1234 5678</span>
              </a>
              <a
                className="contact-link"
                href="https://www.instagram.com/code.clic"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon aria-hidden="true" className="contact-icon icon-instagram" icon={faInstagram} />
                <span className="contact-text">Instagram: @codeclic</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Code.clic. Todos los derechos reservados.</span>
        <div className="footer-links">
          <div className="footer-nav">
            <Link to="/">Inicio</Link>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <Link to="/sobre-nosotros">Sobre nosotros</Link>
            <Link to="/proyectos">Proyectos</Link>
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

export default HomePage
