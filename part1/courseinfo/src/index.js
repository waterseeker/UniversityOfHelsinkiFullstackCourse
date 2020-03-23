import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.part1} numberOfExercises={props.exercises1} />
      <Part partName={props.part2} numberOfExercises={props.exercises2} />
      <Part partName={props.part3} numberOfExercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.partName} {props.numberOfExercises}
    </p>
  )
}

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

  return (
    <div>
      <Header courseName={course} />
      <Content  part1={part1.name} exercises1={part1.exercises}
                part2={part2.name} exercises2={part2.exercises}
                part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
