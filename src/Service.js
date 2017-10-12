import fetch from 'isomorphic-fetch'
import isOptionCheked from './helpers/is-option-checked'

const baserUrl = 'http://www.vam.ac.uk/api/json/museumobject/search?'

export const Service = {
  fetch(opt = {}) {
    const imagesOption = isOptionCheked(opt.imagesOption)
    const url = `${baserUrl}objectnamesearch=${opt.query}&results=10&images=${imagesOption}`
    return fetch(url)
      .then(response => {
        if (response.status >= 400) {
          throw new Error(`Bad response from server on ${url}`)
        }
        return response.json()
      })
  },
}
