import React from 'react'
import MainContent from './MainContent'
import MainVisual from './MainVisual'
import '../css/Main.scss'

function Main({ content }) {
  const edited_data = [content[1], content[2], content[3]]

  return (
    <main className='Main'>
      <MainVisual word={edited_data} />
      <MainContent word={edited_data} />
    </main>
  )
}

export default Main