import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import LoginModel from '../components/Models/LoginModel';
import RegisterModel from '../components/Models/RegisterModel';
import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModel />
      <LoginModel />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  ) 
}

export default MyApp
