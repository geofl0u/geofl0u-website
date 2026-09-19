import BackButton from "../components/backButton";
import Header from "../components/header";
import PageWrapper from "../components/pageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Header title={'projects'} subtitle={'let there be code'} />
      <BackButton />
    </PageWrapper>
  )
}