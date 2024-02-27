import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas'
  }])

  const [newName, setNewName] = useState('')

  const handleNewName = (event) => { 
    setNewName(event.target.value);
  }

  const addName = (event) => { 
    event.preventDefault();
    // check if the new name is in the persons array already
    // if yes, alert
    // if not, add to the persons array

    const samePerson = persons.filter((person) => person.name.toLocaleLowerCase() == newName.toLocaleLowerCase() );
    if(samePerson.length > 0){
      alert(`${newName} already exists`);
      return
    }

    setPersons(persons.concat({name: newName}))


   

   }

  return (
    <>
    <h1>Phonebook</h1>
    <form onSubmit={addName} >
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h1>Numbers</h1>
    {persons.map((person) => <p key={person.name}>{person.name}</p> )}
    </>
  )
}

export default App
