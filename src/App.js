import React, {useState} from 'react';
import './App.css';

function App() {

  const [session, countSession] = useState(0)
  const [total, countTotal] = useState(0)
  const [prev, countPrev] = useState(0)

  return (
    <div>
      <div className='total'>
        Total: {total}
      </div>
      <div className='prevSesh'>
        Previous Session: {prev}
      </div>
      <br/>
      <button className='counter' onClick={() => {countSession(session + 1); countTotal(total + 1);}}>
        Current Session:
        <br/>
        {session}
      </button>
      <br/>
      <button className='reset' onClick={() => countTotal(0)}>
        Reset
      </button>
      <button className='clear' onClick={() => {countPrev(session); countSession(0);}}>
        Clear
      </button>
    </div>
  )
}

export default App;
