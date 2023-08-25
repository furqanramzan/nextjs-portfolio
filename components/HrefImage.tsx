import Image, { type Props } from './Image';

export default function HrefImage({ src, ...props }: Props) {
  return (
    <a href={src || '/'} target="_blank">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image src={src} {...props} />
    </a>
  );
}
