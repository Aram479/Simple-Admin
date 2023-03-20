import Openai from "@/openAI/openAI";

export function getGPTValue(keyword: string) {
  return Openai.createCompletion(
    {
      model: "text-davinci-003",
      prompt: keyword,
      max_tokens: 4000,
      temperature: 0,
      top_p: 1,
    }
  );
}

export function getChatGPTValue(keyword: string) {
  return Openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo",
      max_tokens: 2048,
      top_p: 0,
      temperature: 0.2,
      frequency_penalty: 0,
      presence_penalty: 0,
      messages: [
        {
          role: "user",
          content: "1",
        },
      ],
      stream: true,
    },
    {
      headers: {
        Authorization:
          "Bearer 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",
      },
    }
  );
}
