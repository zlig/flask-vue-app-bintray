import axios from 'axios'

export function fetchHello() {
  return axios.get('/hello')
}
