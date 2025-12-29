const Test = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> // Total exercises
    </div>
  )
}



const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part_exercises.part} {props.part_exercises.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part_exercises={props.part_exercises[0]} />
      <Part part_exercises={props.part_exercises[1]} />
      <Part part_exercises={props.part_exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part_exercises = [
    {part1: 'Fundamentals of react', exercises1: 10},
    {part2: 'Using props to pass data', exercises2: 7},
    {part3: 'State of a component', exercises3: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content part_exercises={part_exercises} />
      <Total exercises1={part_exercises[0].exercises1} exercises2={part_exercises[1].exercises2} exercises3={part_exercises[2].exercises3} />
    </div>
  )
}

export default App