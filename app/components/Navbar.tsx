
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        Study<span>Smart.</span>
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/study-tips">Study Tips</Link>
        <Link href="/motivation">Daily Motivation</Link>
         <Link href="/planner">My Planner</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}