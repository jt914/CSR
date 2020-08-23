import axios from "axios"

export default async (req, res) => {
  const { email } = req.body

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY

    const DATACENTER = API_KEY.split("-")[1]

    const response = await axios.get(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${email}`,
      {
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )

    // Email is in use
    return res.status(200).json({
      valid: false,
    })
    // Email is available
  } catch (error) {
    return res.status(404).json({ valid: true })
  }
}
