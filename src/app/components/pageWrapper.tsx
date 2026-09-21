import Footer from "./footer";

export default function PageWrapper(props: { children: React.ReactNode }) {
  return (
    <main className="text-text flex flex-col">
      <div className="container mx-auto flex max-w-3xl flex-col items-start justify-center gap-2 px-16 pt-64 pb-32">
        {props.children}
      </div>
      <Footer />
    </main>
  );
}
