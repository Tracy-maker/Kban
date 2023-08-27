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
      content: "Hi! How can I help you today?",
    },
  ],
});
console.log(chatCompletion.choices[0].message);

export default openai;
