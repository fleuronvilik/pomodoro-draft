function PomodoroClock() {
  return (
    <React.Fragment>
      <h1>Pomodoro Clock</h1>
      <Controls />
    </React.Fragment>
  )
}

ReactDOM.render(
    <PomodoroClock />,
    document.querySelector('#root')
);