import Link from "next/link";
import Input from "./Input";
import TextArea from "./TextArea";

type ReservationData = {
  id?: string;
  name?: string;
  numtel?: string;
  number?: number;
  heure?: string;
  supplementaire?: string;
};

type ReservationFormProps = {
  action: (formData: FormData) => Promise<void>;
  initialData?: ReservationData;
  cancelHref: string;
};

export default function WikiForm(props: ReservationFormProps) {
  const isEdit = !!props.initialData;

  return (
    <form action={props.action} className="flex flex-col gap-6">
      {isEdit && (
        <input type="hidden" name="id" value={props.initialData?.id} />
      )}

      <Input
        label="Name"
        name="name"
        defaultValue={props.initialData?.name}
        required
        placeholder="Ex: Jean Du-pont"
        className={isEdit ? "font-serif text-lg" : ""}
      />
      <Input
        label="Numero de téléphone"
        name="numtel"
        defaultValue={props.initialData?.numtel}
        required
        placeholder="Votre numéro"
      />

      <Input
        label="Le nombre de personnes"
        name="number"
        defaultValue={props.initialData?.number}
        required
        placeholder="Combien serez vous"
      />

      <Input
        label="Lheure (jj/dd/yyyy)"
        name="heure"
        defaultValue={props.initialData?.heure}
        required
        placeholder="Combien serez vous"
      />

      <TextArea
        label="Supplementaire"
        name="supplementaire"
        defaultValue={props.initialData?.supplementaire}
        rows={3}
        placeholder="Commentaire à ajouter"
      />

      <div className="flex justify-between items-center pt-4 border-t">
        <Link
          href={props.cancelHref}
          className="text-gray-500 hover:text-black"
        >
          Annuler
        </Link>

        <button
          className={`px-6 py-2 rounded font-bold text-white transition ${
            isEdit
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {isEdit ? "Mettre à jour" : "Publier l'article"}
        </button>
      </div>
    </form>
  );
}
