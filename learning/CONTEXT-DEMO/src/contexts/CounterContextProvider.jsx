import {useState} from 'react'
import {CounterContext} from './CounterContext'

function CounterContextProvider({ children }) {
  //state
    const [counter1, setCounter1] = useState(1)
  //function to modify state
    const changeCounter1= () => {
        setCounter1(counter1 + 1)
    };

    return (
        <CounterContext.Provider value={{counter1, changeCounter1}}>
            {children}
        </CounterContext.Provider>
  );
}

export default CounterContextProvider