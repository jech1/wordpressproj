export default function Stats({ stats }) {
  // making this reusable component
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.instagramCharactersLeft} label="Instagram" />
      <Stat number={stats.facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

//making new component for the stats
function Stat({ label, number }) {
  return (
    <section className="stat">
      {/* added condition for color change */}
      <span
        className={`stat__number ${number < 0 ? `stat__number--limit` : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
