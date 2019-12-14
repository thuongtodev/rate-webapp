import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import withApolloClient from '../lib/withApollo';
import '../styles/main.css';
import '../styles/main.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient }: any = this.props;
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        let newDoc: any = document;
        newDoc.getElementById('holderStyle').remove();
      });
    }
    return (
      <ApolloProvider client={apolloClient}>
        <Head>
          <style
            id="holderStyle"
            dangerouslySetInnerHTML={{
              __html: `
      /* https://github.com/ant-design/ant-design/issues/16037#issuecomment-483140458 */
      /* Not only antd, but also any other style if you want to use ssr. */
      *, *::before, *::after {
        transition: none!important;
      }
    `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
