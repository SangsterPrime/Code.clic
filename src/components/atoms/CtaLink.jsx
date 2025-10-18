import { Link } from 'react-router-dom'

const variantClassMap = {
  primary: 'cta-primary',
  secondary: 'cta-secondary',
  nav: 'nav-cta',
}

function CtaLink({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const variantClass = variantClassMap[variant] ?? ''
  const classes = `${variantClass} ${className}`.trim()

  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classes} href={href} {...rest}>
      {children}
    </a>
  )
}

export default CtaLink
