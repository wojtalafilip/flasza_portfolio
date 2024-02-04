import Link from "next/link";

export default function NavLink({ children, pagePath }) {
  return (
    <Link href={pagePath} className="hover:text-cobalt hover:duration-200">
      {children.toUpperCase()}
    </Link>
  );
}
