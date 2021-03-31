import { NextApiHandler } from "next"
import nodemailer from "nodemailer"
import { validateName, validateEmail, validateBody } from "../../utils"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const handler: NextApiHandler = (request, response) => {
  const { body } = request

  const { isValid: isNameValid, message: nameMessage } = validateName(body.name)
  const { isValid: isEmailValid, message: emailMessage } = validateEmail(
    body.email
  )
  const { isValid: isBodyValid, message: bodyMessage } = validateBody(body.body)

  if (!isNameValid || !isEmailValid || !isBodyValid)
    return response.status(200).json({
      status: false,
      errors: {
        name: { isValid: isNameValid, message: nameMessage },
        email: { isValid: isEmailValid, message: emailMessage },
        body: { isValid: isBodyValid, message: bodyMessage },
      },
    })

  const data = {
    from: "shreyas.sreenivasa@gmail.com",
    sender: body.email,
    to: "shreyas.sreenivasa@gmail.com",
    subject: `Portfolio Contact - ${body.name}`,
    html: `<b>Name: </b>${body.name} <br> <b>Email: </b>${body.email} <br><br> ${body.body}`,
  }

  transporter.sendMail(data, (error, info) => {
    if (error) console.log(error)
    else console.log("Email sent!")
  })

  return response.status(200).json({ status: true })
}

export default handler
