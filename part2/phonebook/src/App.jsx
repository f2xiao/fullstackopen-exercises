import { useState, useEffect } from "react";
import personService from "./services/person";
import Person from "./components/Person";

function App() {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    console.log("effect");
    const fetchAndRenderPerson = async () => {
      setPersons(await personService.getAll());
    };

    fetchAndRenderPerson();
  }, []);

  console.log("render", persons.length, "persons");

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const addName = (event) => {
    console.log(newName, newNumber);
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    // check if the new name is in the persons array already
    // if yes, alert
    // if not, add to the persons array
    // const samePerson = persons.map((person) => {
    //   areTheseObjectsEqual(person, newPerson);
    // }).filter((result) => result);
    // if (samePerson.length > 0) {
    //   alert(`${newPerson.name} already exists`);
    //   return;
    // }

    const sameName = persons
      .map((person) => person.name === newPerson.name)
      .filter((result) => result);

    const sameNumber = persons
      .map((person) => person.number === newPerson.number)
      .filter((result) => result);

    console.log(sameName);
    console.log(sameNumber);

    if (sameName.length > 0) {
      alert(`${newPerson.name} already exists`);
      return;
    }

    if (sameNumber.length > 0) {
      alert(`${newPerson.number} already exists`);
      return;
    }

    setPersons(persons.concat(newPerson));
  };

  const deletePerson = () => {
    console.log("click");
  };

  return (
    <>
      <h1>Phonebook</h1>
      <p>
        filter search with: <input type="search" name="" id="" />
      </p>
      <form onSubmit={addName}>
        <div>
          name: <input required value={newName} onChange={handleNewName} />{" "}
          <br />
          number:{" "}
          <input required value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      {persons.map((person) => (
        <Person
          key={person.name}
          id={person.id}
          name={person.name}
          number={person.number}
          clickHandler={deletePerson}
        />
      ))}
    </>
  );
}

export default App;
