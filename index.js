function PomodoroClock() {
  return (
    <React.Fragment>
      <h1>Pomodoro Clock</h1>
      <Setting label="session" />
      <Setting label="break" />
      <Controls />
    </React.Fragment>
  )
}

ReactDOM.render(
    <PomodoroClock />,
    document.querySelector('#root')
);