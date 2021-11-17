import { DialogContent, DialogOverlay } from '@reach/dialog'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { animated, useSpring, useTransition } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import styled, { css } from 'styled-components'

const AnimatedDialogOverlay = animated(DialogOverlay)
const StyledDialogOverlay = styled(AnimatedDialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: 999;
    background-color: transparent;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.8);
  }
`

const AnimatedDialogContent = animated(DialogContent)
// destructure to not pass custom props to Dialog DOM element
const StyledDialogContent = styled(
  ({ width, border, borderRadius, boxShadow, backColor, minHeight, maxHeight, padding, mobile, isOpen, ...rest }) => (
    <AnimatedDialogContent {...rest} />
  )
).attrs({
  'aria-label': 'dialog',
})`
  overflow-y: ${({ mobile }) => (mobile ? 'scroll' : 'hidden')};

  &[data-reach-dialog-content] {
    margin: 0 0 2rem 0;
    background-color: ${({ backColor }) => (backColor ? backColor : 'var(--primary)')};
    // box-shadow: 2px 3px 15px var(--secondary-opacity);
    box-shadow: ${({ boxShadow }) => (boxShadow ? boxShadow : '3px 3px 12px 2px var(--secondary)')};
    padding: ${({ padding }) => (padding ? padding : '0px')};
    width: ${({ mobile, width }) => (mobile ? '90%' : width ? width : '420px')};
    overflow-y: ${({ mobile }) => (mobile ? 'scroll' : 'hidden')};
    overflow-x: hidden;

    align-self: ${({ mobile }) => (mobile ? 'center' : 'center')};

    // max-width: 420px;
    ${({ maxHeight }) =>
      maxHeight &&
      css`
        max-height: ${maxHeight}vh;
      `}
    ${({ minHeight }) =>
      minHeight &&
      css`
        min-height: ${minHeight}vh;
      `}
    display: flex;
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '12px')};
    position: relative;
  }
`

interface ModalProps {
  isOpen: boolean
  onDismiss: () => void
  width?: string
  minHeight?: number | false
  maxHeight?: number
  padding?: string
  border?: string
  borderRadius?: string
  backColor?: string
  boxShadow?: string
  initialFocusRef?: React.RefObject<any>
  children?: React.ReactNode
}

export default function Modal({
  isOpen,
  onDismiss,
  width,
  minHeight = false,
  maxHeight = 90,
  padding,
  border,
  borderRadius,
  backColor,
  boxShadow,
  initialFocusRef,
  children,
}: ModalProps) {
  const fadeTransition = useTransition(isOpen, null, {
    config: { duration: 200 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const [{ y }, set] = useSpring(() => ({ y: 0, config: { mass: 1, tension: 210, friction: 20 } }))
  const bind = useGesture({
    onDrag: (state) => {
      set({
        y: state.down ? state.movement[1] : 0,
      })
      if (state.movement[1] > 300 || (state.velocity > 3 && state.direction[1] > 0)) {
        onDismiss()
      }
    },
  })

  return (
    <>
      {fadeTransition.map(
        ({ item, key, props }) =>
          item && (
            <StyledDialogOverlay
              key={key}
              style={props}
              onDismiss={onDismiss}
              initialFocusRef={initialFocusRef}
              unstable_lockFocusAcrossFrames={false}
            >
              <StyledDialogContent
                {...(isMobile
                  ? {
                      ...bind(),
                      style: { transform: y.interpolate((y) => `translateY(${(y as number) > 0 ? y : 0}px)`) },
                    }
                  : {})}
                aria-label="dialog content"
                width={width}
                minHeight={minHeight}
                maxHeight={maxHeight}
                padding={padding}
                border={border}
                borderRadius={borderRadius}
                backColor={backColor}
                boxShadow={boxShadow}
                mobile={isMobile}
              >
                {/* prevents the automatic focusing of inputs on mobile by the reach dialog */}
                {!initialFocusRef && isMobile ? <div tabIndex={1} /> : null}
                {children}
              </StyledDialogContent>
            </StyledDialogOverlay>
          )
      )}
    </>
  )
}
