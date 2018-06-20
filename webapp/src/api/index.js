import axios from 'axios'

export function fetchHi () {
  return axios.get('/hi')
}

export function fetchHiName (name) {
  return axios.get('/hi/' + name)
}
