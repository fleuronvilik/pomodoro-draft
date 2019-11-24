class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      minutes: 25,
      seconds: 0,
      isRunning: false,
      pause: 5
    }
    this.reset = this.reset.bind(this);
    this.startStop = this.startStop.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.countdown = this.countdown.bind(this);
  }

  increment(e) {
    const clicked = e.target.parentNode.id || e.target.id;
    let {session, pause} = this.state;
    session = session < 60 ? session + 1 : session
    if (clicked.includes("session")) {
      this.setState({
        session: session,
        minutes: this.state.isRunning ? this.state.minutes : session
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
        minutes: this.state.isRunning ? this.state.minutes : session
      })
    } else {
      this.setState({
        pause: pause > 1 ? pause - 1 : pause
      })
    }
  }

  countdown() {
    let {minutes, seconds} = this.state;
    minutes = !seconds ? minutes - 1 : minutes;
    seconds = !seconds ? 59 : seconds - 1;

    if (minutes < 0) {
      this.setState({
        minutes: 0,//this.state.session,
        seconds: 0,
        isRunning: false
      })
      clearTimeout(this.state.timeoutId)
    } else {
      this.setState({
        minutes, seconds, timeoutId: setTimeout(this.countdown, 1000)
      })
    }
  }

  startStop() {
    if (this.state.isRunning) {
      clearTimeout(this.state.timeoutId)
      this.setState({isRunning: false})
    } else {
      this.setState({
        timeoutId: setTimeout(this.countdown, 1000),
        isRunning: true
      })
    }
  }

  reset() {
    if (this.state.isRunning) clearTimeout(this.state.timeoutId)
    this.setState({
      session: 25,
      minutes: 25,
      seconds: 0,
      isRunning: false,
      pause: 5      
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Pomodoro Clock</h1>
        <Setting label="session" length={this.state.session} increment={this.increment} decrement={this.decrement}/>
        <Setting label="break" length={this.state.pause} increment={this.increment} decrement={this.decrement}/>
        <h2 id="timer-label">Session</h2>
        <h2 id="time-left">{this.state.minutes}:{this.state.seconds}</h2>
        <Controls startStop={this.startStop} reset={this.reset}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
    <PomodoroClock />,
    document.querySelector('#root')
);