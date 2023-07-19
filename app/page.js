"use client"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href="/">Home</Link>
      <Link href="/cv">CV</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/game">Game</Link>
      <Link href="NewCV">New CV</Link>
    </main>
  )
}
