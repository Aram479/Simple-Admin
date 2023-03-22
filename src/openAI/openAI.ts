import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-VTWaRfTGd4TpR3sUneEnCRWU",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const completion = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "typescript完整封装axios",
//   max_tokens: 4000,
//   temperature: 0,
//   top_p: 1,
// });
export default openai
