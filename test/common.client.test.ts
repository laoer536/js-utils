import { expect, test, describe } from 'vitest'
import { useInClient } from '../src/common'

describe('js-utils-common-client', () => {
  /**
   * @vitest-environment happy-dom
   */
  test('useInClient', () => {
    expect(() => useInClient()).not.toThrow('This function must use in client')
  })
})
