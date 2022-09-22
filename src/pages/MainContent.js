import React from 'react'
import { Link } from 'react-router-dom'

function MainContent({ word }) {
  //const {word} = props;
  return (
    <section className="MainContent">
      <div className="inner">
        {
          word.map((el, idx) => {
            return (
              <Link to={el.link}>
                <figure key={el.id}>
                  <img src={process.env.PUBLIC_URL + "/assets/images/main_s01" + (idx + 1) + ".jpg"} alt="" />
                  {/* <img src={process.env.PUBLIC_URL + `/assets/images/main_s01${idx + 1}.jpg`} alt="" /> */}
                </figure>
                <strong>{el.tit}</strong>
                <p>{el.des}</p>
              </Link>

            )
          })
        }
      </div>
    </section>
  )
}

export default MainContent