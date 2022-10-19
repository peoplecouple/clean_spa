import React from 'react'
import '../css/Basic.scss'

function Footer({ content }) {
  return (
    <footer className='Footer'>
      <address>
        {content.addr}
      </address>
      <ul className="ft_con">
        <li>사업자등록번호 : {content.number}</li>
        <li>Tel : {content.tel}</li>
        <li>e-mail : {content.email}</li>
      </ul>
      <span>
        &copy; {content.name} All Rights Reserved.
      </span>


    </footer>
  )
}

export default Footer