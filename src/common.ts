import { isWindow } from './is'

export function useInClient() {
  if (!isWindow()) {
    throw 'This function must use in client'
  }
}
