import Link from "next/link";
import { deleteReservation } from "@/lib/reservationactions";

type Reservation = {
  id?: string;
  name?: string;
  numtel?: string;
  number?: number;
  heure?: string;
  supplementaire?: string;
};

type ReservationCardProps = {
  reservation: Reservation;
  href?: string;
  showDelete?: boolean;
};

export default function WikiCard({
  reservation,
  href,
  showDelete,
}: ReservationCardProps) {
  const cardContent = (
    <div className="flex flex-row p-6 gap-6 h-full items-start">
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            {reservation.name}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs font-medium text-slate-500 italic">
            à {reservation.heure}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition mb-2 break-words">
          {reservation.numtel}
        </h2>
        <p className="text-slate-600 line-clamp-2 leading-relaxed">
          <span>Pour</span> {reservation.number}
        </p>
      </div>
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
          action={deleteReservation}
          className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <input type="hidden" name="id" value={reservation.id} />
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
