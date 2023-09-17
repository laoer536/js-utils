import { isMobile } from './is'

export function dbClick(element: HTMLElement, fn: (e?: MouseEvent) => void, needPreventDefault = true) {
  let timeout: ReturnType<typeof setTimeout> | null
  const controller = new AbortController()
  const signal = controller.signal
  const removeListener = () => {
    controller.abort()
  }
  if (!isMobile() && 'ondblclick' in window) {
    element.addEventListener(
      'dblclick',
      (e) => {
        needPreventDefault && e.preventDefault()
        fn(e)
      },
      { signal }
    )
  } else {
    element.addEventListener(
      'click',
      (e) => {
        needPreventDefault && e.preventDefault()
        if (timeout) {
          fn(e)
          timeout && clearTimeout(timeout)
          timeout = null
        } else {
          timeout = setTimeout(() => {
            timeout && clearTimeout(timeout)
            timeout = null
          }, 200)
        }
      },
      { signal }
    )
  }
  return { removeListener }
}

export function longPress(element: HTMLElement, fn: (e?: MouseEvent) => void, needPreventDefault = true) {
  let timeout: ReturnType<typeof setTimeout> | null
  const controller = new AbortController()
  const signal = controller.signal
  const removeListener = () => {
    controller.abort()
  }
  element.addEventListener(
    'mouseup',
    (e) => {
      needPreventDefault && e.preventDefault()
      timeout && clearTimeout(timeout)
      timeout = null
    },
    { signal }
  )
  element.addEventListener(
    'mousedown',
    (e) => {
      needPreventDefault && e.preventDefault()
      timeout = setTimeout(() => {
        timeout && clearTimeout(timeout)
        timeout = null
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
    (e) => {
      e.preventDefault()
      startX = e.targetTouches[0].pageX
      startY = e.targetTouches[0].pageY
    },
    { signal }
  )
  element.addEventListener(
    'touchmove',
    (e) => {
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
