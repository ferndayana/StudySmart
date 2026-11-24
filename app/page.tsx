
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">YOUR GUIDE TO BETTER LEARNING</p>

        <h1>
          Study smarter.
          <br />
          Achieve more.
        </h1>

        <p className="description">
          Discover simple ways to improve your study habits,
          manage your time, and become a more productive student.
        </p>

        <Link href="/study-tips" className="button">
          Explore Study Tips →
        </Link>

        <p className="note">
          Small steps today. Better results tomorrow.
        </p>
      </section>

      <section className="features">
        <p className="eyebrow">BUILD BETTER HABITS</p>
        <h2>Start with the essentials.</h2>

        <div className="card-grid">
          <article className="card">
            <span>01</span>
            <h3>Manage Your Time</h3>
            <p>Plan your schedule and organize your school activities.</p>
          </article>

          <article className="card">
            <span>02</span>
            <h3>Stay Focused</h3>
            <p>Avoid distractions and create a comfortable study space.</p>
          </article>

          <article className="card">
            <span>03</span>
            <h3>Study Effectively</h3>
            <p>Use helpful study techniques to understand your lessons.</p>
          </article>
        </div>
      </section>

      <section className="bottom">
        <h2>Ready to improve your study routine?</h2>
        <p>Explore practical tips you can start applying today.</p>
        <Link href="/study-tips" className="button">
          Learn More →
        </Link>
      </section>
    </main>
  );
}
