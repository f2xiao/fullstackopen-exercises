import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas',
    number: '040-1234567'
  }])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const areTheseObjectsEqual = (first, second) => {
    const al = Object.getOwnPropertyNames(first);
    const bl = Object.getOwnPropertyNames(second);
  
    // Check if the two list of keys are the same
    // length. If they are not, we know the objects
    // are not equal.
    if (al.length !== bl.length) return false;
  
    // Check that all keys from both objects match
    // are present on both objects.
    const hasAllKeys = al.every(value => !!bl.find(v => v === value));
  
    // If not all the keys match, we know the
    // objects are not equal.
    if (!hasAllKeys) return false;
  
    // We can now check that the value of each
    // key matches its corresponding key in the
    // other object.
    for (const key of al) if (first[key] !== second[key]) return false;
  
    // If the object hasn't return yet, at this
    // point we know that the objects are the
    // same
    return true;
  }

  const handleNewNumber = (event) => { 
    setNewNumber(event.target.value);
  }

  const handleNewName = (event) => { 
    setNewName(event.target.value);
  }
  
  const addName = (event) => { 
    console.log(newName, newNumber)
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
    }
    // check if the new name is in the persons array already
    // if yes, alert
    // if not, add to the persons array

    const sameName = persons.map((person) => person.name == newPerson.name);
    const sameNumber = persons.map((person) => person.number == newPerson.number);
  
    if(sameName.length > 0){
      alert(`${newPerson.name} already exists`);
      return;
    }


    if(sameNumber.length > 0){
      alert(`${newPerson.number} already exists`);
      return;
    }

    setPersons(persons.concat(newPerson))
   }

  return (
    <>
    <h1>Phonebook</h1>
    <form onSubmit={addName} >
      <div>
        name: <input required value={newName} onChange={handleNewName} /> <br />
        number: <input required value={newNumber} onChange={handleNewNumber} />
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
