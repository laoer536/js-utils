import { isWindow } from './is'

export function useInClient() {
  if (!isWindow()) {
    throw 'This function must use in client'
  }
}

export function clearTheTimeout(timeout: ReturnType<typeof setTimeout> | null) {
  if (timeout) {
    clearTimeout(timeout)
  }
  timeout = null
}
