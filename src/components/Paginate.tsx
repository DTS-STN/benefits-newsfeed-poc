"use client";

import { useState } from "react";
import Card, { NewsItem } from "./Card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Props = {
  data: NewsItem[];
  pageIncrement?: number;
};

export default function Paginate({ data, pageIncrement = 3 }: Props) {
  const totalPages = Math.ceil(data.length / pageIncrement);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div>
      <div className="bg-white divide-y px-2 md:px-10 py-5 space-y-4">
        {data
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
  );
}
