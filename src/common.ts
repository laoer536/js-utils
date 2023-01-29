export function useInClient() {
  if (typeof window === 'undefined') {
    throw 'This function must use in client'
  }
}
