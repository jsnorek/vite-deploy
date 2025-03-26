import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Welcome to My Cute Page!</h1>
      </header>
      <main>
        <p>Here's a little something to brighten your day:</p>
        <button onClick={() => setCount((count) => count + 1)}>
          You clicked {count} times!
        </button>
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Keep clicking for good vibes ✨
        </p>
      </main>
    </>
  );
}


export default App
