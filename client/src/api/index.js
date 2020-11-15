import axios from 'axios'

const url = '/links'

export const fetchLinks = () => axios.get(url)
export const createLink = (newLink) => axios.post(url, newLink)