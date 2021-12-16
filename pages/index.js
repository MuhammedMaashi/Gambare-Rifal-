import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gambare Rifal!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="R-Rifal..?" />
        <p className="description">
          How was your day? 
        </p>
      </main>

      <Footer />
    </div>
  )
}
