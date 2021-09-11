import React, { useState } from 'react';

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min));

const Header = ({ header }) => <h1>{header}</h1>;

const getBiggestVoteIndex = votes => votes.indexOf(Math.max(...votes));

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  return (
    <div>
      <Header header={"Anecdote of the day"} />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} vote{votes[selected] > 1 ? "s" : ""}</p>
      <button onClick={() => {
        const copy = [...votes];
        copy[selected]++;
        setVotes(copy);
      }}>Vote</button>
      <button onClick={() => setSelected(getRandomNumber(0, anecdotes.length))}>Next quote</button>
      <Header header={"Anecdote with most votes"} />
      <p>{anecdotes[getBiggestVoteIndex(votes)]}</p>
      <p>has {votes[getBiggestVoteIndex(votes)]} vote{votes[getBiggestVoteIndex(votes)] > 1 ? "s" : ""}</p>
    </div>
  )
}

export default App;
