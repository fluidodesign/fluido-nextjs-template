import merge from 'deepmerge'

export const fetchAPI = async (url: RequestInfo, options: RequestInit = {}) => {
  return fetch(
    url,
    merge(
      {
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        redirect: 'follow',
      },
      options,
    ),
  ).then(async (response) => {
    const jsonType = /application\/json/g.test(
      response.headers.get('content-type'),
    )
    return Promise.all([
      response.status,
      jsonType ? response.json() : response.text(),
    ])
  })
}
