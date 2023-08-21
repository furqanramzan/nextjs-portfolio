import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Nextjs Portfolio"
        width="168"
        height="42"
        priority
      />
    </Link>
  );
}
