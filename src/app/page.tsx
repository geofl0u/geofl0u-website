import Link from "next/link";
import Header from "./components/header";
import PageWrapper from "./components/pageWrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <Header title={"geofl0u"} subtitle={"wanders through pixels and APIs"} />
      <nav className="flex flex-col gap-2 text-zinc-300">
        <Link
          href="/projects"
          className="animate-fade-in text-xl hover:text-zinc-500 hover:italic"
        >
          projects
        </Link>
        <Link
          href="/about"
          className="animate-fade-in text-xl hover:text-zinc-500 hover:italic"
        >
          about
        </Link>
      </nav>
    </PageWrapper>
  );
}
