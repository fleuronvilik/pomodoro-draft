class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      minutes: 25,
      seconds: 0,
      isRunning: false,
      pause: 5,
      pauseIsNext: true,
      beep: document.querySelector('audio')
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
    let {minutes, seconds, pauseIsNext} = this.state;
    minutes = !seconds ? minutes - 1 : minutes;
    seconds = !seconds ? 59 : seconds - 1;
    pauseIsNext = minutes < 0 ? !this.state.pauseIsNext : this.state.pauseIsNext;
    if (minutes < 0) {
      this.setState({
        minutes: pauseIsNext ? this.state.session : this.state.pause,
        seconds: 0,
        pauseIsNext,
        //intervalId: setInterval(this.countdown, 1000)
      })
      this.state.beep.play()
    } else {
      this.setState({
        minutes, seconds//, intervalId: setInterval(this.countdown, 1000)
      })
    }
  }

  startStop() {
    if (this.state.isRunning) {
      clearInterval(this.state.intervalId)
      this.setState({isRunning: false})
    } else {
      this.setState({
        intervalId: setInterval(this.countdown, 1000),
        isRunning: true
      })
    }
  }

  reset() {
    if (this.state.isRunning) clearInterval(this.state.intervalId)
    this.state.beep.pause()
    this.state.beep.currentTime = 0;
    this.setState({
      isRunning: false,
      pauseIsNext: true,
      session: 25,
      minutes: 25,
      seconds: 0,
      pause: 5      
    })
  }

  render() {
    const label = this.state.pauseIsNext ? "Session" : "Break";

    return (
      <React.Fragment>
        <h1>Pomodoro Clock</h1>
        <Setting label="session" length={this.state.session} increment={this.increment} decrement={this.decrement}/>
        <Setting label="break" length={this.state.pause} increment={this.increment} decrement={this.decrement}/>
        <TimeLeft
          mm={this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}
          ss={this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
          label={label}
        />
        <Controls startStop={this.startStop} reset={this.reset}/>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
    <PomodoroClock />,
    document.querySelector('#root')
);