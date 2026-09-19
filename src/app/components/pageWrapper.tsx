export default function PageWrapper(props: {children: React.ReactNode}) {
  return (
    <main className="flex flex-col text-text">
      <div className="container mx-auto flex max-w-3xl flex-col items-start justify-center gap-2 px-16 py-80">
        {props.children}
      </div>
    </main>
  );
}