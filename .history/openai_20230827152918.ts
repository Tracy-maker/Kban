import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
});

const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Hello!"}],
  });
  console.log(chatCompletion.choices[0].message);

export default openai;
