import VisuallyHidden from './VisuallyHidden.jsx'

function NavToggle({ isOpen, onToggle }) {
  return (
    <button
      type="button"
      className="nav-toggle"
      aria-label={isOpen ? 'Cerrar navegación' : 'Abrir navegación'}
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <VisuallyHidden>Menú</VisuallyHidden>
      <span aria-hidden="true" className="nav-toggle-icon">
        <span />
        <span />
        <span />
      </span>
    </button>
  )
}

export default NavToggle
