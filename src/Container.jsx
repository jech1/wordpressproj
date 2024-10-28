import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");
  const numberOfCharacters = text.length;
  return (
    <main className="container">
      {/* we lifted the state up to the Container component so we can pass them */}
      <TextArea text={text} setText={setText} />
      <Stats numberOfCharacters={numberOfCharacters} />
    </main>
  );
}
