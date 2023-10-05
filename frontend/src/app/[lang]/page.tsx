import { useTranslation } from "@/app/i18n";
import { NewsItem } from "@/components/Card";
import Interface from "@/components/Interface";

type PageProps = {
  params: {
    lang: string;
  };
};

export default async function Home({ params }: PageProps) {
  const { lang } = params;

  const { t } = await useTranslation(lang, "common");

  const res = await fetch("http://localhost:3000/api");
  const data: NewsItem[] = (await res.json()) ?? [];
  data.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <Interface
      lang={lang}
      data={data}
      filterHeading={t("filter.heading")}
      resetTitle={t("filter.reset")}
      mainTitle={t("main.h1")}
      searchBenefit={t("main.search-benefit")}
    />
  );
}
