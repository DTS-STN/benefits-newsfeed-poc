import { useTranslation } from "@/app/i18n";

type Props = {
  lang: string;
  programs: Set<string>;
};

export default async function Filter({ lang, programs }: Props) {
  const { t } = await useTranslation(lang, "common");

  return (
    <section className="md:mt-32 min-w-max">
      <h3 className="font-bold text-gray-600 mb-4 text-lg">
        {t("filter.heading")}
      </h3>
      <form className="flex flex-col items-start gap-4">
        {Array.from(programs).map((program) => (
          <label
            className="flex gap-2 text-sm font-semibold text-gray-900"
            key={program}
          >
            <input type="checkbox" name={program} id={program} />
            {program}
          </label>
        ))}
        <button className="font-semibold text-gray-600 outline outline-1 p-1 rounded-sm hover:text-gray-900">
          {t("filter.reset")}
        </button>
      </form>
    </section>
  );
}
