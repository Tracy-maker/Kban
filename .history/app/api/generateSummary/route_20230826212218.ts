import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature:0.8,
    n:1,
    stream:false,
    messages: [{ role: "user", content: "Hello!" }],
  });
  console.log(chatCompletion.choices[0].message);
}
