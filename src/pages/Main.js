import React from 'react'
import Customer from './Customer'
import MainContent from './MainContent'
import MainVisual from './MainVisual'

function Main() {
  return (
    <main className='Main'>
      <MainVisual />
      <MainContent />
      <Customer />
    </main>
  )
}

export default Main