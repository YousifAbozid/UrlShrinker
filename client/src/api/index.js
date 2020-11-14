import axios from 'axios'

const url = 'http://localhost:3001/links'

export const fetchLinks = () => axios.get(url)
export const createLink = (newLink) => axios.post(url, newLink)