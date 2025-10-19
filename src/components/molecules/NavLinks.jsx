import { Link, useLocation } from 'react-router-dom'

function NavLinks({ links = [], isNavOpen, onNavigate, className = 'nav-links', activeId }) {
  const location = useLocation()
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
        const { className: linkClassNameProp, ...linkRest } = rest

        const isRouteActive = to ? location.pathname === to : false
        const isSectionActive = href && href.startsWith('#') && activeId === href.substring(1)
        const isActive = isRouteActive || isSectionActive
        const linkClassName = [linkClassNameProp, isActive ? 'nav-link-active' : null]
          .filter(Boolean)
          .join(' ')

        if (to) {
          return (
            <Link
              key={key}
              to={to}
              onClick={handleClick(onClick)}
              className={linkClassName || undefined}
              {...linkRest}
            >
              {label}
            </Link>
          )
        }

        const anchorProps = external
          ? { target: '_blank', rel: 'noreferrer' }
          : undefined

        return (
          <a
            key={key}
            href={href}
            onClick={handleClick(onClick)}
            className={linkClassName || undefined}
            {...anchorProps}
            {...linkRest}
          >
            {label}
          </a>
        )
      })}
    </div>
  )
}

export default NavLinks
