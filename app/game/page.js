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
        className="w-32 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Increment
      </button>
      <button
        onClick={() => decrement()}
        className="w-32 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default game;
