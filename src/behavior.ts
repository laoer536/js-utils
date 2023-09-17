import { isMobile } from './is'
import { clearTheTimeout } from './common'

export function dbClick(element: HTMLElement, fn: (e?: MouseEvent) => void) {
  let timeout: ReturnType<typeof setTimeout> | null
  const controller = new AbortController()
  const signal = controller.signal
  const removeListener = () => {
    controller.abort()
  }
  if (!isMobile() && 'ondblclick' in window) {
    element.addEventListener('dblclick', fn, { signal })
  } else {
    element.addEventListener(
      'click',
      (e) => {
        if (timeout) {
          fn(e)
          clearTheTimeout(timeout)
        } else {
          timeout = setTimeout(() => {
            clearTheTimeout(timeout)
          }, 200)
        }
      },
      { signal }
    )
  }
  return { removeListener }
}

export function longPress(element: HTMLElement, fn: (e?: MouseEvent) => void) {
  let timeout: ReturnType<typeof setTimeout> | null
  const controller = new AbortController()
  const signal = controller.signal
  const removeListener = () => {
    controller.abort()
  }
  element.addEventListener(
    'mouseup',
    () => {
      clearTheTimeout(timeout)
    },
    { signal }
  )
  element.addEventListener(
    'mousedown',
    (e) => {
      timeout = setTimeout(() => {
        clearTheTimeout(timeout)
        fn(e)
      }, 200)
    },
    { signal }
  )
  return { removeListener }
}

export interface MoveDirectionH5Fn {
  toTop?: (e?: TouchEvent) => void
  toRight?: (e?: TouchEvent) => void
  toBottom?: (e?: TouchEvent) => void
  toLeft?: (e?: TouchEvent) => void
}
export function moveDirectionH5(element: HTMLElement, moveDirectionH5Fn: MoveDirectionH5Fn) {
  const { toTop, toRight, toBottom, toLeft } = moveDirectionH5Fn
  const controller = new AbortController()
  const signal = controller.signal
  const removeListener = () => {
    controller.abort()
  }
  let startX: number, startY: number, moveEndX: number, moveEndY: number, X: number, Y: number
  element.addEventListener(
    'touchstart',
    function (e) {
      e.preventDefault()
      startX = e.targetTouches[0].pageX
      startY = e.targetTouches[0].pageY
    },
    { signal }
  )
  element.addEventListener(
    'touchmove',
    function (e) {
      e.preventDefault()
      moveEndX = e.targetTouches[0].pageX
      moveEndY = e.targetTouches[0].pageY
      X = moveEndX - startX
      Y = moveEndY - startY
      if (Math.abs(X) > Math.abs(Y) && X > 0) {
        toRight && toRight(e)
      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
        toLeft && toLeft(e)
      } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
        toBottom && toBottom(e)
      } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
        toTop && toTop(e)
      } else {
        console.log('Failed to detect the sliding behavior in what direction.')
      }
    },
    { signal }
  )
  return { removeListener }
}
