function Setting(props) {
  return (
    <div>
      <label htmlFor={props.label + "-length"} id={props.label + "-label"}>
        {props.label + " length"}
      </label>
      <div className="input-group">
        <div className="input-group-prepend" id={props.label + "-decrement"} onClick={props.decrement}>
          <span className="input-group-text">-</span>
        </div>
        <input 
          type="text" 
          className="form-control"  
          aria-label="Username" 
          aria-describedby={props.label + "-label"}
          readOnly value={props.length}
          id={props.label + "-length"}  
        />
        <div className="input-group-append" id={props.label + "-increment"} onClick={props.increment}>
          <span className="input-group-text">+</span>
        </div>
      </div>
    </div>
  )
}