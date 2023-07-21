"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const game = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    return console.log("Le composant est démonté.");
  }, []);

  return (
    <div className="flex flex-col justify-center m-10 p-10">
      <Link href="/cv">CV</Link>
      <h1 className="text-center font-bold">Game</h1>
      <div>{number}</div>
      <button
        onClick={() => increment()}
        className="w-32 btn btn-outline btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => decrement()}
        className="mt-6 w-32 btn btn-outline btn-accent"
      >
        Decrement
      </button>
    </div>
  );
};

export default game;
