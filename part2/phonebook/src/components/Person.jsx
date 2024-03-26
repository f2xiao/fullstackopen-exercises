const Person = ({ id, name, number, clickHandler }) => {
  return (
    <p data-id={id}>
      {name} {number}{" "}
      <span>
        <button
          onClick={() => {
            clickHandler();
          }}
        >
          Delete
        </button>
      </span>
    </p>
  );
};

export default Person;
