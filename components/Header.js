import Head from 'next/head'
import HeaderItem from './HeaderItem'
import Link from 'next/link'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="flex flex-col sm:flex-row p-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <h1 className="font-logo text-5xl text-white mx-10">
          <Link href="/">ANIFLIX</Link>
        </h1>
      </header>
    </>
  )
}

export default Header
