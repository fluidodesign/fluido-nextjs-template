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
