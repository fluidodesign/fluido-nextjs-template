import cx from 'classnames'
import { motion } from 'framer-motion'
import styled from 'styled-components'

interface SurfaceProps {
  className?: string
  elevation?: number
  [key: string]: any
}

const StyledSurface = styled(motion.div)`
  .surface {
    background-color: var(--surface);
    color: var(--on-surface-high-emphasis);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--on-surface-divider);
  }
`

const Surface: React.FunctionComponent<SurfaceProps> = ({
  children,
  className,
  elevation = 0,
  ...props
}) => {
  return (
    <StyledSurface
      className={cx('surface', className, `elevation-${elevation}`)}
      {...props}>
      {children}
    </StyledSurface>
  )
}

export default Surface
