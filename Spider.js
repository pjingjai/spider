const cheerio = require('cheerio')
const axios = require('axios')

// const demo = async () => {
//     const queriedHTML = await axios.get('https://en.wikivoyage.org/wiki/Murmansk')
//     const $ = cheerio.load(queriedHTML.data)
//     return $.html()
// }

// module.exports = demo()

module.exports = class Spider {
    url = null
    parsedHtml = null
    constructor(url = 'https://en.wikivoyage.org') {
        this.url = url
    }

    loadHTMLFromURL = async () => {
        const response = await axios.get(this.url)
        return response.data
    }

    loadHTMLData = async () => {
        const responseHtml = await this.loadHTMLFromURL()
        this.parsedHtml = cheerio.load(responseHtml)
        console.log(this.parsedHtml.text())
    }

    getContent = (selector) => {
        return this.parsedHtml(selector).text()
    }

}
