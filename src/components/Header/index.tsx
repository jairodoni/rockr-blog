import Head from 'next/head';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Head>
      <title>
        Rockr Blog | {title}
      </title>
    </Head>
  )
}