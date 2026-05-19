import {useState} from 'react'
import { UserContext } from './UserContext'

function UserContextProvider( {children} ) {
    let User={
        name:"ravi",
        age:20,
        email:"ravi@mail.com"
    }
    const [user,setUser] = useState(User)
    //function to modify the property
    const changeUser = ()=>
    {
        setUser(user.age + 1)

    }
  return (
         <UserContext.Provider value={{user, changeUser}}>
             {children}
         </UserContext.Provider>
   );
}

export default UserContextProvider
