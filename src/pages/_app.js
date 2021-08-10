import 'normalize.css';
import '../styles/globals.css';
import React, { useRef } from "react";
import Head from "next/dist/next-server/lib/head";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import theme from '../theme';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function MyApp({ Component, pageProps }) {
  // let [scroll, setScroll] = useState(null);
  const containerRef = useRef(null)
  // useEffect(() => {
  //   import('locomotive-scroll').then((locomotiveModule) => {

  //     // eslint-disable-next-line new-cap
  //     scroll = new locomotiveModule.default({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true,
  //       resetNativeScroll: true
  //     });

  //     setTimeout(() => {
  //       scroll.init();
  //       setScroll(scroll);
  //     }, 100);
  //   });
    
  //   return () => {
  //     scroll.destroy();
  //     document.querySelector('.c-scrollbar').remove()
  //   }
  // }, []);

  return (
    
      <ThemeProvider theme={theme}>
        <Head>
          <title>Construction</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CssBaseline />
        {/* <LocomotiveScrollProvider
            options={
              {
                smooth: true,
                // ... all available Locomotive Scroll instance options 
              }
            }
            watch={
              [
                
              ]
            }
            // containerRef={containerRef}
          > */}
        <Component ref={containerRef} {...pageProps} />
        {/* </LocomotiveScrollProvider> */}
      </ThemeProvider>
  )
}

export default MyApp;
