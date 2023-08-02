const Header = (props) => {
  return <div>{props.course}</div>;
};

const Content = (props) => {
  return (
    <>
      <Part title={props.title1} exercise={props.exercise1} />
      <Part title={props.title2} exercise={props.exercise2} />
      <Part title={props.title3} exercise={props.exercise3} />
    </>
  );
};
const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      {props.text}: {props.exercise1 + props.exercise2 + props.exercise3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>

      <Content
        title1={part1}
        exercise1={exercises1}
        title2={part2}
        exercise2={exercises2}
        title3={part3}
        exercise3={exercises3}
      />
      <Total
        text={"Number of exercises"}
        exercise1={exercises1}
        exercise2={exercises2}
        exercise3={exercises3}
      />
    </div>
  );
};

export default App;
