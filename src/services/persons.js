import axios from 'axios'

const base_url = '/api/persons'

const getAll = () => {
  return axios.get(base_url).then(response => response.data)
}

const createPerson = ( newPerson ) => {
  return axios.post(base_url, newPerson).then(response => response.data)
}

const deletePerson = (personId) => {
  return axios.delete(`${base_url}/${personId}`)
    .then(response => {
      return response.data
    })
}

const updatePerson = (personId, person) => {
  return axios.put(`${base_url}/${personId}`, person)
    .then(response => {
      return response.data
    })
}



export default { getAll, createPerson, deletePerson, updatePerson }