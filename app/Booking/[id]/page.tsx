import WikiForm from "@/Components/WikiForm";
import { db } from "@/db";
import { reservationTable } from "@/db/schema";
import { editReservation, deleteReservation } from "@/lib/reservationactions";
import { eq } from "drizzle-orm";

export default async function EditWikiPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const result = await db
    .select()
    .from(reservationTable)
    .where(eq(reservationTable.id, id));
  const page = result[0];

  if (!page) return <div>Page introuvable</div>;

  return (
    <main className="min-h-screen bg-slate-50 p-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">
          Modifier la réservation de : {page.name}
        </h1>

        <WikiForm
          action={editReservation}
          initialData={page}
          cancelHref={`/Booking`}
        />
        <form
          action={deleteReservation}
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <input type="hidden" name="id" value={id} />
          <button
            type="submit"
            className="bg-white/90 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full p-1.5 shadow-sm border border-slate-200 transition"
            title="Supprimer cet article"
          >
            ✕
          </button>
        </form>
      </div>
    </main>
  );
}
