import React from 'react'
import Article from './Article'
import Aside from './Aside'
import '../css/Subpage.scss'

function Sub02({ content }) {
  const num = 1;
  return (
    <div className='Subpage'>
      <div className="nav_bar">
        <div className="inner">
          {content[num].tit} / {content[0].tit}
        </div>
      </div>
      <div className="inner sub">
        <Article content={content} num={num} />
        <Aside />
      </div>

    </div>
  )
}

export default Sub02