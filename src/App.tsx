import React, { useState } from 'react';
import './App.css';
import Guage from './components/Guage';

function App() {
  const [percent, setPercent] = useState(66.6);

  return (
    <div className='App'>
      <div id='container'>
        <div id='svg'>
          <Control percent={percent} setPercent={setPercent} />
          <Guage percent={percent} title='Percent' />
        </div>
      </div>
    </div>
  );
}

type Props = {
  percent: number;
  setPercent: React.Dispatch<React.SetStateAction<number>>;
};
const Control = ({ percent, setPercent }: Props) => (
  <div id='control'>
    <input
      type='range'
      min={0}
      max={100}
      step={0.1}
      value={percent}
      onChange={e => {
        setPercent(Number(e.target.value));
      }}
    />
  </div>
);

export default App;
