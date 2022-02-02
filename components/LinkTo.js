import Link from "next/link";

export default function LinkTo({ href, className, children }) {
  return (
    <Link scroll={false} href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}
