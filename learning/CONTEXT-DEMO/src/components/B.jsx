import {useContext} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"
import { useTest } from '../store/TestStore.js'

function B() {
  
  let x= useTest(state=>state.x)
  let incrementX = useTest(state=>state.incrementX)
  console.log(useTest())

  let {counter1, changeCounter1} = useContext(CounterContext)
  
  return (
    <div className='text-center shadow-2xl p-10'>
      <p className='text-3xl'>Component B</p>
      <p className='text-2xl mt-10'>Counter1 : {counter1}</p>
      <p className='text-xl mt-10'>X : {x}</p>
      <button onClick={incrementX} className='bg-amber-400 p-2 mt-10'>Increment X</button>
       <button onClick={changeCounter1} className='bg-blue-300 p-2 mt-10'>Change Counter1</button>
    </div>
  )
}

export default B