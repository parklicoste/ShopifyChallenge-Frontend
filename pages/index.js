import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainNav from './components/MainNav'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FrontEnd: Shopify Challenge</title>
        <link rel="icon" href="logo.ico" />
        
      </Head>
        <div className="container-sm " >
          <h1 className="display-1 text-bold mt-5">
            Welcome to the <a href="https://github.com/parklicoste/ShopifyChallenge-Frontend/" target="_blank">Shoppies!</a>
          </h1>
          <MainNav/>
        </div>
        
        
      

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
