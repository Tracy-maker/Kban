import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature:0.8,
    n:1,
    stream:false,
    messages: [{ role: "system", content: `When responding,welcome the user always as Miss.Yix and say welcome to the Practice Todo App! Limit the response to 200 characters` }],
  });
  console.log(chatCompletion.choices[0].message);
}
