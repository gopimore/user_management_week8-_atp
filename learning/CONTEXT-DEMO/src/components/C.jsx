import {useContext} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"
import { useTest } from '../store/TestStore.js' 

function C() {
//get state from Zustand store

  const x = useTest(state=>state.x) // {x:10,y:20}
  let y = useTest(state=>state.y)
  let updateUser = useTest(state=>state.updateUser)
  console.log("x is :",x)
  console.log("Y is :",y)
 let {counter1, changeCounter1} = useContext(CounterContext)
 console.log("component C is rendered")
  
  return (
    <div className='text-center shadow-2xl p-10'>
      <p className='text-3xl'>Component C</p>
      <p className='text-2xl mt-10'>Counter1 : {counter1}</p>
      <p className='text-2xl mt-10'>X : {x}</p>
      <p className='text-2xl mt-10'>Y : {y}</p>
      <button onClick={updateUser} className='bg-amber-400 p-2 mt-10'>Update User</button>


       <button onClick={changeCounter1} className='bg-blue-300 p-2 mt-10'>Change Counter1</button>
    </div>
  )
}
export default C