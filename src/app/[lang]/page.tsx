import { IoSearch } from "react-icons/io5";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { useTranslation } from "@/app/i18n";

type PageProps = {
  params: {
    lang: string;
  };
};

export default async function Home({ params }: PageProps) {
  const { lang } = params;

  const { t } = await useTranslation(lang, "common");

  return (
    <main className="py-10 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
        <Filter />
        <section className="grow">
          <h1 className="text-4xl font-semibold mb-8">{t("main.h1")}</h1>
          <div className="flex mb-5">
            <label htmlFor="search-benefit" className="sr-only">
              Search by benefit name or source
            </label>
            <input
              id="search-benefit"
              placeholder="Search by benefit name or source"
              className="border px-3 py-1.5 outline-none w-full"
            ></input>
            <button className="bg-primary self-stretch px-3 py-1.5 text-[20px] text-white">
              <IoSearch />
            </button>
          </div>
          <div className="bg-white px-2 md:px-10 py-5 divide-y space-y-4">
            <Card tag="NEW" />
            <Card tag="NEW" />
            <Card tag="UPDATED" />
          </div>
        </section>
      </div>
    </main>
  );
}
