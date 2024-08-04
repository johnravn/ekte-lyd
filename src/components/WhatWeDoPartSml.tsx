interface Props {
  title: string;
  underTitle: string;
  imageSml: string;
  flip: number;
}

export default function WhatWeDoPartSml({
  title,
  underTitle,
  imageSml,
  flip,
}: Props) {
  return (
    <>
      <h1>SMALL PART</h1>
      <h1>{title}</h1>
      <h1>{underTitle}</h1>
      <h1>{imageSml}</h1>
      <h1>{flip}</h1>
    </>
  );
}
