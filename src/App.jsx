import { useState } from 'react';
import ControlButton from './component/ControlButton';
import TrafficLights from './component/TrafficLights';
import './App.css';

const App = () => {
  const [color, setColor] = useState({ red: false, orange: false, green: true });

  const stopCommand = () => {
    if (color.green) {
      setColor({ red: false, orange: true, green: false });
      const setStop = () => {
        setColor({ red: true, orange: false, green: false });
      };
      setTimeout(setStop, 5000);
    }
  };

  const goCommand = () => {
    if (color.red) {
      setColor({ red: true, orange: true, green: false });
      const setGo = () => {
        setColor({ red: false, orange: false, green: true });
      };
      setTimeout(setGo, 5000);
    };
  };

  return (
    <div className='App_Div'>
      <TrafficLights color={color} />
      <ControlButton stopCommand={stopCommand} goCommand={goCommand} />
    </div>
  );
};

export default App;
