import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import Footer from '../components/Footer'
import requests from '../utils/requests'

export default function Home(props) {
  console.log(props.data)

  return (
    <>
      <Head>
        <title>Aniflix</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥭</text></svg>"
        ></link>
      </Head>
      <Header />
      <Navbar />
      <Results results={props.data} />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(
    `${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res) => res.json())

  return {
    props: request,
  }
}
