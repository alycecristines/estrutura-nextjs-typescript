import React from 'react';
import Head from 'next/head';

import Decorator1 from '../assets/decorator1.svg';
import Decorator2 from '../assets/decorator2.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Decorator1 />
        <Decorator2 />
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default Home;
