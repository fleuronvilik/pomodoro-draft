function Controls(props) {
  return (
    <footer>
      <button id="start_stop" onClick={props.startStop}>Start/Stop</button>
      <button id="reset" onClick={props.reset}>Reset</button>
    </footer>
  )
}