"use client";

import Paginate from "./Paginate";
import { IoSearch } from "react-icons/io5";
import { NewsItem } from "./Card";
import { ChangeEvent, useState, FormEvent } from "react";

type Props = {
  data: NewsItem[];
  filterHeading: string;
  resetTitle: string;
  mainTitle: string;
  searchBenefit: string;
};

export default function Interface(props: Props) {
  const [filters, setFilters] = useState<string[]>([]);

  const programs: Set<string> = new Set(
    props.data.map(({ program }: NewsItem) => program)
  );

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    if (filters.includes(name)) {
      setFilters((prev) => prev.filter((val) => val !== name));
    } else {
      setFilters((prev) => prev.concat(name));
    }
  }

  function handleResetFilters(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFilters([]);
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
            ></input>
            <button className="bg-primary self-stretch px-3 py-1.5 text-[20px] text-white">
              <IoSearch />
            </button>
          </div>
          <Paginate
            data={props.data.filter((item) =>
              filters.length ? filters.includes(item.program) : true
            )}
          />
        </section>
      </div>
    </main>
  );
}
