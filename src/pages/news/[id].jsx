import React from "react";
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container, Button } from '@material-ui/core';
import styles from '../../styles/news.module.scss';
import { Header } from '../../containers/Header/Header';
import { Footer } from '../../containers/Footer/Footer';

import getPosts from "../../services/posts.service";


function SingleNews({ containerRef, title, /* img */ }) {
    return (
        <div className={styles.container} data-scroll-container ref={containerRef} id='app'>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <Container maxWidth="sm">
                <h1>{title}</h1>

                <Button variant="outlined" href="/news">Назад</Button>
                {/* <img alt={title} src={img}/> */}
            </Container>
        </main>
        <Footer />
        </div>
    );
}
export async function getStaticProps({ params, locale }) {
    const res = await getPosts(params.id).singleRequest;
    const post = await res.data;
    // const featuredImg = await getPosts(post.featured_media).getImg;
    // const img = await featuredImg.data.guid.rendered;
    // const author = await getAuthor(post.author);
    return {
      props: { 
          title: post.title.rendered, 
          content: post.content.rendered,
          ...(await serverSideTranslations(locale, ["common"])),
        //   img, 
          date: post.date },
    };
  }

export async function getStaticPaths({ locales }) {
  
    const res = await getPosts().request;
    const posts = res.data;
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
    locales.forEach((locale, i) => {
      posts.forEach((post, i) => {
        paths.push({ params: { id: post.id.toString() }, locale })
      });
    });
    // We'll pre-render only these paths at build time.
    return { paths, fallback: false };
}

export default SingleNews