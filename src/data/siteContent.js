import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const navigationConfig = {
  home: [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
    { label: 'Sobre nosotros', to: '/sobre-nosotros' },
    { label: 'Proyectos', to: '/proyectos' },
  ],
  projects: [
    { label: 'Inicio', to: '/' },
    { label: 'Proyectos', href: '#proyectos-realizados' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Sobre nosotros', to: '/sobre-nosotros' },
  ],
  about: [
    { label: 'Inicio', to: '/' },
    { label: 'Proyectos', to: '/proyectos' },
    { label: 'Enfoque', href: '#principios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contacto', href: '#contacto' },
  ],
}

export const footerConfig = {
  primary: {
    variant: 'primary',
    links: [
      { label: 'Inicio', to: '/' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'Sobre nosotros', to: '/sobre-nosotros' },
      { label: 'Proyectos', to: '/proyectos' },
    ],
    socials: [
      {
        label: 'WhatsApp Code.clic',
        href: 'https://wa.me/5215512345678',
        icon: faWhatsapp,
        className: 'icon-whatsapp',
      },
      {
        label: 'Instagram Code.clic',
        href: 'https://www.instagram.com/code.clic',
        icon: faInstagram,
        className: 'icon-instagram',
      },
    ],
  },
  secondary: {
    variant: 'secondary',
    links: [
      { label: 'Inicio', to: '/' },
      { label: 'Proyectos', href: '#proyectos-realizados' },
      { label: 'Ofertas', href: '#ofertas' },
      { label: 'Sobre nosotros', to: '/sobre-nosotros' },
    ],
    socials: [
      {
        label: 'WhatsApp Code.clic',
        href: 'https://wa.me/5215512345678',
        icon: faWhatsapp,
        className: 'icon-whatsapp',
      },
    ],
  },
  about: {
    variant: 'secondary',
    links: [
      { label: 'Inicio', to: '/' },
      { label: 'Proyectos', to: '/proyectos' },
      { label: 'Enfoque', href: '#principios' },
      { label: 'Contacto', href: '#contacto' },
    ],
    socials: [
      {
        label: 'WhatsApp Code.clic',
        href: 'https://wa.me/5215512345678',
        icon: faWhatsapp,
        className: 'icon-whatsapp',
      },
      {
        label: 'Instagram Code.clic',
        href: 'https://www.instagram.com/code.clic',
        icon: faInstagram,
        className: 'icon-instagram',
      },
    ],
  },
}
