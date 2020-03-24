import React from 'react'
import ReactDOM from 'react-dom'

// helper functions //
const addNumbers = (number, currentValue) => number + currentValue

// components //
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.parts.map(part =>
    <Part key={part.name} name={part.name} exercises={part.exercises}></Part>
  )
  return (
    <div>
      {parts}
    </div>
  )
}

const Total = (x) => {
  return (
    <p>Number of exercises { x.parts.map(part => part.exercises).reduce(addNumbers) }</p>
  )
}

//main Application
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course} /> 
      <Content  parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
