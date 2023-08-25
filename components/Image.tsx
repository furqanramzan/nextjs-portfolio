export type Props = Omit<JSX.IntrinsicElements['img'], 'src'> & {
  src: string | null;
};

export default function Image({ src, ...props }: Props) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      {src && <img src={src} {...props} />}
    </>
  );
}
