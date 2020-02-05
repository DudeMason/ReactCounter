import React, {useState} from 'react';
import './App.css';

function App() {

  const [session, countSession] = useState(0)
  const [total, countTotal] = useState(0)
  const [prev, countPrev] = useState(0)

  return (
    <div>
      <div className='total'>
        Session: {session}
      </div>
      <div className='prevSesh'>
        Previous Session: {prev}
      </div>
      <br/>
      <button className='counter' onClick={() => {countSession(session + 1); countTotal(total + 1);}}>
        Total:
        <br/>
        {total}
      </button>
      <br/>
      <button className='reset' onClick={() => {countPrev(session); countSession(0); countTotal(0);}}>
        Clear
        <br/>
        Session
      </button>
      <button className='clear' onClick={() => countTotal(0)}>
        Clear
        <br/>
        Total
      </button>
    </div>
  )
}

export default App;
