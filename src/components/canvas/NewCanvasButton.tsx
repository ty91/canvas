"use client";

import { createCanvas } from "@/actions/canvas";

export function NewCanvasButton() {
  return (
    <button
      onClick={() => createCanvas()}
      className="border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
    >
      New Canvas
    </button>
  );
}
