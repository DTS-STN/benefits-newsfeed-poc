import { useTranslation } from "@/app/i18n";

type Props = {
  lang: string;
};

export default async function Footer({ lang }: Props) {
  const { t } = await useTranslation(lang, "common");

  return (
    <footer>
      <div className="bg-primary text-white bg-[url('/footer_bg_img.svg')] bg-right-bottom bg-no-repeat min-h-[200px] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-bold text-lg mb-4">{t("footer.goc")}</h3>
          <div className="w-10 h-1 bg-white mb-4" aria-hidden></div>
          <div className="grid md:grid-cols-3 gap-2 md:gap-4 md:place-content-center">
            <a>{t("footer.contact")}</a>
            <a>{t("footer.news")}</a>
            <a>{t("footer.pm")}</a>
            <a>{t("footer.dept")}</a>
            <a>{t("footer.treaty")}</a>
            <a>{t("footer.about")}</a>
            <a>{t("footer.ps")}</a>
            <a>{t("footer.reporting")}</a>
            <a>{t("footer.open-gov")}</a>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="max-w-7xl mx-auto flex justify-between px-4">
          <ul className="flex flex-col md:flex-row gap-2 text-sm text-primary md:list-disc list-inside">
            <li className="list-none">
              <a href={t("footer.toc-link")}>
                {t("footer.terms-and-conditions")}
              </a>
            </li>
            <li>
              <a href={t("footer.privacy-link")}>{t("footer.privacy")}</a>
            </li>
          </ul>
          <div className="flex items-end">
            <img src="/wmms-blk.svg" className="h-8"></img>
          </div>
        </div>
      </div>
    </footer>
  );
}
