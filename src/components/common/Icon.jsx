import { iconMap } from '../../data/portfolio.js'

function Icon({ name, size = 20, strokeWidth = 1.8, className = '', ...props }) {
  const LucideIcon = iconMap[name] || iconMap.Sparkles
  return <LucideIcon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" {...props} />
}

export default Icon
