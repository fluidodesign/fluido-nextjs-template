import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const _TestCopy = ({}, ref) => {
  return <div ref={ref}></div>
}

const TestCopy = forwardRef(_TestCopy)

TestCopy.propTypes = {}

export default TestCopy
