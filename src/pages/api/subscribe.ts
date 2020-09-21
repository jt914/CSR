import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"

export {}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // 1. Destructure the fields from the request body.
  const {
    email,
    firstname,
    lastname,
    status,
    number,
    size,
  }: {
    email: string
    firstname: string
    lastname: string
    status: string
    number: string
    size: string
  } = req.body

  // 2. Throw an error if any fields arent supplied
  if (!email) {
    return res.status(400).json({ error: "Email is required" })
  }
  if (!firstname) {
    return res.status(400).json({ error: "First name is required" })
  }
  if (!lastname) {
    return res.status(400).json({ error: "Last name is required" })
  }
  if (!status) {
    return res.status(400).json({ error: "Member status is required" })
  }
  if (!number) {
    return res.status(400).json({ error: "Phone number is required" })
  }
  if (!size) {
    return res.status(400).json({ error: "T-Shirt size is required" })
  }

  try {
    // 3. Fetch the environment variables.
    const LIST_ID: string = process.env.MAILCHIMP_LIST_ID
    const API_KEY: string = process.env.MAILCHIMP_API_KEY
    // 4. API keys are in the form <key>-us3.
    const DATACENTER: string = API_KEY.split("-")[1]

    // 5. The status of 'subscribed' is equivalent to a double opt-in.
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstname,
        LNAME: lastname,
        MEMBER: status,
        PHONE: number,
        TSHIRT: size,
      },
    }

    // 6. Send a POST request to Mailchimp.
    const response = await axios.post(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      data,
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error registering. Please email us at contact@wtw.dev.`,
      })
    }

    // 7. If we made it this far, it was a success! 🎉
    return res.status(201).json({ error: "" })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
