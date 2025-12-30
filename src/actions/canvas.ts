"use server";

import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { canvases } from "@/db/schema";

export async function createCanvas() {
  const id = nanoid();

  await db.insert(canvases).values({
    id,
    title: "Untitled Canvas",
  });

  redirect(`/canvas/${id}`);
}
