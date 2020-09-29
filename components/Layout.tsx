import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const Layout: React.FC<Props> = ({
  children,
  title,
  description,
}): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="anime" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css"
      ></link>
    </Head>
    {children}
    <footer>
      <hr />
      <span>
        This project uses{' '}
        <a
          href="https://github.com/RocktimSaikia/anime-chan"
          target="_blank"
          rel="noopener  noreferrer"
        >
          anime-chan of API
        </a>
      </span>
    </footer>
  </div>
);

export default Layout;
