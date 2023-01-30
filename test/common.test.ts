import { expect, test, describe } from 'vitest'
import { useInClient } from '../src/common'

describe('js-utils-common', () => {
  test('useInClient', () => {
    expect(() => useInClient()).toThrow('This function must use in client')
  })
})
