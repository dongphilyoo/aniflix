import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { forwardRef } from 'react/cjs/react.production.min'
import { XIcon } from '@heroicons/react/outline'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Thumbnail = forwardRef(({ result }, ref) => {
  const [showModal, setShowModal] = useState(false)
  // useEffect(() => {
  //   const html = document.getElementsByTagName('html')[0]

  //   if (showModal) {
  //     html.classList.add('lock-scroll')
  //   } else {
  //     html.classList.remove('lock-scroll')
  //   }
  //   return () => {
  //     html.classList.remove('lock-scroll')
  //   }
  // }, [showModal])

  // console.log(result)

  return (
    <>
      <div
        ref={ref}
        className="m-5 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
        onClick={() => setShowModal(true)}
      >
        <Image
          layout="responsive"
          src={result.images?.webp?.large_image_url}
          alt={result.title}
          height={1200}
          width={900}
        />
        <div className="p-2 transition-all duration-100 ease-in-out group-hover:text-white">
          <p className="truncate max-w-md">{result.synopsis} </p>
          <div className="flex justify-between">
            <span role="img" aria-label="heart">
              ❤️ {result.favorites}
            </span>
            <div>
              <span className="outline rounded-sm mr-2 px-1 text-sm">
                {result.type}
              </span>
              <span>{result.aired?.from.split('T')[0]}</span>
            </div>
          </div>
          <h2 className="flex justify-between items-center mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {result.title}
          </h2>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
            <div className="relative w-auto mx-auto max-w-6xl h-screen">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-5 px-8 rounded-t">
                  <h3 className="text-3xl font-semibold">{result.title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <XIcon />
                    </span>
                  </button>
                </div>
                <div className="md:flex-grow py-4 px-8">
                  <span className="outline rounded-sm mr-2 px-1 text-sm">
                    {result.type}
                  </span>
                  <span>{result.aired.from.split('T')[0]}</span>
                </div>
                <div className="px-0 sm:px-8">
                  <LiteYouTubeEmbed id={result.trailer?.youtube_id} />
                </div>
                {/*body*/}
                <div className="relative py-3 flex-auto px-8">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {result.synopsis?.split(' [Written by MAL Rewrite]')[0]}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="text-red-300 active:text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-cyan-600 text-white active:bg-[#06202A] font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => setShowModal(false)}
                  >
                    <Link href={result.url} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        See More
                      </a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
})

export default Thumbnail
