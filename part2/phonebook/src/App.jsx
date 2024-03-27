import { useState, useEffect } from "react";
import personService from "./services/person";
import Person from "./components/Person";
import Button from "./components/Button";

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

  const addPerson = async (event) => {
    // console.log(newName, newNumber);
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    console.log(newPerson);
    // check if the new name is in the persons array already
    // if yes, confirm to update the number

    const samePerson = persons.find((person) => person.name === newName);

    // console.log( samePerson);

    if (samePerson) {
      if (
        window.confirm(
          `${samePerson.name} already exists, do you want to update the number?`
        )
      ) {
        const changedPerson = await personService.updateOne(samePerson.id, {
          ...samePerson,
          number: newNumber,
        });
        // console.log(returnedPerson);
        console.log(
          persons.map((person) =>
            person.id !== samePerson.id ? person : changedPerson
          )
        );
        setPersons(
          persons.map((person) =>
            person.id !== samePerson.id ? person : changedPerson
          )
        );
      }
    } else {
      // add the newPerson to the db
      // re-render with the updated person
      setPersons(persons.concat(newPerson));
    }

    setNewName("");
    setNewNumber("");
  };

  const deletePerson = async (id) => {
    if (window.confirm(`Are you sure to delete it`)) {
      const deletedPerson = await personService.deleteOne(id);
      console.log(deletedPerson);
      // re-render by updateing the state of the person
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <p>
        filter search with: <input type="search" name="" id="" />
      </p>
      <form onSubmit={addPerson}>
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
        <div key={person.name}>
          <Person name={person.name} number={person.number} />
          <Button
            text="Delete"
            handleClick={() => {
              deletePerson(person.id);
            }}
          />
        </div>
      ))}
    </>
  );
}

export default App;
