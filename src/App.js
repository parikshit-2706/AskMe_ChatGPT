import "./styles.css";

// chat gpt api key  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
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

export default function App() {
  const configuration = new Configuration({
    apiKey: "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"
  });

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getResponse = async () => {
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 120,
      temperature: 0
    });

    console.log(response.data);
    setAnswer(response.data.choices[0].text);
  };

  const handleClick = () => {
    getResponse();
  };

  return (
    <div className="App">
      lets try ChatGPT api.
      <br />
      <input
        placeholder="Ask ChatGpt.."
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <button onClick={handleClick}>Ask ChatGPT</button>
      <br />
      {answer}
    </div>
  );
}
