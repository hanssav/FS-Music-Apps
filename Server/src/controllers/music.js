const { music } = require("../../models")

exports.addMusic = async (req, res) => {
    try {
        const { ...dataMusic } = req.body

        const data = await music.create({
            ...dataMusic,
            thumbnail: req.file.filename,
            // atthace: req.file.filename
        })

        musicData = JSON.parse(JSON.stringify(data))

        res.status(200).send({
            status: "success",
            payment: {
                ...musicData,
                image: musicData.image,
                // music: musicData.music
            }
        })
    } catch (error) {
        res.send(500).send({
            status: "failed",
            message: "server error"
        })
    }
}