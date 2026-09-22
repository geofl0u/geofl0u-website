import Header from "../components/header";
import PageWrapper from "../components/pageWrapper";

import BackButton from "../components/backButton";

export default function AboutPage() {
  return (
    <PageWrapper>
      <Header title={"Georgios Flouris"} subtitle={"Software Engineer"} />
      <div className="flex flex-col gap-2 text-zinc-400">
        <div className="animate-fade-in text-xl">
          Never good with about pages, but I guess I had to include one on my
          portfolio website. Here to show the coding I have done for fun in my
          free time. Proud nerd. Video games, board games, TTRPGs, fantasy and
          pretty much anything that can identify me as a nerd.
          <p className="py-16 text-center text-xs text-zinc-600">
            journey before destination
          </p>
        </div>
      </div>
      <BackButton />
    </PageWrapper>
  );
}
