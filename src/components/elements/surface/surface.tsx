import cx from 'classnames'
import { motion } from 'framer-motion'
import { betweenNumbers } from 'app-components/commons/prop-types'
import styled from 'styled-components'

const StyledDiv = styled(motion.div)`
  .surface {
    background-color: var(--surface);
    color: var(--on-surface-high-emphasis);
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--on-surface-divider);
  }
`

const Surface = ({ children, className, elevation = 0, ...props }) => {
  return (
    <StyledDiv
      className={cx('surface', className, `elevation-${elevation}`)}
      {...props}>
      {children}
    </StyledDiv>
  )
}

Surface.propTypes = {
  elevation: betweenNumbers({ max: 24, min: 0 }),
}

export default Surface
