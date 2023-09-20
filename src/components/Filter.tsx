export default function Filter() {
  const PROGRAMS = [
    "OLD AGE SECURITY",
    "GUARANTEED INCOME SUPPLEMENT",
    "CANADA PENSION PLAN",
    "CANADA DENTAL BENEFIT",
    "EMPLOYMENT INSURANCE",
  ];

  return (
    <section className="md:mt-32">
      <h3 className="font-bold text-gray-600 mb-4 text-lg">
        Filter News by Benefit
      </h3>
      <form className="flex flex-col items-start gap-4">
        {PROGRAMS.map((program) => (
          <label className="flex gap-2 text-sm font-semibold text-gray-900" key={program}>
            <input type="checkbox" name={program} id={program} />
            {program}
          </label>
        ))}
        <button className="font-semibold text-gray-600 outline outline-1 p-1 rounded-sm hover:text-gray-900">Reset Filter</button>
      </form>
    </section>
  );
}
