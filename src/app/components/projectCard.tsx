export default function ProjectCard(props: {
  url: string;
  title: string;
  desc: string;
}) {
  const { url, title, desc } = props;

  return (
    <a
      href={url}
      target="_tab"
      className="hover: col-span-1 rounded-lg border border-gray-500 p-4 hover:bg-gray-800"
    >
      <div className="text-lg">{title}</div>
      <div className="text-sm/4 text-gray-500">{desc}</div>
    </a>
  );
}
