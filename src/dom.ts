/**
 * @description Parsing the parameters attached to the url as objects.
 * @param url
 */
export function getUrlSearchParams(url: string) {
  const urlP = new URL(url)
  return Object.fromEntries(new URLSearchParams(urlP.search))
}

/* c8 ignore start */
interface ObserveElementP {
  /** @default The whole viewport */
  containerE?: Element
  observeE: Element | Element[]
  // eslint-disable-next-line @typescript-eslint/ban-types,no-unused-vars
  doSomeWhenIn?: (entry?: IntersectionObserverEntry) => void
  // eslint-disable-next-line no-unused-vars
  doSomeWhenOut?: (entry?: IntersectionObserverEntry) => void
  /** @default "0px 0px 0px 0px" */
  rootMargin?: string
}

/**
 * @description  'observeE' is in 'containerE', and 'containerE' is generally scrollable. 'containerE' can intersection observe the 'observeE' , when observeE come in(or out) containerE, you can do something by using 'doSomeWhenIn'.
 * @param observeElementP
 * @link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver
 */
export function intersectionObserverElement(observeElementP: ObserveElementP) {
  const { containerE, observeE, doSomeWhenIn, doSomeWhenOut, rootMargin } = observeElementP
  if (!observeE) {
    console.log('ObserveElement must be Element type.')
    return
  }
  const callBack: IntersectionObserverCallback = (entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        doSomeWhenIn && doSomeWhenIn(item)
      } else {
        doSomeWhenOut && doSomeWhenOut(item)
      }
    })
  }
  const Observer = new IntersectionObserver(callBack, { root: containerE, rootMargin })
  if (Array.isArray(observeE)) {
    observeE.forEach((e) => {
      Observer.observe(e)
    })
  } else {
    Observer.observe(observeE)
  }
}

interface DownloadFileP {
  file?: Blob | File
  fileUrl?: string
  fileName: string
}

/**
 * @description Single file download. notice:You must select one between 'file' and 'fileUrl'. Notice: when you use fileUrl to download, you should has 'a common origin', otherwise the filename setting will not take effect.
 * @param data
 */
export function downloadFile(data: DownloadFileP) {
  const { file, fileUrl, fileName } = data
  const a = document.createElement('a')
  a.style.display = 'none'
  a.download = fileName
  if (file && fileUrl) {
    throw "You must select one between 'file' and 'fileUrl' as incoming parameters"
  } else if (fileUrl) {
    a.href = fileUrl
  } else if (file) {
    a.href = URL.createObjectURL(file)
  } else {
    throw 'Can not find the file data.'
  }
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(a.href)
  document.body.removeChild(a)
}

/**
 * @description More responsive audio playback. And just use js code.
 * @param audioUrl
 */
export function playAudio(audioUrl: string): Promise<AudioBufferSourceNode> {
  return new Promise((resolve, reject) => {
    const audioCtx = new AudioContext()
    fetch(audioUrl)
      .then((res) => res.arrayBuffer())
      .then((arraybuffer) => audioCtx.decodeAudioData(arraybuffer))
      .then((audioBuffer) => {
        const audioBufferSourceNode = audioCtx.createBufferSource()
        audioBufferSourceNode.buffer = audioBuffer
        audioBufferSourceNode.connect(audioCtx.destination)
        resolve(audioBufferSourceNode)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * @description One-click copy.
 * @param text
 */
export function fastCopy(text: string) {
  const input = document.createElement('input')
  input.value = text
  input.setAttribute('readOnly', 'true')
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
/* c8 ignore stop */
