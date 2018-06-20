import axios from 'axios'

export function fetchHi() {
  var data = axios.get('/hi').then(function(response) { return response.data })
  return data
}

export function fetchHiName (name) {
  var data = axios.get('/hi/' + name).then(function(response) { return response.data })
  return data
}
