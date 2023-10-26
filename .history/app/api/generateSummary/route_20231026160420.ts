import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "When responding, welcome the user always as Mr. Mathias and day welcome to the Trello 2.0 App! Limit the response to 200 characters",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category (To Do, In Progress, Done), then tell the user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}}`,
      },
    ],
  });

  return NextResponse.json(response.choices[0].message);
}
