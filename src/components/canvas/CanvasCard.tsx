import Link from "next/link";

import type { Canvas } from "@/types/canvas";

type CanvasCardProps = {
  canvas: Canvas;
};

export function CanvasCard({ canvas }: CanvasCardProps) {
  return (
    <Link
      href={`/canvas/${canvas.id}`}
      className="group flex flex-col border border-neutral-200 bg-white transition-colors hover:border-neutral-400"
    >
      <div className="aspect-[4/3] w-full bg-neutral-50" />

      <div className="flex flex-col gap-1 border-t border-neutral-200 p-4">
        <h3 className="text-sm font-medium text-neutral-900 group-hover:text-black">
          {canvas.title}
        </h3>
        {canvas.description && (
          <p className="line-clamp-1 text-xs text-neutral-500">
            {canvas.description}
          </p>
        )}
        <time className="mt-2 text-xs text-neutral-400">
          {formatDate(canvas.updatedAt)}
        </time>
      </div>
    </Link>
  );
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
