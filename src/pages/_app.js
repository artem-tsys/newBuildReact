/* eslint-disable no-unused-vars */
import 'normalize.css';
import '../styles/globals.css';
import '../styles/reset/reset.css';
import React, { useEffect, useState } from "react";
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from "next/dist/next-server/lib/head";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/router';
import theme from '../theme';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const [scrall, setScrall] = useState(null);
  // useEffect((el) => {
  //   console.log('I Start ONLY ONCE');
  //   let scroll = null;
  //   import('locomotive-scroll').then((locomotiveModule) => {

  //     // eslint-disable-next-line new-cap
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("#__next"),
  //       smooth: true,
  //       resetNativeScroll: true
  //     });
  //     React.createContext(scroll);
  //     setTimeout(() => {
  //       scroll.init();
  //       setScrall(scroll);
  //     }, 100);
  //   });
    
  //   // return () => {
  //   //   // scroll.destroy();
  //   //   // document.querySelector('.c-scrollbar').remove()
  //   // }
  // }, []);

  // useEffect(() => {
  //   if (scrall !== null) {
  //     scrall.start();
  //     console.log(scrall);
  //   }
  // }, [router])
  // useEffect(() => {
  //   let scroll = null;
  //   import('locomotive-scroll').then((locomotiveModule) => {

  //     // eslint-disable-next-line new-cap
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       resetNativeScroll: true
  //     });
  //     React.createContext(scroll);
  //     setTimeout(() => {
  //       scroll.init();
  //     }, 100);
  //   });
    
  //   return () => {
  //     scroll.destroy();
  //     document.querySelector('.c-scrollbar').remove()
  //   }
  // });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Construction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      {/* <LocoContext.Provider value={ctx}> */}
        <Component gsap={gsap} ScrollTrigger={ScrollTrigger} {...pageProps}/>
      {/* </LocoContext.Provider> */}
    </ThemeProvider>
)
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  }
}
export default appWithTranslation(MyApp);
