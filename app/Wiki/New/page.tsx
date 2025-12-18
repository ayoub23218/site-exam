import WikiForm from "@/Components/WikiForm";
import { createWiki } from "@/lib/wikiactions";

export default function NewWikiPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 flex justify-center mt-15">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Nouvel Article</h1>

        <WikiForm action={createWiki} cancelHref="/" />
      </div>
    </main>
  );
}
