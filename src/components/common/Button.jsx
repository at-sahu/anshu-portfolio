import clsx from 'clsx'

function Button({
  as = 'button',
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className,
  external = false,
  download,
  ...props
}) {
  const Component = href ? 'a' : as
  const linkProps = href
    ? {
        href,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
        download,
      }
    : { type: props.type || 'button' }

  return (
    <Component className={clsx('btn magnetic', `btn-${variant}`, className)} {...linkProps} {...props}>
      {Icon ? <Icon size={18} strokeWidth={1.9} aria-hidden="true" /> : null}
      <span>{children}</span>
    </Component>
  )
}

export default Button
