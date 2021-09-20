import Theme from '../styles/theme';

import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>{Component.title}</title>
        <meta name="description" content={Component.description} />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 