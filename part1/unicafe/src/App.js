import React, { useState } from 'react';

const Header = (props) => (
  <h1>{props.header}</h1>
)

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const Display = ({ info }) => <p>{info}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;

  return (
    <div>
      <Header header={'Give feedback'} />
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />
      <Header header={'Statistics'} />
      <Display info={`good ${good}`} />
      <Display info={`neutral ${neutral}`} />
      <Display info={`bad ${bad}`} />
      <Display info={`all ${all}`} />
      <Display info={`average ${(good - bad) / all}`} />
      <Display info={`positive ${good / (all) * 100} %`} />
    </div>
  )
}

export default App;
