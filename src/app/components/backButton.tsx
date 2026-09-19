import Link from "next/link";

import "~/styles/backButton.css";

export default function BackButton() {
  return (
    <div className="m-auto height-auto flex flex-col gap-2 text-zinc-500">
        <Link
          className="animate-fade-in text-l hover:text-zinc-300"
          href="/"
        >
          <span className="back-icon" />
        </Link>
      </div>
  );
}