function TimeLeft(props) {
  return (
    <React.Fragment>
      <h2 id="timer-label">{props.label}</h2>
      <h2 id="time-left">{props.mm}:{props.ss}</h2>
    </React.Fragment>
  )
}