import { expect, test, describe } from 'vitest'
import { isFns } from '../src'

describe('js-utils-isFns-client', () => {
  /**
   * @vitest-environment happy-dom
   */
  test('isServer isClient test', () => {
    expect(isFns.isServer).eq(false)
    expect(isFns.isClient).eq(true)
  })

  test('isElement test', () => {
    const element = document.createElement('div')
    expect(isFns.isElement(element)).eq(true)
    expect(isFns.isElement('isElement test')).eq(false)
  })

  test('isImageDom test', () => {
    const imgElement = document.createElement('img')
    const divElement = document.createElement('div')
    expect(isFns.isImageDom(imgElement)).eq(true)
    expect(isFns.isImageDom(divElement)).eq(false)
  })

  test('isTextarea test', () => {
    const imgElement = document.createElement('img')
    const textareaElement = document.createElement('textarea')
    expect(isFns.isTextarea(textareaElement)).eq(true)
    expect(isFns.isTextarea(imgElement)).eq(false)
  })

  test('isMobile test', () => {
    expect(isFns.isMobile()).eq(false)
  })

  test('isiOS test', () => {
    expect(isFns.isiOS()).eq(false)
  })

  test('isAndroid test', () => {
    expect(isFns.isAndroid()).eq(false)
  })

  test('isWechat test', () => {
    expect(isFns.isWechat()).eq(false)
  })

  test('isLine test', () => {
    expect(isFns.isLine()).eq(false)
  })

  test('isIOSWechat test', () => {
    expect(isFns.isIOSWechat()).eq(false)
  })

  test('isFacebook test', () => {
    expect(isFns.isFacebook()).eq(false)
  })

  test('isWhatsapp test', () => {
    expect(isFns.isWhatsapp()).eq(false)
  })

  test('isTwitter test', () => {
    expect(isFns.isTwitter()).eq(false)
  })

  test('isMac test', () => {
    expect(isFns.isMac()).eq(false)
  })

  test('isWindows test', () => {
    expect(isFns.isWin()).eq(true)
  })
})
