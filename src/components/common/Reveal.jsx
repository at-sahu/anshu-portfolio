import { motion } from 'framer-motion'

function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const Component = motion[as] || motion.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  )
}

export default Reveal
