import { v4 as uuidv4 } from "uuid";
import BackButton from "../components/backButton";
import Header from "../components/header";
import PageWrapper from "../components/pageWrapper";
import ProjectCard from "../components/projectCard";
import { PROJECTS } from "../PROJECTS";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Header title={"projects"} subtitle={"let there be code"} />
      <div className={`w-100% just mb-32 grid grid-cols-2 gap-8`}>
        {PROJECTS.map((p) => (
          <ProjectCard
            key={uuidv4()}
            url={p.url}
            title={p.title}
            desc={p.desc}
          />
        ))}
      </div>
      <BackButton />
    </PageWrapper>
  );
}
