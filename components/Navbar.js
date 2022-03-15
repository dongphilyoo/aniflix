import requests from '../utils/requests'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="relative mt-3">
      <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-blue-300"
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-600 to-transparent h-10 w-1/12" />
    </nav>
  )
}

export default Navbar
