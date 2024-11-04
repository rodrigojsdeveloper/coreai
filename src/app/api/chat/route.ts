export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    const apiKey = process.env.GEMINI_API_KEY
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`

    const lastMessageContent = messages[messages.length - 1]?.content

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: lastMessageContent }],
          },
        ],
      }),
    })

    const data = await response.json()
    const aiResponse = data.candidates[0].content.parts[0].text

    return new Response(JSON.stringify({ content: aiResponse }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: 'Failed to process the message' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
