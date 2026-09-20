import BackButton from "../components/backButton";
import Header from "../components/header";
import PageWrapper from "../components/pageWrapper";
import ProjectCard from "../components/projectCard";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Header title={"projects"} subtitle={"let there be code"} />
      <div className="w-100% mb-32 grid grid-cols-2 gap-8">
        <ProjectCard
          url={"https://graceful-speculoos-575232.netlify.app/"}
          title={"react wordle"}
          desc={
            "Wordle clone developed in react. It was a puzzle during Rethymno's treasure hunt 2026 in which I participated in the organization."
          }
        />
      </div>
      <BackButton />
    </PageWrapper>
  );
}
