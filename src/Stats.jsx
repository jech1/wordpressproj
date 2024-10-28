export default function Stats({ numberOfCharacters }) {
  // making this reusable component
  return (
    <section className="stats">
      <Stat number={0} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={280} label="Instagram" />
      <Stat number={2200} label="Facebook" />
    </section>
  );
}

//making new component for the stats
function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
