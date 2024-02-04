import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="lg:mr-32">
      <Image
        src="/img/other/logo.png"
        width={410}
        height={75}
        alt="Logo of the author"
        priority
        className="w-80"
      />
    </Link>
  );
}
