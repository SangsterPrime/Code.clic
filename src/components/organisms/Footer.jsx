import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer({ variant = 'primary', links = [], socials = [], copyright }) {
  const footerClass = variant === 'primary' ? 'footer' : 'footer footer-simple'

  const renderLink = (link) => {
    const { label, to, href, external = false, id, ...rest } = link
    const key = id ?? label

    if (to) {
      return (
        <Link key={key} to={to} {...rest}>
          {label}
        </Link>
      )
    }

    const anchorProps = external ? { target: '_blank', rel: 'noreferrer' } : {}

    return (
      <a key={key} href={href} {...anchorProps} {...rest}>
        {label}
      </a>
    )
  }

  return (
    <footer className={footerClass}>
      <span>{copyright}</span>
      <div className="footer-links">
        <div className="footer-nav">
          {links.map((link) => renderLink(link))}
        </div>
        {socials.length > 0 ? (
          <div className="footer-socials">
            {socials.map(({ label, href, icon, className }) => (
              <a key={label} className="footer-social" href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <FontAwesomeIcon className={`footer-icon ${className ?? ''}`.trim()} icon={icon} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  )
}

export default Footer
