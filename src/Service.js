import fetch from 'isomorphic-fetch'
const baserUrl = 'http://www.vam.ac.uk/api/json/museumobject/search?'

export const Service = {
  fetch(opt = {}) {
    const url = `${baserUrl}objectnamesearch=${opt.query}&results=10`

    return fetch(url)
      .then(response => {
        if (response.status >= 400) {
          throw new Error(`Bad response from server on ${url}`)
        }
        return response.json()
      })
  },
}
