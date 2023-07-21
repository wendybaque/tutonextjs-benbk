"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-start">
        <Link href="/">LOGO</Link>
      </div>
      <div className="navbar-end">
        <div className="px-3">
          <Link href="/contact">Contact</Link>
        </div>
        <div className="px-3">
          <Link href="/cv">CV</Link>
        </div>
        <div className="px-3">
          <Link href="/game">Game</Link>
        </div>
        <div className="px-3">
          <Link href="/testApi">Test API</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;