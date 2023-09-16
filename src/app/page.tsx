import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <header className="mb-2">
        <div className="border-b-primary border-b">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 px-4 md:px-20 py-10">
            <div className="flex justify-between md:gap-10">
              <img src="/goc.svg" className="h-6 md:h-8" />
              <a className="block md:hidden">FR</a>
            </div>
            <div className="flex flex-col">
              <a href="#" className="underline mb-2 self-end hidden md:block">
                Français
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
        <div className="px-4 md:px-20">
          <button className="bg-primary flex items-center gap-2 px-5 py-2.5 text-white">
            Menu
            <span>
              <FaChevronDown />
            </span>
          </button>
          <div className="flex items-center gap-2 underline mt-5">
            <a>Canada.ca</a>
            <BsChevronRight />
            <a>Benefit News</a>
          </div>
        </div>
      </header>

      <main className="px-4 md:px-20 py-10 md:py-20 bg-gray-100 flex flex-col md:flex-row gap-10">
        <section className="md:mt-32">
          <h3 className="font-semibold text-gray-500">Filter News by Benefit</h3>
          <div className="flex flex-col items-start">
            <label className="flex gap-2">
              <input type="checkbox" name="" id="" />
              filter
            </label>
            <label className="flex gap-2">
              <input type="checkbox" name="" id="" />
              filter
            </label>
            <label className="flex gap-2">
              <input type="checkbox" name="" id="" />
              filter
            </label>
            <label className="flex gap-2">
              <input type="checkbox" name="" id="" />
              filter
            </label>
            <label className="flex gap-2">
              <input type="checkbox" name="" id="" />
              filter
            </label>
            <label className="flex gap-2">
              <input type="checkbox" name="" id="" />
              filter
            </label>
          </div>
        </section>
        <section className="grow">
          <h1 className="text-4xl font-semibold mb-8">Benefit News Updates</h1>
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
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-2">
                <span className="text-gray-500 text-sm">Guaranteed Income Supplement | September 15, 2023</span>
                <span className="bg-green-500 text-white px-2 py-0.5 font-semibold text-sm">Update</span>
              </div>
              <h2 className="text-2xl font-semibold">One time grant</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci, qui?
              </p>
            </div>
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-2">
                <span className="text-gray-500 text-sm">Guaranteed Income Supplement | September 15, 2023</span>
                <span className="bg-green-500 text-white px-2 py-0.5 font-semibold text-sm">Update</span>
              </div>
              <h2 className="text-2xl font-semibold">One time grant</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci, qui?
              </p>
            </div>
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-2">
                <span className="text-gray-500 text-sm">Guaranteed Income Supplement | September 15, 2023</span>
                <span className="bg-orange-500 text-white px-2 py-0.5 font-semibold text-sm">New</span>
              </div>
              <h2 className="text-2xl font-semibold">One time grant</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci, qui?
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="bg-primary text-white bg-[url('/footer_bg_img.svg')] bg-right-bottom bg-no-repeat min-h-[200px] px-4 md:px-20 py-10">
          <h3 className="font-bold text-lg mb-4">Government of Canada</h3>
          <div className="grid md:grid-cols-3 gap-2 md:gap-4 md:place-content-center">
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
          </div>
        </div>
        <div className="flex justify-between px-4 md:px-20 py-10">
          <div className="flex flex-col md:flex-row gap-2">
            <a>link</a>
            <a>link</a>
            <a>link</a>
            <a>link</a>
          </div>
          <div className="flex items-end">
            <img src="/wmms-blk.svg" className="h-8"></img>
          </div>
        </div>
      </footer>
    </>
  );
}
