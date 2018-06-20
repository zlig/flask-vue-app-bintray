import axios from 'axios'

export function fetchHi () {
  return axios.get('/hi')
}
