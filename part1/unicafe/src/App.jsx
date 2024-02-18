// import { useState } from 'react'
import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  if (stats.total == 0) return <p>{"No feedback given"}</p>;
  return (
    <div>
      <h2>statistics:</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={stats.good} />
          <StatisticLine text="bad" value={stats.bad} />
          <StatisticLine text="total" value={stats.total} />
          <StatisticLine text="average" value={stats.average} />
          <StatisticLine text="positive" value={stats.positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  const positive = (good / +total) * 100;

  return (
    <>
      <h2>give feedback</h2>
      <div>
        <button
          onClick={() => {
            setGood(good + 1);
          }}
        >
          good
        </button>
        <button
          onClick={() => {
            setNeutral(neutral + 1);
          }}
        >
          neutral
        </button>
        <button
          onClick={() => {
            setBad(bad + 1);
          }}
        >
          bad
        </button>
      </div>
      <Statistics stats={{ good, neutral, bad, total, average, positive }} />
    </>
  );
}

export default App;
