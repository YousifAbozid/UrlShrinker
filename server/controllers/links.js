import UrlSchema from '../models/ShortUrl.js'

export const getLinks = async (request, response) => {
    try {
        const links = await UrlSchema.find()

        response.status(200).json(links)
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

export const postLink = async (request, response) => {
    const body = request.body
    
    try {
        const postUrl = await UrlSchema.create(body)

        response.status(201).json(postUrl)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}