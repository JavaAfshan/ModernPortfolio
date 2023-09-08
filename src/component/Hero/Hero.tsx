import React from 'react'
import FetchLeftHero from './fetchLeftHero copy'
import FetchRightHero from './fetchRightHero'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="flex h-screen">
    <div className="lg:w-1/2 lg:flex hidden">
      <FetchRightHero />
    </div>
    <div className="lg:w-1/2 w-full">
      <section className="snap-center">
        <FetchLeftHero />
      </section>
    </div>
  </div>
  )
}