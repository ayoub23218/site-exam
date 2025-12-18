import Link from "next/link";
import Input from "./Input";
import TextArea from "./TextArea";

type WikiData = {
  id?: string;
  title?: string;
  category?: string;
  imageUrl?: string | null;
  summary?: string;
  author?: string;
  content?: string;
};

type WikiFormProps = {
  action: (formData: FormData) => Promise<void>;
  initialData?: WikiData;
  cancelHref: string;
};

export default function WikiForm(props: WikiFormProps) {
  const isEdit = !!props.initialData;

  return (
    <form action={props.action} className="flex flex-col gap-6">
      {isEdit && (
        <input type="hidden" name="id" value={props.initialData?.id} />
      )}

      <Input
        label="Titre"
        name="title"
        defaultValue={props.initialData?.title}
        required
        placeholder="Ex: La Pomme de Terre"
        className={isEdit ? "font-serif text-lg" : ""}
      />
      <Input
        label="Auteur"
        name="author"
        defaultValue={props.initialData?.author}
        required
        placeholder="Nom de l'auteur"
      />

      <Input
        label="Catégorie"
        name="category"
        defaultValue={props.initialData?.category}
        required
        placeholder="Ex: Botanique"
      />

      <Input
        label="URL Image"
        name="imageUrl"
        defaultValue={props.initialData?.imageUrl || ""}
        placeholder="https://..."
      />

      <TextArea
        label="Summary"
        name="summary"
        defaultValue={props.initialData?.summary}
        required
        rows={3}
        placeholder="Bref aperçu..."
        helperText="Sera affiché en haut de l'article et dans la liste."
      />

      <TextArea
        label="Contenu"
        name="content"
        defaultValue={props.initialData?.content}
        required
        rows={10}
        placeholder="Racontez tout..."
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
