
const quotes = [
  {
    quote: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
];

export default function MotivationPage() {
  return (
    <main className="motivation-page">
      <section className="page-hero">
        <p className="eyebrow">A LITTLE INSPIRATION</p>
        <h1>Stay Motivated!</h1>
        <p>
          A little encouragement can make a big difference.
          Keep going, one step at a time.
        </p>
      </section>

      <section className="motivation-section">
        <div className="quote-grid">
          {quotes.map((item, index) => (
            <article className="quote-card" key={index}>
              <span>“</span>
              <h2>{item.quote}</h2>
              <p>— {item.author}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

