import { isMobile } from './is'
import { clearTheTimeout } from './common'

export function dbClick(element: HTMLElement, fn: (e?: any) => void) {
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

export function longPress(element: HTMLElement, fn: (e?: any) => void) {
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
