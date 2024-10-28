// here we are creating a functional component called Warning
// this component takes in a prop called warningText
// the prop is then displayed in a p tag with a class of warning
export default function Warning({ warningText }) {
  return <p className="warning">{warningText}</p>;
}
