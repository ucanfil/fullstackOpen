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

const Course = ({ course }) => (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} courseId={course.id} />
        <Footer parts={course.parts} />
    </div>
)

export default Course;
