// const { payment } = require("../../models")

// exports.addPayment = async (req, res) => {
//     try {
//         const { ...dataPayment } = req.body

//         const data = await payment.create({
//             ...dataPayment,
//             attache: req.file.filename
//         })

//         paymentData = JSON.parse(JSON.stringify(data))

//         res.status(200).send({
//             status: "success",
//             payment: {
//                 ...paymentData,
//                 image: paymentData.image
//             }
//         })
//     } catch (error) {
//         res.send(500).send({
//             status: "failed",
//             message: "server error"
//         })
//     }
// }

// exports.getPayments = async (req, res) => {
//     try {
//         const data = await payment.findAll({
//             attributes: {
//                 exclude: ['createdAt', 'updatedAt']
//             }
//         })

//         res.status(200).send({
//             status: "success",
//             data
//         })

//     } catch (error) {
//         // console.log(error)
//         res.status(500).send({
//             status: "failed",
//             message: "server error"
//         })
//     }
// }

// exports.getPayment = async(req, res) => {
//     try {
//         const { id } = req.params

//         const data = await payment.findOne({
//             where: {
//                 id
//             },
//             attributes: {
//                 exclude: ['createdAt', 'updatedAt']
//             }
//         })

//         res.status(200).send({
//             status: "success",
//             data
//         })

//     } catch (error) {
//         res.status(500).send({
//             status: "failed",
//             message: "server error"
//         })
//     }
// }

// exports.deletePayment = async (req, res) => {
//     try {
//         const {id} = req.params

//         await payment.destroy({
//             where: {
//                 id
//             }
//         })

//         res.status(200).send({
//             status: "success",
//             message: `Delete payment id = ${id} Successfuly`
//         })

//     } catch (error) {
//         res.status(500).send({
//             status: "failed",
//             message: "server error"
//         })
//     }
// }

// exports.updatePayment = async (req, res) => {
//     try {
//         const { id } = req.params

//         const updatePayment = {
//             startDate: req?.body?.startDate,
//             dueDate: req?.body?.dueDate,
//             userId: req?.body?.userId,
//             attache: req?.file?.filename,
//             status: req?.body?.status
//         };


//         await payment.update(updatePayment, {
//             where: {
//                 id
//             }
//         })

//         const dataUpdated =  await payment.findOne({
//             where: {
//                 id
//             }
//         })

//         res.status(200).send({
//             status: "success",
//             message: `Update data payment id ${id} Successfuly`,
//             data: dataUpdated
//         })

//     } catch (error) {
//         console.log(error)
//         res.status(500).send({
//             status: "failed",
//             message: 'Server Error'
//         })
//     }
// }