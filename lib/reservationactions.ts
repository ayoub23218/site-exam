"use server";
import { db } from "@/db";
import { reservationTable } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function getReservations() {
  return await db.select().from(reservationTable).orderBy(asc(reservationTable.id));
}
export async function createReservation(formData: FormData) {
  await db.insert(reservationTable).values({
    name: String(formData.get("name")),
    numtel: String(formData.get("numtel")),
    number: Number(formData.get("number")),
    heure: String(formData.get("heure")),
    supplementaire: String(formData.get("supplementaire")),
  });
  revalidatePath("/");
  redirect("/Thanks");
}

export async function editReservation(formData: FormData) {
  const id = String(formData.get("id"));

  await db
    .update(reservationTable)
    .set({
      name: String(formData.get("name")),
      numtel: String(formData.get("numtel")),
      number: Number(formData.get("number")),
      heure: String(formData.get("heure")),
      supplementaire: String(formData.get("supplementaire")),
    })
    .where(eq(reservationTable.id, id));

  revalidatePath("/");
  revalidatePath(`/Booking/${id}`);
  redirect("/Booking");
}

export async function deleteReservation(formData: FormData) {
  const id = String(formData.get("id"));
  await db.delete(reservationTable).where(eq(reservationTable.id, id));
  
  revalidatePath("/");
  revalidatePath(`/Booking/${id}`);
  redirect("/Booking");
}

