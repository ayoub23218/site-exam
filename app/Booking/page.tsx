import { getReservations } from "@/lib/reservationactions";
import WikiCard from "@/Components/WikiCard";

export default async function ReservationHome() {
  const reservations = await getReservations();

  return (
    <main className="min-h-screen bg-slate-50 p-8 mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b pb-4">
          <div>
            <h1 className="text-4xl font-serif font-bold text-slate-900">
              Toutes les réservations
            </h1>
            <p className="text-slate-500 mt-2">
              Le meilleur est ici. Ciquer sur une réservation pour voir plus ou
              mettez votre souris dessus et supprimer en cliquant sur la croix
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {reservations.map((reservation) => (
            <WikiCard
              key={reservation.id}
              reservation={reservation}
              href={`/Booking/${reservation.id}
              `}
              showDelete={true}
            />
          ))}

          {reservations.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              Aucune réservation pour le moment...
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
