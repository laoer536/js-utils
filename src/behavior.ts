import { isMobile } from './is'

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
          clearTimeout(timeout)
          timeout = null
        } else {
          timeout = setTimeout(() => {
            clearTimeout(timeout as ReturnType<typeof setTimeout>)
            timeout = null
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
      timeout && clearTimeout(timeout)
    },
    { signal }
  )
  element.addEventListener(
    'mousedown',
    (e) => {
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
