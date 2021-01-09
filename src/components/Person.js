import React from 'react'

const Person = ({ name, number, handlerDeletePerson }) => {
  return (
    <p>{name} {number} <button onClick={() => handlerDeletePerson()}>delete</button></p>
  )
}

export default Person

