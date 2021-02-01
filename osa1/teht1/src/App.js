import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part content={props.part[0].name} exercises={props.part[0].excercises}/>
      <Part content={props.part[1].name} exercises={props.part[1].excercises}/>
      <Part content={props.part[2].name} exercises={props.part[2].excercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.part[0].excercises + props.part[1].excercises + props.part[2].excercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },

    {
        name: 'Using props to pass data',
        excercises: 7
      },

      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course.parts}/>
      <Total part={course.parts} />
    </div>
  )
}

export default App