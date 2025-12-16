import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import { counterContext } from './context/context';

const App = () => {

  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  }

  return (

    <>

      <div>Context API Practice</div>

      {/* <counterContext.Provider value={count}>   * count is a state */}
      <counterContext.Provider value={{count, setCount}}>   
        
        {/* <Navbar count={count} /> */}
        <Navbar />

        <div>Counter
          <h3>
            <button
              onClick={incrementCounter}
            >
              Counter
            </button>

            <h1>{count}</h1>
          </h3>
        </div>

      </counterContext.Provider>
    </>
  )
}

export default App