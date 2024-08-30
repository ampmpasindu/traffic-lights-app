import React from 'react'
import './ControlButton.css'

const ControlButton = ({ stopCommand , goCommand }) => {

  return (
    <>
      <div className='ControlButton_Body'>
        <div>
          <h2>Traffic Lights App</h2>
        </div>
        <div className='ControlButton_Button_Div'>
          <button id='ControlButton_Go_Button' onClick={goCommand}>
            GO 
          </button>
        </div>
        <div className='ControlButton_Button_Div'>
          <button id='ControlButton_Go_Button' onClick={stopCommand}>
            STOP 
          </button>
        </div>
      </div>
    </>
  )
}

export default ControlButton
