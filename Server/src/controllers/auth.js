const { user } = require("../../models")

const Joi = require("joi")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// const dotenv = require("dotenv")
// dotenv.config();

exports.register = async(req, res) => {
    try {
        const data = req.body

        const schema = Joi.object({
            fullName: Joi.string().min(5).required(),
            email: Joi.string().email().min(5).required(),
            password: Joi.string().min(5).required(),
            listAs: Joi.string().required(),
            gender: Joi.string().min(4).required(),
            phone: Joi.string().min(10).required(),
            address: Joi.string()
        })

        const { error } = schema.validate(data)

        if (error) {
            console.log(error)
            return res.status(400).send({
                status: "error",
                message: error.details[0].message
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const dataUserNew = await user.create({
            fullName: data.fullName,
            email: data.email,
            password: hashedPassword,
            listAs: "0",
            gender: data.gender,
            phone: data.phone,
            address: data.address
        })

        console.log(dataUserNew)

        const token = jwt.sign({ id: user.id }, process.env.TOKEN_KEY)

        res.status(201).send({
            status: "success",
            data: {
                fullName: data.fullName,
                email: data.email,
                password: hashedPassword,
                listAs: "0",
                gender: data.gender,
                phone: data.phone,
                address: data.address,
                token
            }
        })
    } catch (error) {
        // console.log(error)
        res.status(500).send({
            status: "failed",
            message: "Server Error"
        })
    }
}

exports.login = async(req, res) => {
    const data = req.body

    const schema = Joi.object({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().required()
    })

    const { error } = schema.validate(data)

    if (error) {
        return res.status(400).send({
            status: "error",
            message: error.details[0].message
        })
    }

    try {
        const userExist = await user.findOne({
            where: {
                email: data.email
            },
            attributes: {
                exclude: ["createdAt", "updateAt"]
            }
        })

        const isMatch = await bcrypt.compare(req.body.password, userExist.password)

        if (!isMatch) {
            return res.status(400).send({
                status: "failed",
                message: "email or password doesnt exist"
            })
        }

        const token = jwt.sign({ id: user.id }, process.env.TOKEN_KEY)

        res.status(200).send({
            status: "success",
            data: {
                id: userExist.id,
                fullName: userExist.fullName,
                email: userExist.email,
                listAs: userExist.listAs,
                token,
                idToken: user.id
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "Server Error"
        })
    }
}

exports.checkAuth = async (req, res) => {
  try {
      const id = req.user.id;

      const dataUser = await user.findOne({
          where: {
              id,
          },
          attributes: {
              exclude: ["createdAt", "updatedAt", "password"],
          },
      });
      if (!dataUser) {
          return res.status(404).send({
              status: "failed",
          });
      }

    res.send({
      status: "success...",
      data: {
        user: {
          id: dataUser.id,
          name: dataUser.name,
          email: dataUser.email,
        },
      },
    });
  } catch (error) {
    // console.log(error);
    res.status({
      status: "failed",
      message: "Server Error",
    });
  }
};