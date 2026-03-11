"use client";

import React, { useState } from "react";

const RED_BRICKS_PER_M3 = 590;
const AAC_4_INCH_PER_M3 = 83;
const AAC_6_INCH_PER_M3 = 55;
const AAC_9_INCH_PER_M3 = 36;

const SAVINGS = [
  { pct: "25%", label: "Foundation Load", icon: "🏗️" },
  { pct: "15%", label: "Steel Usage", icon: "🔩" },
  { pct: "10%", label: "Cement Usage", icon: "🧱" },
  { pct: "35%", label: "Plastering & Labour", icon: "🪣" },
];

export default function AACCalculator() {
  const [volume, setVolume] = useState<number>(100);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(isNaN(val) || val < 0 ? 0 : val);
  };

  const redBricks = volume * RED_BRICKS_PER_M3;
  const aac4 = volume * AAC_4_INCH_PER_M3;
  const aac6 = volume * AAC_6_INCH_PER_M3;
  const aac9 = volume * AAC_9_INCH_PER_M3;

  return (
    <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-xl">
      {/* Volume Input */}
      <div className="px-8 pt-12 pb-10 border-b border-stone-100 text-center">
        <label
          htmlFor="calc-volume"
          className="block text-sm font-semibold uppercase tracking-widest text-stone-400 mb-8"
        >
          Construction Volume (m³)
        </label>
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() =>
              setVolume((v) => Math.max(0, Math.round((v - 10) * 10) / 10))
            }
            className="w-14 h-14 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 hover:border-stone-300 text-3xl font-light text-stone-600 transition-all duration-200 flex items-center justify-center"
            aria-label="Decrease"
          >
            −
          </button>
          <div className="relative">
            <input
              type="number"
              id="calc-volume"
              min="0"
              value={volume}
              onChange={handleVolumeChange}
              className="w-44 text-center text-5xl font-black text-stone-900 bg-transparent border-b-2 border-orange-500 focus:outline-none focus:border-orange-400 pb-2 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <button
            onClick={() => setVolume((v) => Math.round((v + 10) * 10) / 10)}
            className="w-14 h-14 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 hover:border-stone-300 text-3xl font-light text-stone-600 transition-all duration-200 flex items-center justify-center"
            aria-label="Increase"
          >
            +
          </button>
        </div>
        <p className="text-xs text-stone-400 mt-4">
          Adjust in steps of 10, or type your value directly
        </p>

        {/* Results */}
        <div className="bg-white p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Conventional Red Clay Bricks
          </div>
          <p className="text-5xl font-black text-red-500 tabular-nums mb-2">
            {redBricks.toLocaleString()}
          </p>
          <p className="text-stone-500 text-sm font-semibold uppercase tracking-wide">
            Bricks Required
          </p>
          <p className="text-stone-400 text-xs mt-2">
            ({RED_BRICKS_PER_M3} per m³)
          </p>
        </div>

        {/* AAC Blocks */}
        <div className="bg-stone-50 p-10 text-center mt-2">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            LEOCON AAC Blocks
          </div>
          <div className="grid grid-cols-3 gap-10 mb-4">
            {[
              { label: "4-Inch", count: aac4, perM3: AAC_4_INCH_PER_M3 },
              { label: "6-Inch", count: aac6, perM3: AAC_6_INCH_PER_M3 },
              { label: "9-Inch", count: aac9, perM3: AAC_9_INCH_PER_M3 },
            ].map(({ label, count, perM3 }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-orange-50 border border-orange-100 rounded-2xl p-3"
              >
                <p className="text-2xl font-black text-orange-600 tabular-nums">
                  {count.toLocaleString()}
                </p>
                <p className="text-[10px] text-orange-700 font-bold uppercase mt-1">
                  {label}
                </p>
                <p className="text-[9px] text-stone-400 mt-0.5">({perM3}/m³)</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-400 italic">
            Uniform. Fast. Precise.
          </p>
        </div>
      </div>

      {/* Guaranteed Savings */}
      <div className="px-8 pt-10 pb-12 border-t border-stone-100">
        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-stone-400 mb-8">
          Guaranteed Structural Savings vs. Conventional Brick
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SAVINGS.map(({ pct, label, icon }) => (
            <div
              key={label}
              className="bg-stone-50 border border-stone-100 rounded-2xl p-5 text-center hover:border-orange-200 hover:bg-orange-50 transition-all duration-300"
            >
              <span className="text-2xl">{icon}</span>
              <p className="text-4xl font-black text-stone-900 mt-2 mb-1">
                {pct}
              </p>
              <p className="text-[10px] text-stone-500 uppercase font-semibold tracking-wide leading-snug">
                Less {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
