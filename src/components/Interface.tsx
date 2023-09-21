"use client";

import Card, { NewsItem } from "./Card";
import { IoSearch } from "react-icons/io5";
import { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  data: NewsItem[];
  filterHeading: string;
  resetTitle: string;
  mainTitle: string;
  searchBenefit: string;
};

export default function Interface(props: Props) {
  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<NewsItem[]>(props.data);

  useEffect(() => {
    setFilteredData(props.data.filter(filterItems));
  }, [filters, search]);

  const pageIncrement = 3;
  const totalPages = Math.ceil(filteredData.length/ pageIncrement);

  const programs: Set<string> = new Set(
    props.data.map(({ program }: NewsItem) => program)
  );

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentPage(0);
    let name = e.target.name;
    if (filters.includes(name)) {
      setFilters((prev) => prev.filter((val) => val !== name));
    } else {
      setFilters((prev) => prev.concat(name));
    }
  }

  function handleResetFilters(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCurrentPage(0);
    setFilters([]);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setCurrentPage(0);
    setSearch(e.target.value.trim());
  }

  function filterItems(item: NewsItem) {
    if (filters.length === 0 && search === "") return true;
    let textMatchesSearch = `${item.title} ${item.body} ${item.program}}`
      .toLowerCase()
      .includes(search);
    let programMatchesFilter = filters.includes(item.program);

    if (filters.length === 0 && search !== "") return textMatchesSearch;
    if (filters.length > 0 && search === "") return programMatchesFilter;
    return textMatchesSearch && programMatchesFilter;
  }

  return (
    <main className="py-10 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
        <section className="md:mt-32 min-w-max">
          <h3 className="font-bold text-gray-600 mb-4 text-lg">
            {props.filterHeading}
          </h3>
          <form
            className="flex flex-col items-start gap-4"
            onSubmit={handleResetFilters}
          >
            {Array.from(programs).map((program) => (
              <label
                className="flex gap-2 text-sm font-semibold text-gray-900"
                key={program}
              >
                <input
                  type="checkbox"
                  name={program}
                  id={program}
                  onChange={handleFilterChange}
                  checked={filters.includes(program)}
                />
                {program}
              </label>
            ))}
            <button className="font-semibold text-gray-600 outline outline-1 focus-visible:ring p-1 text-sm rounded-sm hover:text-gray-900">
              {props.resetTitle}
            </button>
          </form>
        </section>

        <section className="grow">
          <h1 className="text-4xl font-semibold mb-8">{props.mainTitle}</h1>
          <div className="flex mb-5">
            <label htmlFor="search-benefit" className="sr-only">
              {props.mainTitle}
            </label>
            <input
              id="search-benefit"
              placeholder={props.searchBenefit}
              className="border px-3 py-1.5 outline-none w-full"
              onChange={handleSearch}
            ></input>
            <button className="bg-primary self-stretch px-3 py-1.5 text-[20px] text-white">
              <IoSearch />
            </button>
          </div>

          <div>
            <div className="bg-white divide-y px-2 md:px-10 py-5 space-y-4">
              {filteredData
                .slice(
                  currentPage * pageIncrement,
                  currentPage * pageIncrement + pageIncrement
                )
                .map((item: NewsItem) => (
                  <Card {...item} key={item.id} />
                ))}
            </div>

            <div className="flex justify-end text-xl font-[200] rounded-md mt-4">
              {currentPage > 0 && (
                <button
                  className="p-3 bg-gray-200"
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  <FaArrowLeft className="inline" /> Prev
                </button>
              )}

              <button className="p-3 bg-blue-600 text-white">
                {currentPage + 1}
              </button>

              {currentPage + 1 < totalPages && (
                <button
                  className="p-3 bg-gray-200"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  Next <FaArrowRight className="inline" />
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
