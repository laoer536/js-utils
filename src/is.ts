import { useInClient } from './common'

declare global {
  interface Window {
    __wxjs_is_wkwebview?: unknown
  }
}

const toString = Object.prototype.toString

export function is(
  val: unknown,
  type:
    | 'Null'
    | 'Undefined'
    | 'String'
    | 'Boolean'
    | 'Number'
    | 'Array'
    | 'Function'
    | 'BigInt'
    | 'Object'
    | 'Date'
    | 'RegExp'
    | 'Symbol'
    | 'Promise'
    | 'Window'
    | 'global'
) {
  return toString.call(val) === `[object ${type}]`
}

export function isDef(val: unknown) {
  return typeof val === 'undefined'
}

export function isUnDef(val: unknown) {
  return !isDef(val)
}

export function isObject(val: unknown) {
  return val !== null && is(val, 'Object')
}

export function isDate(val: unknown) {
  return is(val, 'Date')
}

export function isNull(val: unknown) {
  return val === null
}

export function isNumber(val: unknown) {
  return is(val, 'Number')
}

export function isString(val: unknown) {
  return is(val, 'String')
}

export function isFunction(val: unknown) {
  return typeof val === 'function'
}

export function isPromise(val: unknown) {
  if (val instanceof Promise) {
    return is(val, 'Promise') && isFunction(val.then) && isFunction(val.catch)
  } else {
    return false
  }
}

export function isBoolean(val: unknown) {
  return is(val, 'Boolean')
}

export function isRegExp(val: unknown) {
  return is(val, 'RegExp')
}

export function isArray(val: unknown) {
  return Boolean(val) && Array.isArray(val)
}

export function isEmpty(val: object | unknown[] | Set<unknown> | Map<unknown, unknown>) {
  if (isArray(val)) {
    return (val as unknown[]).length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val as object).length === 0
  }
}

export const isServer = typeof window === 'undefined'

export const isClient = typeof window !== 'undefined'
export function isWindow() {
  return typeof window !== 'undefined' ? is(window, 'Window') || is(window, 'global') : false
}

export function isElement(val: unknown) {
  if (val instanceof Element) {
    return !!val.tagName
  } else {
    return false
  }
}

export function isImageDom(o: Element) {
  return o && ['IMAGE', 'IMG'].includes(o.tagName)
}

export function isTextarea(element: Element) {
  return element !== null && element.tagName.toLowerCase() === 'textarea'
}

export function isMobile() {
  useInClient()
  return !!navigator.userAgent?.match(
    // eslint-disable-next-line max-len
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
}

export function isiOS() {
  useInClient()
  const u = navigator.userAgent
  // ios终端
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export function isAndroid() {
  useInClient()
  const u = navigator.userAgent.toLowerCase()
  return u.includes('android') || u.includes('adr')
}

export function isWechat() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

export function isLine() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('line')
}

export function isIOSWechat() {
  useInClient()
  return Boolean(window?.__wxjs_is_wkwebview)
}

/**
 * 判断是否在facebook内置浏览器
 */
export function isFacebook() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('facebookexternalhit')
}

/**
 * 判断是否在whatsapp内置浏览器
 */
export function isWhatsapp() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('whatsapp')
}

/**
 * 判断是否在twitter内置浏览器
 */
export function isTwitter() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('twitter')
}

export function isMac() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return /Mac OS/i.test(ua)
}

export function isWin() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('win64') > -1
}
