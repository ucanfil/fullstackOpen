import React, { useState } from 'react';

const Header = (props) => (
  <h1>{props.header}</h1>
)

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average ${good - bad === 0 ? 0 : (good - bad) / all}</p>
      <p>positive ${good === 0 ? 0 : good / (all) * 100} %</p>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={'Give feedback'} />
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />
      <Header header={'Statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
