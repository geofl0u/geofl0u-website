export default function Header(props: {title: string, subtitle: string}) {
  return (<header className="animate-fade-in-up mb-16">
    <h1 className="text-text text-2xl tracking-tight justify-start">{props.title}</h1>
    <p className="text-zinc-500 mt-1 text-sm/4 text-left">{props.subtitle}</p>
  </header>)
}
