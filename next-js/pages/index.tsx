import type { NextPage } from 'next'
import Head from 'next/head'
import ContactForm from '../components/contactForm'
import { Navbar } from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Seat Notifier</title>
        <meta name="description" content="Get Notified when a research study is up for you" />
        <link rel="icon" href="https://ucalgary.sona-systems.com/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <ContactForm />
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>*/}
    </div>
  );
}

export default Home
