import { useState } from "react";

export default function TextArea() {
  // text is the state variable, what it begins with
  const [text, setText] = useState("");
  // we are making this into a controlled component
  const handleChange = (e) => {
    // we are updating the state of the text, with value of text area
    // runs when any text is inputted
    console.log("onChange event fired");
    console.log(e.target.value);
    let newText = e.target.value;
    // in order to prevent script tags from being entered
    if (newText.includes("<script>")) {
      alert("You cannot use script tags");
      //this replaces the script tag with an empty string
      newText = newText.replace("<script>", "");
    }
    setText(newText);
  };

  return (
    <textarea
      //uses text to initialize the value of the textarea
      // empty string
      value={text}
      // we are making this into a controlled component
      onChange={handleChange}
      className="textarea"
      placeholder="Enter your text here"
      spellCheck="false"
    />
  );
}
