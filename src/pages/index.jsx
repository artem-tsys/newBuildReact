import { useContext } from 'react';
import Head from 'next/head';
// import LocomotiveScroll from 'locomotive-scroll';
import { SmoothScrollContext } from '../contexts/SmoothScroll.context';
import styles from '../styles/Home.module.scss';
import { ReactComponent as IntroIcon } from '../../public/smarto.svg';
import { Button } from '../components/UI/Button';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function Home() {
  const { scroll } = useContext(SmoothScrollContext);
  
  const goToSecondPart = event => {
    event.preventDefault()
    scroll && scroll.scrollTo('#second-part')
  };
  
  const goToTop = event => {
    event.preventDefault()
    scroll && scroll.scrollTo(0)
  };
  console.log(scroll);
  // const containerRef = useRef(null);
   // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: containerRef.current,
  //     smooth: true,
  //     smoothMobile: false,
  //     inertia: 1.1
  //   });
  // });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section data-scroll-section className={styles.main} >
          <IntroIcon width={400} height={200} />
          <h1 data-scroll className={styles.title}>Starting template</h1>
          <a href="#second-part" onClick={goToSecondPart}>
            Go to second part
          </a>
          <Button data-scroll>Click me</Button>
          <p data-scroll>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta nostrum vitae eaque dolores nam enim
            vel! Incidunt ea et veritatis eveniet maiores laborum reprehenderit fugiat voluptatum omnis quo.
            Repudiandae quod consectetur dolor quae autem cupiditate sint molestias eius totam! Optio eum
            maiores similique accusantium quisquam nemo veritatis dolor.
            Vitae fugit, maiores perferendis velit
            officiis consequatur dolores eaque illo, ad sit molestias suscipit,
            id exercitationem non aut dolore
            numquam! Dignissimos iste incidunt, rem sed explicabo quae natus error dicta quas architecto
            cupiditate aperiam reiciendis minima aliquid perspiciatis dolor laborum inventore tempora
            voluptatibus distinctio! Reprehenderit vel quia at quam voluptates? Error, iure corporis soluta
            porro illo fuga, perspiciatis quia assumenda nisi unde optio
            praesentium incidunt fugiat saepe. Sint
            iusto aliquam numquam in nam quasi omnis deleniti, ipsa officiis maiores quidem magni odio
            dignissimos earum perferendis modi quis adipisci autem deserunt error. Temporibus, aliquam minus
            natus voluptates labore quo at velit recusandae veritatis a.
            Hic laboriosam quis libero modi totam!
            Beatae, delectus vel ducimus quos, nesciunt facilis magni facere suscipit eius esse quibusdam
            inventore sit aperiam temporibus explicabo totam a ratione, enim ut neque rerum distinctio! Non
            distinctio voluptatibus sapiente, enim ullam est quo,
            magnam iure doloremque, sit consequatur vitae.
            Illo, odio distinctio.
          </p>
          <p data-scroll>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores
            autem commodi consequuntur cum debitis doloremque dolores dolorum, ea inventore maxime
            odit, porro quam sed sint, ullam. Harum, soluta.
          </p>
          <p data-scroll>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores autem
            commodi consequuntur cum debitis doloremque dolores dolorum, ea inventore maxime odit,
            porro quam sed sint, ullam. Harum, soluta.
          </p>
          <p data-scroll>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores
            autem commodi consequuntur cum debitis doloremque dolores dolorum, ea inventore
            maxime odit, porro quam sed sint, ullam. Harum, soluta.
          </p>
          <p data-scroll>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores
            autem commodi consequuntur cum debitis doloremque dolores dolorum, ea inventore
            maxime odit, porro quam sed sint, ullam. Harum, soluta.
          </p>
      </section>
      <Footer />
    </div>
  );
}