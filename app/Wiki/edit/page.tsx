import { getWikis } from "@/lib/wikiactions";
import WikiCard from "@/Components/WikiCard";

export default async function WikiHome() {
  const wikis = await getWikis();

  return (
    <main className="min-h-screen bg-slate-50 p-8 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b pb-4">
          <div>
            <h1 className="text-4xl font-serif font-bold text-slate-900">
              L'Encyclopédie
            </h1>
            <p className="text-slate-500 mt-2">Ici modifier ou supprimer</p>
          </div>
        </div>

        <div className="grid gap-6">
          {wikis.map((wiki) => (
            <WikiCard
              key={wiki.id}
              wiki={wiki}
              href={`/Wiki/edit/${wiki.id}`}
              showDelete={true}
            />
          ))}

          {wikis.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              L'encyclopédie est vide pour le moment...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
