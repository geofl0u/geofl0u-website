import Link from "next/link";
import "~/styles/footer.css";

export default function PageWrapper(props: { children: React.ReactNode }) {
  return (
    <main className="text-text flex flex-col">
      <div className="container mx-auto flex max-w-3xl flex-col items-start justify-center gap-2 px-16 pt-80 pb-32">
        {props.children}
      </div>
      <div className="footer container mx-auto flex max-w-3xl flex-col justify-center gap-2 px-16">
        <div className="divider m-auto w-xs" />
        <Link href={"https://github.com/geofl0u"} target="_tab">
          <span className="git-icon pt-8" />
        </Link>
      </div>
    </main>
  );
}
