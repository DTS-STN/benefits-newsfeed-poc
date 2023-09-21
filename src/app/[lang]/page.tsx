import { useTranslation } from "@/app/i18n";
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
  const data = await res.json();

  return (
    <Interface
      data={data}
      filterHeading={t("filter.heading")}
      resetTitle={t("filter.reset")}
      mainTitle={t("main.h1")}
      searchBenefit={t("main.search-benefit")}
    />
  );
}
