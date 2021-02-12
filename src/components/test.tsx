import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const _Test = ({}, ref) => {
  return <div ref={ref}></div>
}

const Test = forwardRef(_Test)

Test.propTypes = {}

export default Test
