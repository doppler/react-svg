import React, { useState } from 'react';
import './App.css';
import Guage from './components/Guage';

function App() {
  const [percent, setPercent] = useState(0);

  return (
    <div className='App'>
      <div id='container'>
        <div id='svg'>
          <Control percent={percent} setPercent={setPercent} />
          <Guage percent={percent} />
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
      value={percent}
      onChange={e => {
        setPercent(Number(e.target.value));
      }}
    />{' '}
    {percent}
  </div>
);

export default App;
