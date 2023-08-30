import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Nextjs Portfolio"
        width="252"
        height="53"
        priority
      />
    </Link>
  );
}
