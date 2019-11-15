class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      pause: 5
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pomodoro Clock</h1>
        <Setting label="session" length={this.state.session}/>
        <Setting label="break" length={this.state.pause}/>
        <Controls />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
    <PomodoroClock />,
    document.querySelector('#root')
);