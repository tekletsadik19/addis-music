import 'semantic-ui-css/semantic.min.css';
import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>My App</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
