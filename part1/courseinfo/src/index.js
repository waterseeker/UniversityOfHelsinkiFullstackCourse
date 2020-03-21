import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <p>
      {props.partName} {props.numberOfExercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.numberOfExercises1 + props.numberOfExercises2 + props.numberOfExercises3}</p>
  )
}

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
      <Header courseName={course} />
      <Content partName={part1} numberOfExercises={exercises1} />
      <Content partName={part2} numberOfExercises={exercises2} />
      <Content partName={part3} numberOfExercises={exercises3} />
      <Total numberOfExercises1={exercises1} numberOfExercises2={exercises2} numberOfExercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
