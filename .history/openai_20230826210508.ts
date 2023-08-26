import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-vsGceRH4hwji407dqvTjn6Tw",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();