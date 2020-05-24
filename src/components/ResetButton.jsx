import React from 'react'

const ResetButton = (props) => {
    return (
      <div>
        <button
          className="btn"
          style={{ color: '#32CD32' }}
          onClick={() => {props.onReset()}}
        >
          Reset
        </button>
      </div>
    )
  }

export default ResetButton

