import { useState } from "react";

export default function TextArea() {
  // text is the state variable, what it begins with 
  const [text, setText] = useState("");

  return (
    <textarea
      //uses text to initialize the value of the textarea
      // empty string
      value={text}
      // we are making this into a controlled component
      onChange={(e) => {
        // we are updating the state of the text, with value of text area
        // runs when any text is inputted
        const newText = e.target.value;
        setText(newText);
      }}
      className="textarea"
      placeholder="Enter your text here"
      spellCheck="false"
    />
  );
}
