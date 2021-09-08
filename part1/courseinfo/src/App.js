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

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const exercises = [part1.exercises, part2.exercises, part3.exercises];

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1.name, part2.name, part3.name]} exercises={exercises} />
      <Footer exercises={exercises} />
    </div>
  )
}

export default App;
