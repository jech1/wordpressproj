export default function TextArea() {
  return (
    <textarea
      onChange={(e) => {
        console.log("I'm changing!");
        // e. target is the text area, we are getting whats written in there
        console.log(e.target.value);
      }}
      className="textarea"
      placeholder="Enter your text here"
      spellCheck="false"
    />
  );
}
