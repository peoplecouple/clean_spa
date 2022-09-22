import React from 'react'
import Customer from './Customer'
import MainContent from './MainContent'
import MainVisual from './MainVisual'
import '../css/Main.scss'

function Main({ content }) {

  return (
    <main className='Main'>
      <MainVisual word={content} />
      <MainContent word={content} />
      <Customer />
    </main>
  )
}

export default Main