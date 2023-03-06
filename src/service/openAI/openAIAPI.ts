import Openai from "@/openAI/openAI";

export function getGPTValue(keyword: string) {
  return Openai.createCompletion(
    {
      model: "text-davinci-003",
      prompt: keyword,
      max_tokens: 4000,
      temperature: 0,
      top_p: 1,
    },
    {
      headers: {
        Authorization:
          "Bearer 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",
      },
    }
  );
}

export function getChatGPTValue(keyword: string) {
  return Openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: keyword }],
      max_tokens: 4000,
      temperature: 0,
      top_p: 1,
    },
    {
      headers: {
        Authorization:
          "Bearer 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",
      },
    }
  );
}
