import { Header } from "@/components/layout/Header";
import { CanvasGrid } from "@/components/canvas/CanvasGrid";
import { mockCanvases } from "@/data/mockCanvases";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-6 py-12">
        <Header
          title="Canvases"
          action={
            <button className="border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white">
              New Canvas
            </button>
          }
        />
        <section className="mt-8">
          <CanvasGrid canvases={mockCanvases} />
        </section>
      </main>
    </div>
  );
}
