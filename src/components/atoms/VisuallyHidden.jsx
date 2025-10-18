function VisuallyHidden({ as: Component = 'span', children }) {
  return (
    <Component className="visually-hidden">
      {children}
    </Component>
  )
}

export default VisuallyHidden
