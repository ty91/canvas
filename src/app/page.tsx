import { Header } from "@/components/layout/Header";
import { CanvasGrid } from "@/components/canvas/CanvasGrid";
import { NewCanvasButton } from "@/components/canvas/NewCanvasButton";
import { BfcacheRefresh } from "@/components/common/BfcacheRefresh";
import { db } from "@/db";
import { canvases } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function Home() {
  const allCanvases = await db.query.canvases.findMany({
    orderBy: [desc(canvases.updatedAt)],
  });

  return (
    <div className="min-h-screen bg-white">
      <BfcacheRefresh />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <Header title="Canvases" action={<NewCanvasButton />} />
        <section className="mt-8">
          <CanvasGrid canvases={allCanvases} />
        </section>
      </main>
    </div>
  );
}
