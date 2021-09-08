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
  const {parts} = props;

  return (
    <>
      {parts.map(part => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </>
  )
}

const Footer = (props) => (
  <p>Number of exercises {props.parts.reduce((a, b) => a + b.exercises, 0)}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
    </div>
  )
}

export default App;
