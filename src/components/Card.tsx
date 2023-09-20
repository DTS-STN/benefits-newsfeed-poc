type Props = {
  tag: "NEW" | "UPDATED";
};

export default function Card(props: Props) {
  return (
    <div className="py-4 space-y-2">
      <div className="space-x-2">
        <span className="text-gray-500 text-sm">
          Guaranteed Income Supplement | September 15, 2023
        </span>
        <span
          className={`${
            props.tag === "NEW" ? "bg-green-500" : "bg-orange-500"
          } text-white px-2 py-0.5 font-semibold text-xs`}
        >
          {props.tag}
        </span>
      </div>
      <h2 className="text-2xl font-semibold">One time grant</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, qui?
      </p>
    </div>
  );
}
