import { isMobile } from './is'

// eslint-disable-next-line @typescript-eslint/ban-types,no-unused-vars
export function dbclick(e: HTMLElement, fn: (e?: any) => void) {
  let timeout: ReturnType<typeof setTimeout> | null
  const controller = new AbortController()
  const signal = controller.signal
  const removeListener = () => {
    controller.abort()
  }
  if (!isMobile() && 'ondblclick' in window) {
    e.addEventListener('dblclick', fn, { signal })
  } else {
    e.addEventListener(
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
