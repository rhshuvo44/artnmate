import Div from "./Div";

export default function VerticalLinks({
  title,
  data,
  variant,
}: {
  title?: string;
  data?: {
    name: string;
    links: string;
  }[];
  variant?: string;
}) {
  return (
    <Div
      className={`cs-hero_social_wrap cs-primary_font cs-primary_color ${
        variant ? variant : ""
      }`}
    >
      {title && <Div className="cs-hero_social_title">{title}</Div>}
      {data && (
        <ul className="cs-hero_social_links">
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.links}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </Div>
  );
}
