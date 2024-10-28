import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");

  // this is an object that we are passing to the Stats component.
  // makes it cleaner to pass
  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    instagramCharactersLeft: 220 - text.length,
    facebookCharactersLeft: 2200 - text.length,
  };

  return (
    <main className="container">
      {/* we lifted the state up to the Container component so we can pass them */}
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
