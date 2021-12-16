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
          How was your day? <code>uwu</code>
        </p>
    <iframe width="420" height="315"
src="https://www.youtube.com/embed/HGWwNUzjv20">
</iframe>
      </main>

      <Footer />
    </div>
  )
}
