import { useEffect, useState } from 'react'
import { fetchAPI } from './api-fetch'

export const joinStaticProps = (...fns: [() => any | any]) => {
  let config = {}
  if (typeof fns[fns.length - 1] === 'object') {
    config = fns.pop()
  }
  return async () => {
    const results = await Promise.all(fns.map((fn) => fn()))
    return {
      props: results.reduce((prev, cur) => Object.assign(prev, cur), {}),
      revalidate: 1,
      ...config,
    }
  }
}

export const getStaticFetch = (
  name: string,
  uri: RequestInfo,
  opt?: RequestInit,
) => {
  return async () => {
    const result = await fetchAPI(uri, opt)
    return { [name]: result }
  }
}

export const getStaticInternal = (name: string, fn: () => any) => {
  return () => ({ [name]: fn() })
}

export const promiseDelay = (time: number) => {
  return new Promise((res) => {
    setTimeout(res, time)
  })
}

export const simplifyId = (id: string) => {
  return (
    '#' +
    id
      .substring(id.length - 6)
      .toUpperCase()
      .padStart(6, '0')
  )
}

export const useMediaQuery = (query: string) => {
  const [val, setVal] = useState<boolean>(false)

  useEffect(() => {
    let media: MediaQueryList

    const handler = (ev: MediaQueryListEvent) => {
      setVal(ev.matches)
    }

    if (process.browser) {
      media = window.matchMedia(query)
      if (media.matches !== val) {
        setVal(media.matches)
      }

      media.addEventListener('change', handler)
    }
    return () => {
      if (media) {
        media.removeEventListener('change', handler)
        media = null
      }
    }
  }, [process.browser, query])

  return val
}
