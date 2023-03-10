import Head from 'next/head'
import Image from 'next/image';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img />
          <Link href='/' passHref legacyBehavior><a>Home</a></Link>
          <Link href='events' passHref legacyBehavior><a>Events</a></Link>
          <Link href='/about-us' passHref legacyBehavior><a>About Us</a></Link>
  
        </nav>
      </header>
      <main className={styles.main}>
        {data.map((eve) => (
          <Link key={eve.id} href={`events/${eve.id}`} passHref legacyBehavior>
          <a >
            <Image width={300} height={300} src={eve.image} alt={eve.title}  />
            <h2>{eve.title}</h2>
            <p>{eve.description}</p>
          </a>
          </Link>
        ))}
        
      </main>
      <footer className={styles.footer}>
        <p>We are devs - NEXT.JS Project 2022</p>
      </footer>
    </>
  )
}




export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json');
 
  return {
        props: {
            data: events_categories
        }
    }
}