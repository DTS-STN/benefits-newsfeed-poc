import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { useTranslation } from "@/app/i18n";

type Props = {
  lang: string;
};

export default async function Header({ lang }: Props) {
  const { t } = await useTranslation(lang, "common");

  return (
    <header className="mb-2">
      <div className="border-b-primary border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 px-4 py-10">
            <div className="flex justify-between md:gap-10">
              <img src="/goc.svg" className="h-6 md:h-8" />
              <a
                href={lang === "en" ? "/fr" : "/en"}
                className="block md:hidden text-primary"
              >
                {lang === "en" ? "FR" : "EN"}
              </a>
            </div>
            <div className="flex flex-col">
              <a
                href={lang === "en" ? "/fr" : "/en"}
                className="underline mb-2 self-end hidden md:block text-primary"
              >
                {lang === "en" ? "Français" : "English"}
              </a>
              <div className="flex">
                <label htmlFor="search-canada-ca" className="sr-only">
                  Search Canada.ca
                </label>
                <input
                  id="search-canada-ca"
                  placeholder="Search Canada.ca"
                  className="border px-3 py-1.5 outline-none"
                ></input>
                <button className="bg-primary self-stretch px-3 py-1.5 text-[20px] text-white">
                  <IoSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <nav className="px-4">
          <button className="bg-primary flex items-center gap-2 px-5 py-2.5 text-white">
            Menu
            <span>
              <FaChevronDown />
            </span>
          </button>
          <div className="flex items-center gap-2 underline mt-5 text-primary">
            <a href="https://www.canada.ca/">Canada.ca</a>
            <BsChevronRight className="stroke-primary text-xs" aria-hidden />
            <a href={`/${lang}`}>{t("title")}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
