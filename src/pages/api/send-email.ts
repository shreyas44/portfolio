import { NextApiHandler } from "next"

const handler: NextApiHandler = (request, response) => {
  return response.status(200).json({ status: "success", errors: null })
}

export default handler
