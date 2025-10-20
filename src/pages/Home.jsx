import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useResponsiveNav from '../hooks/useResponsiveNav.js'
import useActiveSection from '../hooks/useActiveSection.js'
import MainNav from '../components/organisms/MainNav.jsx'
import CtaLink from '../components/atoms/CtaLink.jsx'
import ScrollToTopButton from '../components/atoms/ScrollToTopButton.jsx'
import Footer from '../components/organisms/Footer.jsx'
import { navigationConfig, footerConfig } from '../data/siteContent.js'

const solutionTypes = [
  {
    name: 'One Page enfocado',
    summary: 'Una landing directa para validar tu propuesta y captar clientes de inmediato.',
    highlights: ['Una sección estratégica de alto impacto', 'Copy persuasivo y llamado a la acción destacado', 'Integración con formularios o WhatsApp'],
  },
  {
    name: 'Sitio Web profesional',
    summary: 'Estructura completa con navegación clara para negocios que necesitan escalar su presencia.',
    highlights: ['Hasta 6 secciones personalizadas', 'Arquitectura de información pensada para convertir', 'Configuración de analítica y SEO base'],
  },
  {
    name: 'Ecommerce listo para vender',
    summary: 'Tienda online administrable con pasarelas seguras y reportes automáticos.',
    highlights: ['Catálogo con stock y variantes', 'Carrito, checkout y correos automatizados', 'Dashboard con métricas de ventas'],
  },
]

const differentiators = [
  {
    title: 'Diseño estratégico',
    description:
      'Cada layout se apoya en investigación de usuarios y objetivos de negocio para transmitir confianza y acción inmediata.',
  },
  {
    title: 'Implementación optimizada',
    description:
      'Performance, accesibilidad y SEO técnico listos desde el lanzamiento para que Google y tus clientes te encuentren.',
  },
  {
    title: 'Soporte continuo',
    description:
      'Te acompañamos con capacitación, mejoras iterativas y un equipo disponible para ajustes o nuevas campañas.',
  },
]

const planOptions = [
  {
    name: 'Plan Starter',
    price: '$99.990 + IVA',
    summary: 'Una sección de alto impacto para presentar tu marca o servicio y activar contactos rápidos.',
    ctaLabel: 'Quiero este plan',
    isFeatured: false,
    features: [
      { label: 'Una sección estratégica', included: true },
      { label: 'Diseño responsive', included: true },
      { label: 'Botón de WhatsApp', included: true },
      { label: 'Formulario de contacto', included: true },
      { label: 'Soporte asistido 30 días', included: true },
      { label: 'Auto administrable', included: true },
      { label: 'Galería de imágenes', included: false },
      { label: 'Optimización SEO avanzada', included: false },
      { label: 'Mapa de ubicación', included: false },
      { label: 'Integración Pixel Ads', included: false },
    ],
  },
  {
    name: 'Plan Standard',
    price: '$159.990 + IVA',
    summary: 'Cinco secciones pensadas para negocios en crecimiento con foco en posicionamiento digital.',
    ctaLabel: 'Cotizar Plan Standard',
    isFeatured: true,
    features: [
      { label: 'Hasta 5 secciones', included: true },
      { label: 'Diseño responsive', included: true },
      { label: 'Botón de WhatsApp', included: true },
      { label: 'Formulario de contacto', included: true },
      { label: 'Soporte asistido 60 días', included: true },
      { label: 'Auto administrable', included: true },
      { label: 'Galería de imágenes', included: true },
      { label: 'Optimización SEO base', included: true },
      { label: 'Mapa de ubicación', included: true },
      { label: 'Integración Pixel Ads', included: false },
    ],
  },
  {
    name: 'Plan Premium',
    price: '$209.990 + IVA',
    summary: 'Diez secciones, automatizaciones y analítica completa para marcas que requieren escalar.',
    ctaLabel: 'Elegir Plan Premium',
    isFeatured: false,
    features: [
      { label: 'Hasta 10 secciones', included: true },
      { label: 'Diseño responsive', included: true },
      { label: 'Botón de WhatsApp', included: true },
      { label: 'Formularios avanzados', included: true },
      { label: 'Soporte asistido 90 días', included: true },
      { label: 'Auto administrable + capacitación', included: true },
      { label: 'Galería de imágenes', included: true },
      { label: 'Optimización SEO avanzada', included: true },
      { label: 'Mapa de ubicación', included: true },
      { label: 'Integración Pixel Ads', included: true },
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
  const { isNavOpen, toggleNav, closeNav } = useResponsiveNav()
  const homeSections = useMemo(
    () => ['inicio', 'soluciones', 'diferenciales', 'planes', 'proceso', 'portafolio', 'testimonios', 'contacto'],
    [],
  )
  const activeSectionId = useActiveSection(homeSections)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
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
        <MainNav
          className="hero-navbar"
          links={navigationConfig.home}
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
          closeNav={closeNav}
          activeSectionId={activeSectionId}
          cta={{ label: 'Agenda una llamada', href: '#contacto' }}
        />

        <div className="hero-content">
          <p className="hero-eyebrow">Diseño y desarrollo web estratégico</p>
          <h1>Impulsa tu negocio con Code.clic: páginas web profesionales que convierten visitas en clientes.</h1>
          <p className="hero-subtitle">
            En Code.clic creamos sitios web en React con enfoque en resultados medibles, optimizados para buscadores y
            listos para escalar. Trabajamos junto a equipos de marketing y ventas para que cada sección tenga un
            propósito.
          </p>
          <div className="hero-cta-group">
            <CtaLink variant="primary" href="#contacto">
              Solicitar propuesta
            </CtaLink>
            <CtaLink variant="secondary" to="/proyectos">
              Ver proyectos
            </CtaLink>
            <CtaLink variant="secondary" to="/sobre-nosotros">
              Conoce al equipo
            </CtaLink>
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
        <section className="section" id="soluciones">
          <h2 className="section-title">¿Qué tipo de solución necesitas?</h2>
          <p className="section-subtitle">
            Identificamos el formato ideal para tu negocio, ya sea una landing enfocada, un sitio corporativo completo o
            un ecommerce preparado para vender sin fricción.
          </p>
          <div className="solution-grid">
            {solutionTypes.map((solution) => (
              <article className="solution-card" key={solution.name}>
                <h3>{solution.name}</h3>
                <p>{solution.summary}</p>
                <ul className="solution-points">
                  {solution.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="diferenciales">
          <h2 className="section-title">Páginas web profesionales para crecer</h2>
          <p className="section-subtitle">
            Diseñamos páginas web enfocadas en el crecimiento sostenido de tu negocio, con procesos transparentes y un
            equipo que entiende tus objetivos.
          </p>
          <div className="feature-grid">
            {differentiators.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-index">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="planes">
          <h2 className="section-title">Elige el plan que mejor se adapta a tu negocio</h2>
          <p className="section-subtitle">
            Compara nuestros planes y escoge el nivel de acompañamiento que necesitas. Todos incluyen diseño responsive,
            configuración inicial de analítica y soporte dedicado.
          </p>
          <div className="plan-grid">
            {planOptions.map((plan) => (
              <article className={`plan-card${plan.isFeatured ? ' plan-card-featured' : ''}`} key={plan.name}>
                {plan.isFeatured ? <span className="plan-card-badge">Recomendado</span> : null}
                <header>
                  <h3>{plan.name}</h3>
                  <span className="plan-price">{plan.price}</span>
                </header>
                <p className="plan-summary">{plan.summary}</p>
                <ul className="plan-feature-list">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.label}
                      className={feature.included ? 'plan-feature plan-feature--included' : 'plan-feature plan-feature--excluded'}
                    >
                      <FontAwesomeIcon
                        aria-hidden="true"
                        icon={feature.included ? faCircleCheck : faCircleXmark}
                        className="plan-feature-icon"
                      />
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
                <a className="plan-cta" href="#contacto">
                  {plan.ctaLabel}
                </a>
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

        <section className="section" id="portafolio">
          <div className="portfolio-card">
            <div>
              <h2 className="section-title">Explora nuestros proyectos digitales</h2>
              <p className="section-subtitle">
                Conoce los sitios que hemos lanzado para emprendedores y empresas que confiaron en Code.clic. Cada
                proyecto se diseña a medida de sus objetivos y métricas clave.
              </p>
            </div>
            <CtaLink variant="primary" to="/proyectos">
              Ver portafolio completo
            </CtaLink>
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

      <Footer
        {...footerConfig.primary}
        copyright={`© ${new Date().getFullYear()} Code.clic. Todos los derechos reservados.`}
      />
      <ScrollToTopButton />
    </div>
  )
}

export default HomePage
