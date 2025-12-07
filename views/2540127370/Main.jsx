"use client";

import { useEffect, useState, useMemo } from "react";

export default function Main() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    async function getFact() {
      try {
        const res = await fetch("https://catfact.ninja/fact");
        const data = await res.json();
        setFact(data.fact);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    getFact();
  }, []);

  const wordCount = useMemo(() => {
    return fact ? fact.split(" ").length : 0;
  }, [fact]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">🐱 Random Cat Fact</h1>

        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          {fact || "Loading..."}
        </p>

        <p className="text-sm text-gray-500">
          Word count: <strong>{wordCount}</strong>
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Refresh Fact
        </button>
      </div>
    </div>
  );
}
