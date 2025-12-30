import type { Canvas } from "@/types/canvas";
import { CanvasCard } from "./CanvasCard";

type CanvasGridProps = {
  canvases: Canvas[];
};

export function CanvasGrid({ canvases }: CanvasGridProps) {
  if (canvases.length === 0) {
    return (
      <div className="flex min-h-[200px] items-center justify-center border border-dashed border-neutral-300">
        <p className="text-sm text-neutral-500">No canvases yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {canvases.map((canvas) => (
        <CanvasCard key={canvas.id} canvas={canvas} />
      ))}
    </div>
  );
}
