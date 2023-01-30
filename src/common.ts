import { isFns } from './is'

export function useInClient() {
  if (!isFns.isWindow()) {
    throw 'This function must use in client'
  }
}
