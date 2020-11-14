import express from 'express'
import { postLink, getLinks } from '../controllers/links.js'

const linksRoutes = express.Router()

linksRoutes.get('/', getLinks)
linksRoutes.post('/', postLink)

export default linksRoutes