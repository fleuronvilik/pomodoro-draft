class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      minutes: 25,
      seconds: 0,
      pause: 5
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    const clicked = e.target.parentNode.id || e.target.id;
    let {session, pause} = this.state;
    session = session < 60 ? session + 1 : session
    if (clicked.includes("session")) {
      this.setState({
        session: session,
        minutes: session
      })
    } else {
      this.setState({
        pause: pause < 60 ? pause + 1 : pause
      })
    }
  }

  decrement(e) {
    const clicked = e.target.parentNode.id || e.target.id;
    let {session, pause} = this.state;
    session = session > 1 ? session - 1 : session
    if (clicked.includes("session")) {
      this.setState({
        session: session,
        minutes: session
      })
    } else {
      this.setState({
        pause: pause > 1 ? pause - 1 : pause
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pomodoro Clock</h1>
        <Setting label="session" length={this.state.session} increment={this.increment} decrement={this.decrement}/>
        <Setting label="break" length={this.state.pause} increment={this.increment} decrement={this.decrement}/>
        <h2 id="timer-label">Session</h2>
        <h2 id="time-left">{this.state.minutes}:{this.state.seconds}</h2>
        <Controls />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
    <PomodoroClock />,
    document.querySelector('#root')
);