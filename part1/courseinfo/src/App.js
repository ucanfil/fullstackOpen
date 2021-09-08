import React from 'react';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
)

const Content = (props) => {
  const {parts, exercises} = props;

  return (
    <>
      {parts.map((part, i) => (
        <Part key={part} part={part} exercises={exercises[i]} />
      ))}
    </>
  )
}

const Footer = (props) => (
  <p>Number of exercises {props.exercises.reduce((a, b) => a + b)}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Footer exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App;
