import React, {useState} from 'react';
import './App.css';

function App() {

  const [session, sessionCount] = useState(0)
  const [total, totalCount] = useState(0)
  const [previousSession, previousSessionCount] = useState(0)
  const [previousTotal, previousTotalCount] = useState(0)

  return (
    <div>
      <div className='session'>
        Previous Session: {previousSession}
        <br/>
        Current Session: {session}
      </div>
      <div className='total'>
        Previous Total: {previousTotal}
      </div>
      <br/>
      <button className='counter' onClick={() => {sessionCount(session + 1); totalCount(total + 1);}}>
        Total:
        <br/>
        {total}
      </button>
      <br/>
      <button className='reset' onClick={() => {previousSessionCount(session); sessionCount(0); totalCount(0);}}>
        Clear
        <br/>
        Session
      </button>
      <button className='clear' onClick={() => {previousTotalCount(total); totalCount(0);}}>
        Clear
        <br/>
        Total
      </button>
    </div>
  )
}

export default App;
