import Link from "next/link";


const tips = [
  {
    number: "01",
    title: "Create a Study Schedule",
    description:
      "Set a specific time for studying each subject. Organizing your schedule helps you finish tasks on time.",
  },
  {
    number: "02",
    title: "Use the Pomodoro Technique",
    description:
      "Study in focused intervals with short breaks in between to help maintain concentration.",
  },
  {
    number: "03",
    title: "Keep Your Study Space Organized",
    description:
      "Keep your learning materials neat and prepare everything you need before starting.",
  },
  {
    number: "04",
    title: "Avoid Distractions",
    description:
      "Put away unnecessary notifications and focus on one task at a time.",
  },
  {
    number: "05",
    title: "Take Regular Breaks",
    description:
      "Give yourself time to rest between study sessions.",
  },
  {
    number: "06",
    title: "Get Enough Sleep",
    description:
      "Maintain a healthy sleep routine to support learning and concentration.",
  },
];

export default function StudyTips() {
  return (
    <main className="tips-page">
      <section className="page-hero">
        <p className="eyebrow">LEARN • ORGANIZE • GROW</p>
        <h1>Study Tips for Every Student</h1>
        <p>
          Simple and practical habits that can make
          your learning experience better.
        </p>
      </section>

      <section className="tips-section">
        <div className="tips-grid">
          {tips.map((tip) => (
            <article className="tip-card" key={tip.number}>
              <span className="card-number">{tip.number}</span>
              <h2>{tip.title}</h2>
              <p>{tip.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom">
        <h2>Consistency is the key.</h2>
        <p>
          Start with one habit and gradually build a better study routine.
        </p>
        <Link href="/" className="button">
          Back to Home →
        </Link>
      </section>
    </main>
  );
}
