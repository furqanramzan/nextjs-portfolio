import Image from 'next/image';

export default function AppLogo() {
  return (
    <Image
      src="/logo.png"
      alt="Nextjs Portfolio"
      width="168"
      height="42"
      priority
    />
  );
}
