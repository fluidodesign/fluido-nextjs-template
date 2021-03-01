import { useRipple } from 'app-hooks/effects/ripple'
import { forwardRef } from 'react'
import styled from 'styled-components'

interface AvatarProps {
  picture?: string
  name?: string
  size?: number
  className?: string
  [key: string]: any
}

const StyledButton = styled.button`
  position: relative;
  display: flex;
  flex: 0 0 fit-content;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: none;
  background-color: var(--secondary);
  color: var(--on-secondary);
  border-radius: 99999999px;
  overflow: hidden;
  outline: none;
  cursor: pointer;

  & img {
    display: block;
    object-fit: cover;
  }
`

const Avatar = forwardRef<HTMLButtonElement, AvatarProps>(
  ({ picture, name = '', size = 48, className, ...props }, fRef) => {
    const { anchor } = useRipple({
      toCenter: true,
      smallSize: true,
    })

    const handleRef = (node: HTMLButtonElement) => {
      if (fRef) {
        if (typeof fRef === 'function') {
          fRef(node)
        } else {
          fRef.current = node
        }
      }
      if (anchor) {
        anchor.current = node
      }
    }

    return (
      <StyledButton ref={handleRef} className={className} {...props}>
        <img
          draggable='false'
          width={size + 'px'}
          height={size + 'px'}
          src={
            picture ||
            `https://ui-avatars.com/api/?name=${name}&background=88d0ff&color=fff&size=${+size}`
          }
          alt={name}
          onError={(ev) => {
            const el = ev.target as HTMLImageElement
            el.src = '/images/fallback-avatar.jpg'
          }}
        />
      </StyledButton>
    )
  },
)

export default Avatar