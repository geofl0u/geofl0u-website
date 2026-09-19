import Link from "next/link";
import Header from "./components/header";
import PageWrapper from "./components/pageWrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <Header title="geofl0u" subtitle="wanders through pixels and APIs" />
      <nav className="flex flex-col gap-2">
        <Link href="/projects" className="animate-fade-in text-xl">
          projects
        </Link>
        <Link href="/about" className="animate-fade-in text-xl">
          about
        </Link>
      </nav>
    </PageWrapper>
  );
}
