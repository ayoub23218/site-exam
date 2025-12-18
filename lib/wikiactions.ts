"use server";
import { db } from "@/db";
import { wikiTable } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function getWikis() {
  return await db.select().from(wikiTable).orderBy(asc(wikiTable.id));
}
export async function createWiki(formData: FormData) {
  await db.insert(wikiTable).values({
    title: String(formData.get("title")),
    category: String(formData.get("category")),
    summary: String(formData.get("summary")),
    content: String(formData.get("content")),
    imageUrl: String(formData.get("imageUrl")) || null,
  });
  
  redirect((await headers()).get('referer') ?? '/')
}

export async function editWiki(formData: FormData) {
  const id = String(formData.get("id"));

  await db
    .update(wikiTable)
    .set({
      title: String(formData.get("title")),
      category: String(formData.get("category")),
      summary: String(formData.get("summary")),
      content: String(formData.get("content")),
      imageUrl: String(formData.get("imageUrl")) || null,
      lastUpdated: new Date(),
    })
    .where(eq(wikiTable.id, id));

  revalidatePath("/");
  revalidatePath(`/Wiki/Page/${id}`);
  redirect("/");
}

export async function deleteWiki(formData: FormData) {
  const id = String(formData.get("id"));
  await db.delete(wikiTable).where(eq(wikiTable.id, id));
  
  redirect((await headers()).get('referer') ?? '/')
}