import Link from "next/link";
import { deleteWiki } from "@/lib/wikiactions";

type Wiki = {
  id: string;
  title: string;
  category: string;
  summary: string;
  imageUrl?: string | null;
};

type WikiCardProps = {
  wiki: Wiki;
  href?: string;
  showDelete?: boolean;
};

export default function WikiCard({ wiki, href, showDelete }: WikiCardProps) {
  const cardContent = (
    <div className="flex flex-row p-6 gap-6 h-full items-start">
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
          {wiki.category}
        </span>
        <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition mb-2 break-words">
          {wiki.title}
        </h2>
        <p className="text-slate-600 line-clamp-2 leading-relaxed">
          {wiki.summary}
        </p>
      </div>

      {wiki.imageUrl && (
        <div className="shrink-0 w-32 h-32 md:w-48 md:h-48 relative rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
          <img
            src={wiki.imageUrl}
            alt={wiki.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );

  const containerClasses =
    "group block bg-white rounded-xl shadow-sm hover:shadow-md transition border border-slate-200 overflow-hidden relative";

  return (
    <div className={containerClasses}>
      {href ? (
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        <div className="block h-full">{cardContent}</div>
      )}

      {showDelete && (
        <form
          action={deleteWiki}
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <input type="hidden" name="id" value={wiki.id} />
          <button
            type="submit"
            className="bg-white/90 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full p-1.5 shadow-sm border border-slate-200 transition"
            title="Supprimer cet article"
          >
            ✕
          </button>
        </form>
      )}
    </div>
  );
}
