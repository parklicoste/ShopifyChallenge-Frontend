import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FrontEnd: Shopify Challenge</title>
        <link rel="icon" href="\favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://github.com/parklicoste/ShopifyChallenge-Frontend/" target="_blank">Shoppies!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
