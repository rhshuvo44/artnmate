import Link from "next/link";
import Div from "../ui/Div";

export default function TagWidget({
  title,
  data,
}: {
  title: string;
  data: { title: string; url: string }[];
}) {
  return (
    <>
      <h4 className="cs-sidebar_widget_title">{title}</h4>
      <Div className="tagcloud">
        {data?.map((tag, index) => (
          <Link href={tag.url} className="tag-cloud-link" key={index}>
            {tag.title}
          </Link>
        ))}
      </Div>
    </>
  );
}
