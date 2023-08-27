import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  temperature: 0.8,
  n: 1,
  stream: false,
  messages: [
    {
      role: "system",
      content:
        "When responding, welcome the user always as Miss Yix and say welcome to the Kban Todo App! Limit the response to 200 characters",
    },
    {
      role: "user",
      content: `Hi! How can I help you today? provide a summary of the following todos. Count how many todos are in each category such as to do, in progress and done, then tell the user to have a productive day! Here's the data:${JSON.stringify(
        todos
      )}`,
    },
  ],
});

const { data } = response;
console.log("DATA IS:", data);
console.log(data.choices[0].messages);

return NextResponse.json(data.choices[0].messages);
