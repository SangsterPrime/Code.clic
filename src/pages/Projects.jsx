import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import useResponsiveNav from '../hooks/useResponsiveNav.js'
import useActiveSection from '../hooks/useActiveSection.js'
import MainNav from '../components/organisms/MainNav.jsx'
import CtaLink from '../components/atoms/CtaLink.jsx'
import ScrollToTopButton from '../components/atoms/ScrollToTopButton.jsx'
import Footer from '../components/organisms/Footer.jsx'
import { navigationConfig, footerConfig } from '../data/siteContent.js'

const completedProjects = [
  {
    name: 'Distribuidora Oeste',
    description:
      'Catálogo estático con carrito y checkout inteligente por WhatsApp para una distribuidora de alimentos sin backend propio.',
    impact: 'Permite procesar pedidos B2B y retail con respuestas automáticas según dispositivo y horario de atención.',
    tags: ['Carrito sin backend', 'Checkout WhatsApp', 'Promociones por categoría'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: {
      src: 'https://portafolio-omega-tawny-87.vercel.app/assets/vitalco-DqXvKxsR.webp',
      alt: 'Vista previa del catálogo Distribuidora Oeste',
    },
    links: [
      { label: 'Caso detallado', href: 'https://portafolio-omega-tawny-87.vercel.app/projects/p1' },
      { label: 'Sitio en vivo', href: 'https://vitalco.cl/' },
      { label: 'Repositorio', href: 'https://github.com/SangsterPrime/Distribuidora-Oeste' },
    ],
  },
  {
    name: "Don't Sleep",
    description:
      'Script de PowerShell que mantiene activo Windows utilizando la API Win32 SetThreadExecutionState para evitar suspensión y apagado de pantalla.',
    impact: 'Ideal para operadores y técnicos que necesitan ejecutar procesos largos sin modificar la política de energía del equipo.',
    tags: ['Automatización PowerShell', 'Prevención suspensión', 'Uso API Win32'],
    tech: ['PowerShell'],
    image: {
      src: 'https://portafolio-omega-tawny-87.vercel.app/assets/dont-sleep-BmOxRuRB.webp',
      alt: "Ilustración del script Don't Sleep ejecutándose en Windows",
    },
    links: [
      { label: 'Caso detallado', href: 'https://portafolio-omega-tawny-87.vercel.app/projects/dont-sleep' },
      { label: 'Repositorio', href: 'https://github.com/SangsterPrime/Don-t-Sleep' },
    ],
  },
  {
    name: 'Ministerio Evangélico Altar Oración',
    description:
      'Sitio informativo con medios administrados por JSON, botones de contacto con mensajes prellenados y agenda de actividades solidarias.',
    impact: 'Simplifica la coordinación de voluntariado y facilita las donaciones con flujos directos por WhatsApp.',
    tags: ['Contenido dinámico', 'Automatización WhatsApp', 'Recursos comunitarios'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: {
      src: 'https://portafolio-omega-tawny-87.vercel.app/assets/react-CHdo91hT.svg',
      alt: 'Captura del sitio Ministerio Evangélico Altar Oración',
    },
    links: [
      { label: 'Caso detallado', href: 'https://portafolio-omega-tawny-87.vercel.app/projects/altar-oracion' },
      { label: 'Sitio en vivo', href: 'https://altardeoracion.cl/' },
      { label: 'Repositorio', href: 'https://github.com/SangsterPrime/Ministerio-Evang-lico-Altar-Oraci-n' },
    ],
  },
]

const inProgressProjects = [
  {
    name: 'TechEd Campus',
    description:
      'Plataforma educativa con catálogo de cursos bajo demanda, certificaciones digitales y dashboards personalizados.',
    launch: 'Lanzamiento estimado: Q1 2026',
    offerings: ['Academias corporativas', 'Gamificación', 'Integración LMS'],
  },
  {
    name: 'GreenBite Market',
    description:
      'Marketplace para productores locales con logística integrada y monitoreo de huella de carbono por pedido.',
    launch: 'Kick-off: enero 2026',
    offerings: ['Marketplace escalable', 'Panel distribuidores', 'Indicadores ESG'],
  },
]

function ProjectsPage() {
  const [particlesReady, setParticlesReady] = useState(false)
  const { isNavOpen, toggleNav, closeNav } = useResponsiveNav()
  const projectSections = useMemo(() => ['proyectos-realizados', 'ofertas', 'colaborar'], [])
  const activeSectionId = useActiveSection(projectSections)

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
          value: 30,
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
    <div className="projects-page">
      <header className="projects-hero">
        <div className="projects-particles" aria-hidden="true">
          {particlesReady && <Particles id="projects-particles" options={particleOptions} />}
        </div>
        <MainNav
          className="projects-nav"
          links={navigationConfig.projects}
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
          closeNav={closeNav}
          activeSectionId={activeSectionId}
          cta={{
            label: 'Consulta un proyecto',
            href: 'https://wa.me/5215512345678',
            target: '_blank',
            rel: 'noreferrer',
          }}
        />

        <div className="projects-hero-content">
          <p className="hero-eyebrow">Portafolio Code.clic</p>
          <h1>Soluciones digitales que aceleran ventas, operaciones y experiencias.</h1>
          <p className="hero-subtitle">
            Aquí encontrarás una selección de proyectos lanzados y nuevas experiencias en desarrollo. Cada producto está
            diseñado con objetivos claros, medición continua y soporte a largo plazo.
          </p>
          <div className="hero-cta-group">
            <CtaLink variant="primary" to="/">
              Volver a inicio
            </CtaLink>
            <CtaLink variant="secondary" href="#proyectos-realizados">
              Ver proyectos realizados
            </CtaLink>
            <CtaLink variant="secondary" to="/sobre-nosotros">
              Conoce al equipo
            </CtaLink>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="proyectos-realizados">
          <div className="section-heading">
            <h2 className="section-title">Casos de éxito recientes</h2>
            <p className="section-subtitle">
              Productos digitales completos, listos para escalar y con resultados tangibles desde el lanzamiento.
            </p>
          </div>

          <div className="project-grid">
            {completedProjects.map((project) => (
              <article className="project-card" key={project.name}>
                {project.image ? (
                  <figure className="project-media">
                    <img src={project.image.src} alt={project.image.alt} loading="lazy" />
                  </figure>
                ) : null}
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.impact ? <p className="project-impact">{project.impact}</p> : null}
                </div>
                {(project.tags?.length || project.tech?.length) && (
                  <div className="project-meta">
                    {project.tags?.length ? (
                      <div className="project-tags">
                        {project.tags.map((tag) => (
                          <span className="project-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {project.tech?.length ? (
                      <div className="project-tech">
                        <span>Stack:</span>
                        <ul>
                          {project.tech.map((tech) => (
                            <li key={tech}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                )}
                {project.links?.length ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={`${project.name}-${link.label}`}
                        className="project-link"
                        href={link.href}
                        target={link.external === false ? undefined : '_blank'}
                        rel={link.external === false ? undefined : 'noreferrer'}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
          <div className="project-external-cta">
            <p>
              ¿Quieres profundizar en más casos, prototipos y retos personales? Explora el portafolio extendido con
              bitácoras, aprendizajes y proyectos experimentales.
            </p>
            <a className="project-link" href="https://portafolio-omega-tawny-87.vercel.app" target="_blank" rel="noreferrer">
              Ver portafolio completo
            </a>
          </div>
        </section>

        <section className="section section-alt" id="ofertas">
          <div className="section-heading">
            <h2 className="section-title">Proyectos en desarrollo y próximos lanzamientos</h2>
            <p className="section-subtitle">
              Descubre qué iniciativas estamos construyendo y cómo puedes ser parte de la siguiente generación de
              productos digitales Code.clic.
            </p>
          </div>

          <div className="project-roadmap">
            {inProgressProjects.map((project) => (
              <article className="roadmap-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="roadmap-launch">{project.launch}</p>
                <ul>
                  {project.offerings.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-cta" id="colaborar">
          <div className="projects-cta-card">
            <div>
              <h2>¿Tienes un reto digital? Lo transformamos en resultados.</h2>
              <p>
                Agendemos una auditoría gratuita de 30 minutos. Analizamos tu situación actual y proponemos un roadmap
                realista basado en datos y mejores prácticas.
              </p>
            </div>
            <a className="cta-primary" href="https://wa.me/5215512345678" target="_blank" rel="noreferrer">
              <FontAwesomeIcon aria-hidden="true" className="cta-icon icon-whatsapp" icon={faWhatsapp} />
              Agenda por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer
        {...footerConfig.secondary}
        copyright={`© ${new Date().getFullYear()} Code.clic. Historias que convierten.`}
      />
      <ScrollToTopButton />
    </div>
  )
}

export default ProjectsPage
