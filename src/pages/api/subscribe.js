import axios from "axios"

export default async (req, res) => {
  // 1. Destructure the email address from the request body.
  const {
    email,
    firstname,
    lastname,
    status,
    number,
    size,
    // , fname, lname, member, phone, tshirt
  } = req.body

  if (!email) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "Email is required" })
  }
  if (!firstname) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "First name is required" })
  }
  if (!lastname) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "Last name is required" })
  }
  if (!status) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "Member status is required" })
  }
  if (!number) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "Phone number is required" })
  }
  if (!size) {
    // 2. Throw an error if an email wasn't provided.
    return res.status(400).json({ error: "T-Shirt size is required" })
  }

  try {
    // 3. Fetch the environment variables.
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    // 4. API keys are in the form <key>-us3.
    const DATACENTER = API_KEY.split("-")[1]

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

    // 8. If we made it this far, it was a success! 🎉
    return res.status(201).json({ error: "" })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}
