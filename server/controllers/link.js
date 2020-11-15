import UrlSchema from '../models/ShortUrl.js'

export const getLink = async (request, response) => {
    const short = request.params
    
    try {
        const link = await UrlSchema.findOne({ short: short.short })

        link.clicks++
        link.save()

        response.redirect(link.full)
    } catch (error) {
        console.log('failed')
        response.status(404).json({ message: error.message })
    }
}