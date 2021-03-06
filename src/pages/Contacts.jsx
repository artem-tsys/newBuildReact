import React from "react";
import Head from 'next/head';
import styles from '../styles/Contacts.module.scss';
import { Header } from '../containers/Header/Header';
import { Footer } from '../containers/Footer/Footer';
import { CustomForm } from '../containers/Form/Form';

export default function Contacts({ containerRef }) {
  return (
    <div className={styles.container} data-scroll-container ref={containerRef} id='app'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main data-scroll-section>
        <h1>Contact Template</h1>
        <CustomForm />
      </main>
      <Footer />
    </div>
  );
}
