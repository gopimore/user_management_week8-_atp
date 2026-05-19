import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Technologies() {
  return (
    <div className='text-center'>
			<h1 className='text-4xl'>Technologies</h1>
            <ul>
                <li>
                <NavLink to="java">java</NavLink>
                </li>
                <li>
                    <NavLink to='nodejs'>Nodejs</NavLink>
                </li>
                <li>
                    <NavLink to='vue'>vue</NavLink>
                </li>
            </ul>
            <div style={{marginTop:'20px'}}>
              <Outlet />
            </div>
		</div>
  )
}

export default Technologies
