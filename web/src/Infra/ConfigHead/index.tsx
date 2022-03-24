import NextHead from "next/head";

export default function ConfigHead() {
  return (
    <NextHead>
      {`
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet">
    `}
    </NextHead>
  );
}
