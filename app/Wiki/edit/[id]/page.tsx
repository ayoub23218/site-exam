import WikiForm from "@/Components/WikiForm";
import { db } from "@/db";
import { wikiTable } from "@/db/schema";
import { editWiki } from "@/lib/wikiactions";
import { eq } from "drizzle-orm";

export default async function EditWikiPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const result = await db.select().from(wikiTable).where(eq(wikiTable.id, id));
  const page = result[0];

  if (!page) return <div>Page introuvable</div>;

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Modifier : {page.title}</h1>

        <WikiForm
          action={editWiki}
          initialData={page}
          cancelHref={`/Wiki/edit`}
        />
      </div>
    </main>
  );
}
