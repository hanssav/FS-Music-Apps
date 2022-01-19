const { artis } = require("../../models")

exports.addArtis = async (req, res) => {
    try {
        const dataArtis = req.body

        const createdArtis = await artis.create(dataArtis)

        res.status(200).send({
            status: "success",
            createdArtis
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getArtists = async (req, res) => {
    try {
        const artists = await artis.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            artists
        })

    } catch (error) {
        // console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getArtis = async(req, res) => {
    try {
        const { id } = req.params

        const data = await artis.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            data
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.deleteArtis = async (req, res) => {
    try {
        const {id} = req.params

        await artis.destroy({
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Delete artis id = ${id} Successfuly`
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.updateArtis = async (req, res) => {
    try {
        const { id } = req.params
        const updateArtis = req.body

        await artis.update(updateArtis, {
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Update data artis id ${id} Successfuly`,
            data: updateArtis
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: 'Server Error'
        })
    }
}
