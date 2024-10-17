import React, { useContext, useState } from 'react'
// import { Context } from './App'
const Tour = ({ id, name, image, info, price, deleteData }) => {
  //   const [source, setSource] = useContext(Context)

  //   function handleClick(id) {
  //     const onDelete = (id) => {
  //       setSource((prev) => {
  //         return prev.filter((item) => item.id != id)
  //       })
  //     }
  //     onDelete(id)
  //   }

  //   const { id, name, image, info, price } = item

  const [readMore, setReadMore] = useState(false)

  function read() {
    setReadMore(!readMore)
  }
  console.log(info.substring(0, 100))
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h3>{name}</h3>
        <p>
          {!readMore ? `${info.substring(0, 199)}...` : info}
          <button
            type="button"
            className="info-btn"
            onClick={read}
            styles={{ cursor: 'pointer' }}
          >
            {readMore ? 'read less' : 'read more'}
          </button>
        </p>
      </div>
      <button
        className="btn btn-block delete-btn"
        onClick={() => deleteData(id)}
      >
        Remove
      </button>
    </article>
  )
}

export default Tour
