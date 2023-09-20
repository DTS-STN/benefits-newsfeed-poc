import { IoSearch } from "react-icons/io5";
import Card, { NewsItem } from "@/components/Card";
import Filter from "@/components/Filter";
import { useTranslation } from "@/app/i18n";
import Paginate from "@/components/Paginate";

type PageProps = {
  params: {
    lang: string;
  };
};

export default async function Home({ params }: PageProps) {
  const { lang } = params;

  const { t } = await useTranslation(lang, "common");

  const res = await fetch("http://localhost:3000/api");
  const data = await res.json();

  const programs: Set<string> = new Set(
    data.map(({ program }: NewsItem) => program)
  );

  return (
    <main className="py-10 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
        <Filter lang={lang} programs={programs} />
        <section className="grow">
          <h1 className="text-4xl font-semibold mb-8">{t("main.h1")}</h1>
          <div className="flex mb-5">
            <label htmlFor="search-benefit" className="sr-only">
              {t("main.search-benefit")}
            </label>
            <input
              id="search-benefit"
              placeholder={t("main.search-benefit")}
              className="border px-3 py-1.5 outline-none w-full"
            ></input>
            <button className="bg-primary self-stretch px-3 py-1.5 text-[20px] text-white">
              <IoSearch />
            </button>
          </div>
          <Paginate data={data} />
        </section>
      </div>
    </main>
  );
}
