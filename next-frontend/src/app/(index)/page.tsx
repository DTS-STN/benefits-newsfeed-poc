export default function Index(){
    return     <div className="bg-[url('/splash-bg.jpg')] bg-cover h-full grid place-content-center">
    <div className="bg-white p-8">
      <img src="/goc.svg" className="h-6 block w-full" />
      <div className="mt-10 flex gap-5 justify-center">
        <a
          href="/en"
          className="bg-blue-900 text-white px-4 py-2 inline-block hover:bg-blue-950"
        >
          English
        </a>
        <a
          href="/fr"
          className="bg-blue-900 text-white px-4 py-2 inline-block hover:bg-blue-950"
        >
          Français
        </a>
      </div>
    </div>
    <div className="flex gap-5 bg-gray-300 p-8">
      <div className="flex gap-2 text-blue-900">
        <a
          href="https://www.canada.ca/en/transparency/terms.html"
          className="hover:underline text-blue-950"
        >
          Terms &amp; conditions
        </a>
        <a
          href="https://www.canada.ca/fr/transparence/avis.html"
          className="hover:underline text-blue-950"
        >
          Avis
        </a>
      </div>
      <img src="/wmms-blk.svg" className="block h-5" />
    </div>
  </div>
}