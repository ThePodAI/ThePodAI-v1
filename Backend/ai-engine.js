import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organizationId: process.env.OPENAI_ORG_ID
})

const openaiApi = new OpenAIApi(configuration)
const response = await openaiApi.listEngines()
