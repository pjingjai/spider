const Spider = require('../Spider')

module.exports = {

    murmansk: async (req, res) => {
        try {
            const murmansk = new Spider('https://en.wikivoyage.org/wiki/Murmansk')
            const murmanskHTML = await murmansk.loadHTMLFromURL()
            res.send(murmanskHTML)
        }
        catch (e) {
            console.error('>>>murmansk~~~', e)
        }
    },

    murmanskCustom: async (req, res) => {
        try {
            const murmansk = new Spider('https://en.wikivoyage.org/wiki/Murmansk')
            await murmansk.loadHTMLData()
            res.send(murmansk.getContent('h3 ~ p'))
        }
        catch (e) {
            console.error('>>>murmanskCustom~~~', e)
        }
    }

}
