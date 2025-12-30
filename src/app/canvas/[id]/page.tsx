import { db } from "@/db";
import { canvases } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

type CanvasPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CanvasPage({ params }: CanvasPageProps) {
  const { id } = await params;

  const canvas = await db.query.canvases.findFirst({
    where: eq(canvases.id, id),
  });

  if (!canvas) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 px-6 py-4">
        <h1 className="text-lg font-medium text-neutral-900">{canvas.title}</h1>
      </header>
      <main className="h-[calc(100vh-65px)]">{/* Empty canvas area */}</main>
    </div>
  );
}
