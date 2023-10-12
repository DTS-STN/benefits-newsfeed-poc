export type NewsItem = {
  id: number
  program: string,
  date: Date,
  tag: string,
  en_title: string,
  en_body: string,
  fr_title: string,
  fr_body: string,
  draft: boolean
  lang: string
};

export default function Card(props: NewsItem) {
  return (
    <div className="py-4 space-y-2">
      <div className="space-x-2">
        <span className="text-gray-500 text-sm">
          <span>{props.program}</span> | <span>{props.date.toString()}</span>
        </span>
        <span
          className={`${
            props.tag === "NEW" ? "bg-green-500" : "bg-orange-500"
          } text-white px-2 py-0.5 font-semibold text-xs`}
        >
          {props.tag}
        </span>
      </div>
      <h2 className="text-2xl font-semibold">{props.lang==='en' ? props.en_title : props.fr_title}</h2>
      <p>
        {props.lang==='en' ? props.en_body : props.fr_body}
      </p>
    </div>
  );
}
