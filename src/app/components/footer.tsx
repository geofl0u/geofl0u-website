import Link from "next/link";

import "~/styles/footer.css";

export default function Footer() {
  return (
    <div className="footer container mx-auto flex max-w-3xl flex-col justify-center gap-2 pb-12">
      <div className="divider m-auto w-xs" />
      <Link
        href={"https://github.com/geofl0u"}
        target="_tab"
        className="git-icon pt-8"
      />
    </div>
  );
}
