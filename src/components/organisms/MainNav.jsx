import Brand from '../atoms/Brand.jsx'
import CtaLink from '../atoms/CtaLink.jsx'
import NavToggle from '../atoms/NavToggle.jsx'
import NavLinks from '../molecules/NavLinks.jsx'

function MainNav({
  className,
  brandTo = '/',
  brandLabel = 'Code.clic',
  links = [],
  cta,
  isNavOpen,
  toggleNav,
  closeNav,
}) {
  const { label: ctaLabel, variant: ctaVariant, onClick: ctaOnClick, ...ctaRest } = cta ?? {}

  return (
    <nav className={className}>
      <Brand to={brandTo} label={brandLabel} onClick={closeNav} />
      <NavToggle isOpen={isNavOpen} onToggle={toggleNav} />
      <NavLinks links={links} isNavOpen={isNavOpen} onNavigate={closeNav} />
      {cta ? (
        <CtaLink
          variant={ctaVariant ?? 'nav'}
          onClick={(event) => {
            if (ctaOnClick) {
              ctaOnClick(event)
            }
            if (closeNav) {
              closeNav()
            }
          }}
          {...ctaRest}
        >
          {ctaLabel}
        </CtaLink>
      ) : null}
    </nav>
  )
}

export default MainNav
