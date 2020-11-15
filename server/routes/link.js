import express from 'express'
import { getLink } from '../controllers/link.js'

const linksRoutes = express.Router()

linksRoutes.get('/:short', getLink)

export default linksRoutes