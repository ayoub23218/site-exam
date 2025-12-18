import { db } from "@/db";
import { wikiTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function WikiPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await db.select().from(wikiTable).where(eq(wikiTable.id, id));
  const article = result[0];

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white p-8 font-serif">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/wiki"
          className="text-sm text-blue-600 hover:underline mb-6 block font-sans"
        >
          ← Retour à l'index
        </Link>

        <header className="border-b pb-4 mb-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-2 break-words">
            {article.title}
          </h1>
          <div className="text-sm text-slate-500 font-sans flex items-center gap-4">
            <span className="bg-slate-100 px-2 py-1 rounded">
              Catégorie : {article.category}
            </span>
            <span>
              Mis à jour le {article.lastUpdated?.toLocaleDateString()}
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 font-sans">
          <article className="md:col-span-7 text-lg text-slate-800 leading-8 whitespace-pre-wrap break-words">
            <p className="font-bold mb-6 text-xl text-slate-900 italic">
              {article.summary}
            </p>
            {article.content}
          </article>
          {article.imageUrl && (
            <aside className="md:col-span-3 w-full">
              <div className="bg-slate-50 border p-4 rounded-lg sticky">
                <div className="aspect-square bg-slate-200 rounded mb-3 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-center text-slate-500 italic break-words">
                  {article.title}
                </p>
              </div>
            </aside>
          )}
        </div>
      </div>
    </main>
  );
}
