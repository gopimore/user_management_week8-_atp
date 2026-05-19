import {useContext,useRef,useEffect} from 'react'
import {CounterContext} from "../contexts/CounterContext.js"
import { UserContext } from '../contexts/UserContext.js'


function A() {
  let inputRef=useRef(null)
  let {counter1, changeCounter1} = useContext(CounterContext)
  

  useEffect(()=>{
    inputRef.current.focus()
    },[])

  return (
    <div className='text-center shadow-2xl p-10 flex-col flex-wrap'>
      <p className='text-3xl'>Component A</p>
      <p className='text-2xl mt-10'>Counter1 : {counter1}</p>
      <button onClick={changeCounter1} className='bg-blue-300 p-2 mt-10'>Change Counter1</button><br />
      
      <input ref={inputRef} type="text" className='border-4 mt-5  ' />

    </div>
  )
}

export default A