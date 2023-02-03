import { expect, test, describe } from 'vitest'
import { domFns } from '../src'

describe('js-utils-domFns', () => {
  /**
   * @vitest-environment happy-dom
   */
  test('getUrlSearchParams', () => {
    expect(domFns.getUrlSearchParams('https://github.com/laoer536/js-utils?name=laoer536&age=100')).toEqual({
      name: 'laoer536',
      age: '100',
    })
  })
})
