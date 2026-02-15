import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const accessKey = process.env.WEB3FORMS_KEY || "967b785b-9181-478c-84e3-51da64a9f1d2"

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `Portfolio Contact from ${name}`,
        from_name: "Portfolio Website",
      }),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: result.message || "Failed to send message" },
      { status: 500 }
    )
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
