class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      pause: 5
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    const clicked = e.target.parentNode.id || e.target.id;
    const {session, pause} = this.state;
    if (clicked.includes("session")) {
      this.setState({
        session: session < 60 ? session + 1 : session
      })
    } else {
      this.setState({
        pause: pause < 60 ? pause + 1 : pause
      })
    }
  }

  decrement(e) {
    const clicked = e.target.parentNode.id || e.target.id;
    const {session, pause} = this.state;
    if (clicked.includes("session")) {
      this.setState({
        session: session > 1 ? session - 1 : session
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
        <Controls />
      </React.Fragment>
    )
  }
}

ReactDOM.render(
    <PomodoroClock />,
    document.querySelector('#root')
);