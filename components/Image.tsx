export default function Image(props: JSX.IntrinsicElements['img']) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img {...props} />
    </>
  );
}
