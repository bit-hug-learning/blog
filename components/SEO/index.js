import Head from 'next/head';
import React from 'react';

const SEO = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
