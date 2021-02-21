import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface RippleProps {
  className?: string
  anchor: any
  toCenter?: boolean
  toIcon?: boolean
}

type RippleState =
  | 'hidden'
  | 'hidden2'
  | 'ripple'
  | 'ripple2'
  | 'long'
  | 'focus'
  | 'focus2'

const rippleVariants = {
  hidden: {
    opacity: 0.24,
    scale: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.25,
    },
  },
  hidden2: {
    opacity: [0.24, 0.24],
    scale: [0, 0],
  },
  long: {
    opacity: 0.24,
    scale: 10,
    transition: {
      ease: 'easeOut',
      duration: 2,
    },
  },
  ripple: {
    opacity: 0,
    scale: 10,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
  ripple2: {
    opacity: 0,
    scale: 10,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
  focus: {
    opacity: 0.24,
    scale: 2.2,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
  focus2: {
    opacity: 0.24,
    scale: 1.8,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
}

const StyledNode = styled.div`
  .ripple {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background-color: transparent;
    & > {
      position: absolute;
      background-color: currentColor;
      border-radius: 99999999px;
    }
  }
`

const Ripple: React.FunctionComponent<RippleProps> = ({
  className,
  anchor,
  toCenter = false,
  toIcon = false,
}) => {
  const [state, setState] = useState<RippleState>('hidden')
  const [pos, setPos] = useState([0, 0])
  const [size, setSize] = useState(100)
  const ref = useRef()

  useEffect(() => {
    const element = ref.current as HTMLElement
    const anchorNode = (anchor.current || anchor) as HTMLElement

    if (!anchorNode || !anchorNode.tagName || !element) return

    const calcData = (evX?: number, evY?: number) => {
      if (toCenter) {
        evX = 0
        evY = 0
      }
      const clientX = evX || 0
      const clientY = evY || 0

      const { height, width, top, left } = element.getBoundingClientRect()
      const x = clientX - left
      const y = clientY - top
      let rippleSize = Math.min(height, width, 100)

      if (toIcon) {
        rippleSize /= 2.5
      }

      const positionTop = clientX
        ? y - rippleSize / 2
        : height / 2 - rippleSize / 2
      const positionLeft = clientY
        ? x - rippleSize / 2
        : width / 2 - rippleSize / 2

      setPos([positionLeft, positionTop])
      setSize(rippleSize)
    }
    calcData()

    function onFocus() {
      setState((s: RippleState) => {
        if (!['ripple', 'ripple2', 'long'].includes(s)) {
          calcData()
          return 'focus'
        } else {
          return s
        }
      })
    }

    function onBlur() {
      setState((s) => {
        if (!['ripple', 'ripple2', 'long'].includes(s)) {
          calcData()
          return 'hidden'
        } else {
          return s
        }
      })
    }
    /** @param {MouseEvent} ev */
    function onRipple(ev) {
      calcData(ev.clientX, ev.clientY)
      setState((s) => {
        switch (s) {
          case 'ripple':
            return 'ripple2'
          case 'ripple2':
            return 'ripple'
          default:
            return 'long'
        }
      })
    }
    /** @param {KeyboardEvent} ev */
    function onKeyboardDown(ev) {
      if (ev.code === 'Enter' || ev.code === 'Space') {
        onRipple(ev)
      }
    }
    /** @param {KeyboardEvent | MouseEvent} ev */
    function releaseRipple(ev) {
      if ((ev.type === 'keyup' && ev.code === 'Enter') || ev.code === 'Space') {
        setState((s: RippleState) => {
          switch (s) {
            case 'long':
            case 'ripple2':
              return 'ripple'
            case 'ripple':
              return 'ripple2'
            default:
              return 'hidden2'
          }
        })
      } else if (ev.type === 'mouseup') {
        setState((s) => {
          switch (s) {
            case 'long':
            case 'ripple2':
              return 'ripple'
            case 'ripple':
              return 'ripple2'
            default:
              return 'hidden'
          }
        })
      }
    }

    anchorNode.addEventListener('mousedown', onRipple)
    anchorNode.addEventListener('keydown', onKeyboardDown)
    anchorNode.addEventListener('focus', onFocus)
    anchorNode.addEventListener('blur', onBlur)

    anchorNode.addEventListener('keyup', releaseRipple)
    window.addEventListener('mouseup', releaseRipple, true)
    return () => {
      anchorNode.removeEventListener('mousedown', onRipple)
      anchorNode.removeEventListener('keydown', onKeyboardDown)
      anchorNode.removeEventListener('focus', onFocus)
      anchorNode.removeEventListener('blur', onBlur)

      anchorNode.removeEventListener('keyup', releaseRipple)
      window.removeEventListener('mouseup', releaseRipple, true)
    }
  }, [anchor])

  return (
    <StyledNode ref={ref} className={classNames('ripple', className)}>
      <AnimatePresence>
        <motion.div
          variants={rippleVariants}
          initial='hidden'
          animate={state}
          style={{
            width: size,
            height: size,
            left: pos[0],
            top: pos[1],
          }}
          onAnimationComplete={() => {
            if (state === 'focus') return setState('focus2')
            if (state === 'focus2') return setState('focus')
            if (['ripple', 'ripple2'].includes(state))
              return setState('hidden2')
          }}
        />
      </AnimatePresence>
    </StyledNode>
  )
}

export default Ripple
