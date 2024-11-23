import { useState } from "react";

const Statistics = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const increaseGood = () => {
    setTotal(total + 1);
    return setGood(good + 1);
  };

  const increaseBad = () => {
    setTotal(total + 1);
    return setBad(bad + 1);
  };

  const increaseNeutral = () => {
    setTotal(total + 1);
    return setNeutral(neutral + 1);
  };

  const average = () => {
    const sum_percentage = good * 1 + neutral * 0 + bad * -1;
    return sum_percentage / total;
  };

  const positive = () => {
    return (good / total) * 100;
  };

  const voteQuantity = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)); // Select random anecdotes
  };

  const mostVoteAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const mostVotedIndex = votes.indexOf(maxVotes);

    return {
      anecdote: anecdotes[mostVotedIndex],
      votes: maxVotes,
    };
  };
  const mostVoted = mostVoteAnecdote();

  return (
    <>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={increaseGood} /> {""}
      <Button text={"neutral"} onClick={increaseNeutral} /> {""}
      <Button text={"bad"} onClick={increaseBad} /> {""}
      <div>
        <h2>statistics</h2>
        <Statistics text={"good"} value={good} />
        <Statistics text={"neutral"} value={neutral} />
        <Statistics text={"bad"} value={bad} />
        <Statistics text={"average"} value={average()} />
        <div>
          <Statistics text={"positive"} value={positive()} />%
        </div>
        <h2>Anecdote of the day</h2>
        <p>{anecdotes[selected]}</p>
        <p>Has {votes[selected]} votes</p>
        <Button text={"vote"} onClick={voteQuantity} /> {""}
        <Button text={"next anecdote"} onClick={nextAnecdote} />
        <h2>Anecdote with most votes</h2>
        <p>{mostVoted.anecdote}</p>
        <p>has {mostVoted.votes} votes</p>
      </div>
    </>
  );
};

export default App;
