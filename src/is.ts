import { useInClient } from './common'

declare global {
  interface Window {
    __wxjs_is_wkwebview?: unknown
  }
}

const toString = Object.prototype.toString

function is(
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

function isDef(val: unknown) {
  return typeof val === 'undefined'
}

function isUnDef(val: unknown) {
  return !isDef(val)
}

function isObject(val: unknown) {
  return val !== null && is(val, 'Object')
}

function isDate(val: unknown) {
  return is(val, 'Date')
}

function isNull(val: unknown) {
  return val === null
}

function isNumber(val: unknown) {
  return is(val, 'Number')
}

function isString(val: unknown) {
  return is(val, 'String')
}

function isFunction(val: unknown) {
  return typeof val === 'function'
}

function isPromise(val: unknown) {
  if (val instanceof Promise) {
    return is(val, 'Promise') && isFunction(val.then) && isFunction(val.catch)
  } else {
    return false
  }
}

function isBoolean(val: unknown) {
  return is(val, 'Boolean')
}

function isRegExp(val: unknown) {
  return is(val, 'RegExp')
}

function isArray(val: unknown) {
  return Boolean(val) && Array.isArray(val)
}

function isEmpty(val: object | unknown[] | Set<unknown> | Map<unknown, unknown>) {
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

const isServer = typeof window === 'undefined'

const isClient = typeof window !== 'undefined'
function isWindow() {
  return typeof window !== 'undefined' ? is(window, 'Window') || is(window, 'global') : false
}

function isElement(val: unknown) {
  if (val instanceof Element) {
    return !!val.tagName
  } else {
    return false
  }
}

function isImageDom(o: Element) {
  return o && ['IMAGE', 'IMG'].includes(o.tagName)
}

function isTextarea(element: Element) {
  return element !== null && element.tagName.toLowerCase() === 'textarea'
}

function isMobile() {
  useInClient()
  return !!navigator.userAgent?.match(
    // eslint-disable-next-line max-len
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
}

function isiOS() {
  useInClient()
  const u = navigator.userAgent
  // ios终端
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

function isAndroid() {
  useInClient()
  const u = navigator.userAgent.toLowerCase()
  return u.includes('android') || u.includes('adr')
}

function isWechat() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}

function isLine() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('line')
}

function isIOSWechat() {
  useInClient()
  return Boolean(window?.__wxjs_is_wkwebview)
}

// 判断是否在facebook内置浏览器
function isFacebook() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('facebookexternalhit')
}

// 判断是否在whatsapp内置浏览器
function isWhatsapp() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('whatsapp')
}

// 判断是否在twitter内置浏览器
function isTwitter() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('twitter')
}

function isMac() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return /Mac OS/i.test(ua)
}

function isWin() {
  useInClient()
  const ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('win64') > -1
}

export const isFns = {
  is,
  isDef,
  isUnDef,
  isObject,
  isDate,
  isNull,
  isNumber,
  isString,
  isFunction,
  isPromise,
  isBoolean,
  isRegExp,
  isArray,
  isEmpty,
  isServer,
  isClient,
  isWindow,
  isElement,
  isImageDom,
  isTextarea,
  isMobile,
  isiOS,
  isAndroid,
  isWechat,
  isLine,
  isIOSWechat,
  isFacebook,
  isWhatsapp,
  isTwitter,
  isMac,
  isWin,
}
