import React from 'react';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Part = (props) => (
  <p>
    {props.part} {props.exercises}
  </p>
)

const Content = ({ parts, courseId }) => (
  <>
    {parts.map(part => (
      <Part key={`${courseId}-${part.id}`} part={part.name} exercises={part.exercises} />
    ))}
  </>
)

const Footer = ({ parts }) => (
  <h2>Total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises</h2>
)

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} courseId={course.id} />
          <Footer parts={course.parts} />
        </div>
      ))}
    </div>
  )
}

export default App;
