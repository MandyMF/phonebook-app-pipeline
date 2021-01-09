import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, handlerDeletePerson }) => {
  return (
    <>
      {persons
        .filter((person) => person.name
          .toUpperCase().includes(filter.toUpperCase()))
        .map((person) =>
          <Person key={person.id} name={person.name} number={person.number} handlerDeletePerson={() => handlerDeletePerson(person.id, person.name)}/>
        )}
    </>
  )
}

export default Persons