import { Link } from 'react-router-dom'

function NavLinks({ links = [], isNavOpen, onNavigate, className = 'nav-links' }) {
  const classes = `${className} ${isNavOpen ? 'nav-open' : ''}`.trim()

  const handleClick = (userHandler) => (event) => {
    if (userHandler) {
      userHandler(event)
    }
    if (onNavigate) {
      onNavigate()
    }
  }

  return (
    <div className={classes}>
      {links.map((link) => {
        const { id, label, to, href, external = false, onClick, ...rest } = link
        const key = id ?? label

        if (to) {
          return (
            <Link key={key} to={to} onClick={handleClick(onClick)} {...rest}>
              {label}
            </Link>
          )
        }

        const anchorProps = external
          ? { target: '_blank', rel: 'noreferrer' }
          : undefined

        return (
          <a key={key} href={href} onClick={handleClick(onClick)} {...anchorProps} {...rest}>
            {label}
          </a>
        )
      })}
    </div>
  )
}

export default NavLinks
