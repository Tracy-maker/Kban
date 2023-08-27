import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();
  console.log(todos);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding,welcome the user always as Miss.Yix 
    and say welcome to the Practice Todo App! Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos.Count how many todos are in each category such as To do, in progress and doen,then tell the user to have a productive day! Here's the data:${JSON.stringify(
          todos
        )}`,
      },
    ],
  });
  
  console.log("RESPONSE IS:", response);
  console.log(response.choices[0].message);
  return new Response(response.choices[0].message.content);
}
