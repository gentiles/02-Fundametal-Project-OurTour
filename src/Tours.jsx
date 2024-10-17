import React from 'react'
import Tour from './Tour'
const Tours = ({ source, deleteData }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {source.map((item) => {
          return <Tour key={item.id} {...item} deleteData={deleteData} />
        })}
      </div>
    </section>
  )
}

export default Tours
